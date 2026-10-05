# Bisrat Amare — Portfolio Website

Premium full-stack portfolio. React frontend + Node.js/Express backend. Deployable to Vercel.

---

## Folder Structure

```
bisrat-portfolio/
├── frontend/               ← React app (deploy to Vercel)
│   ├── public/
│   │   ├── index.html
│   │   └── Bisrat_Amare_CV.pdf   ← Place your CV here
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/
│   │   │   └── projects.js     ← Edit this to add/remove projects
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── App.jsx
│   ├── package.json
│   └── .env
├── backend/                ← Node.js API (deploy as Vercel serverless)
│   ├── src/
│   │   └── routes/
│   │       └── contact.js
│   ├── index.js
│   ├── package.json
│   └── .env
└── README.md
```

---

## Quick Start

### 1. Frontend

```bash
cd frontend
npm install
npm start
```

### 2. Backend

```bash
cd backend
npm install
node index.js
```

---

## Environment Variables

### frontend/.env
```
REACT_APP_API_URL=http://localhost:5000
```

### backend/.env
```
EMAIL_USER=bisratamare88@gmail.com
EMAIL_PASS=your_gmail_app_password_here
PORT=5000
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords → generate one for "Mail".

---

## Vercel Deployment

### Deploy Frontend
```bash
cd frontend
npm install -g vercel
vercel
```

### Deploy Backend as Serverless
```bash
cd backend
vercel
```
Set environment variables in Vercel Dashboard → Project → Settings → Environment Variables.

Update `frontend/.env` with your backend Vercel URL:
```
REACT_APP_API_URL=https://your-backend.vercel.app
```

---

## Adding New Projects

Edit `frontend/src/data/projects.js` — add a new object to the array:

```js
{
  id: 7,
  title: "My New Project",
  description: "What it does...",
  tags: ["React", "Node.js"],
  github: "https://github.com/Bisrat12Amare/new-project",
  live: "",
  featured: false,
  icon: "🚀"
}
```

That's it — the Projects section renders dynamically from this file.
