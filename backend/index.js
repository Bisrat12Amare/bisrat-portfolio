const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rate limiting store (simple in-memory)
const rateLimitMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const max = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  const record = rateLimitMap.get(ip);
  if (now - record.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  if (record.count >= max) return true;
  record.count++;
  return false;
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password (not your main password)
  },
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;

  if (rateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait 15 minutes.' });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message too long.' });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject || 'New Message'} — from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #f0ede8; padding: 2rem; border-radius: 8px;">
        <h2 style="color: #FF6B1A; border-bottom: 1px solid #222; padding-bottom: 1rem;">New Portfolio Contact</h2>
        <table style="width: 100%; margin-bottom: 1.5rem;">
          <tr><td style="color: #888; width: 80px; padding: 6px 0;">Name:</td><td style="color: #f0ede8;">${name}</td></tr>
          <tr><td style="color: #888; padding: 6px 0;">Email:</td><td style="color: #FF6B1A;"><a href="mailto:${email}" style="color: #FF6B1A;">${email}</a></td></tr>
          <tr><td style="color: #888; padding: 6px 0;">Subject:</td><td style="color: #f0ede8;">${subject || '(No subject)'}</td></tr>
        </table>
        <div style="background: #1a1a1a; padding: 1rem; border-left: 3px solid #FF6B1A; border-radius: 4px;">
          <p style="color: #888; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="white-space: pre-wrap; line-height: 1.7;">${message}</p>
        </div>
        <p style="color: #555; font-size: 12px; margin-top: 1.5rem;">Sent from Bisrat Amare's Portfolio · ${new Date().toLocaleString()}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', name: 'Bisrat Amare Portfolio API' }));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
