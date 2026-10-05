// ============================================================
// OFFICIAL BRAND LOGOS (Simple Icons set via react-icons)
// Used by the Tech Stack section and the project cards.
// `invert: true` marks logos whose official brand colour is
// near-black and would be invisible on this dark UI.
// ============================================================

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiSwagger,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiDart,
  SiRedis,
  SiStripe,
  SiJsonwebtokens,
} from 'react-icons/si';

export const brandLogos = {
  react: { Icon: SiReact },
  nodejs: { Icon: SiNodedotjs },
  express: { Icon: SiExpress },
  flutter: { Icon: SiFlutter },
  firebase: { Icon: SiFirebase },
  supabase: { Icon: SiSupabase },
  mongodb: { Icon: SiMongodb },
  postgresql: { Icon: SiPostgresql },
  rest: { Icon: SiSwagger },
  git: { Icon: SiGit },
  github: { Icon: SiGithub, invert: true },
  javascript: { Icon: SiJavascript },
  typescript: { Icon: SiTypescript },
  tailwind: { Icon: SiTailwindcss },
  socketio: { Icon: SiSocketdotio, invert: true },
  dart: { Icon: SiDart },
  redis: { Icon: SiRedis },
  stripe: { Icon: SiStripe },
  jwt: { Icon: SiJsonwebtokens },
};

export function BrandLogo({ name }) {
  const logo = brandLogos[name];
  if (!logo) return null;

  const { Icon, invert } = logo;

  return (
    <Icon
      className={`brand-logo${invert ? ' brand-logo--invert' : ''}`}
      role="img"
      aria-label={name}
    />
  );
}
