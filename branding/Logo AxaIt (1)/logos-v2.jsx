// Runda 2 — rafinări pentru favoritele 2, 4, 6, 8
// Toate au monograma "AXA" (3 litere) în loc de "AX"
// Fiecare concept are 3 sub-variante: A (base), B (alt color/font), C (twist)

const LogoFrame2 = ({ children, bg = '#FAFAFA', label, height = 220 }) => (
  <div style={{
    display: 'flex', flexDirection: 'column',
    background: bg,
    height, width: '100%',
    alignItems: 'center', justifyContent: 'center',
    position: 'relative',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  }}>
    {children}
    {label && (
      <div style={{
        position: 'absolute', bottom: 10, left: 12,
        fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: bg === '#FAFAFA' || bg === '#FFFFFF' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.5)',
        fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500,
      }}>{label}</div>
    )}
  </div>
);

const LogoShowcase2 = ({ Logo, Mark, bgDark = '#0B1220', accentName, tagline }) => (
  <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif' }}>
    <LogoFrame2 bg="#FFFFFF" label="Light" height={190}>
      <Logo />
    </LogoFrame2>
    <LogoFrame2 bg={bgDark} label="Dark" height={190}>
      <Logo dark />
    </LogoFrame2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <LogoFrame2 bg="#F4F4F5" label="Mark" height={130}>
        <div style={{ width: 64, height: 64 }}>{Mark}</div>
      </LogoFrame2>
      <LogoFrame2 bg={bgDark} label="Mark" height={130}>
        <div style={{ width: 64, height: 64 }}>{Mark}</div>
      </LogoFrame2>
    </div>
    {tagline && (
      <div style={{
        padding: '14px 16px', fontSize: 11.5, color: 'rgba(0,0,0,0.6)',
        background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)',
        lineHeight: 1.55, minHeight: 60,
      }}>
        <strong style={{ color: '#111' }}>{accentName}</strong> · {tagline}
      </div>
    )}
  </div>
);

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONCEPT 2 — AXIS (X = două axe încrucișate, AXA monogramă) ║
// ╚══════════════════════════════════════════════════════════════╝

// 2A — Gradient original albastru-violet, pătrat rotunjit
const Logo2AMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#g2a)" />
    {/* A */}
    <path d="M10 48 L17 16 L24 48 M13 40 L21 40" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* X as crossed axes */}
    <path d="M28 18 L40 46 M40 18 L28 46" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="34" cy="32" r="2" fill="#fff" />
    {/* A */}
    <path d="M42 48 L49 16 L56 48 M45 40 L53 40" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const Logo2A = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 60, height: 60 }}>{Logo2AMark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em',
      color: dark ? '#fff' : '#0F172A',
    }}>
      axa<span style={{ fontWeight: 700 }}>it</span>
      <span style={{ color: '#7C3AED' }}>.</span>
    </div>
  </div>
);

// 2B — Doar albastru corporate (mai safe, premium)
const Logo2BMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="14" fill="#0B1F3A" />
    <path d="M10 48 L17 16 L24 48 M13 40 L21 40" stroke="#60A5FA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M28 18 L40 46 M40 18 L28 46" stroke="#60A5FA" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="34" cy="32" r="2.5" fill="#3B82F6" />
    <path d="M42 48 L49 16 L56 48 M45 40 L53 40" stroke="#60A5FA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const Logo2B = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 60, height: 60 }}>{Logo2BMark}</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{
        fontFamily: "'Space Grotesk', Inter, sans-serif",
        fontSize: 32, fontWeight: 700, letterSpacing: '-0.025em',
        color: dark ? '#fff' : '#0B1F3A',
      }}>AXA <span style={{ color: '#3B82F6' }}>IT</span></div>
      <div style={{
        marginTop: 6, fontSize: 9.5, letterSpacing: '0.24em', textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(11,31,58,0.55)', fontWeight: 600,
      }}>Managed IT · Cloud · Security</div>
    </div>
  </div>
);

// 2C — X-ul devine axă centrală, A-urile sunt oglindite (simetrie AxA)
const Logo2CMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g2c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="64" height="64" rx="32" fill="url(#g2c)" />
    {/* A left */}
    <path d="M8 46 L15 18 L22 46 M11 38 L19 38" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Central X - the axis */}
    <path d="M26 18 L38 46 M38 18 L26 46" stroke="#FBBF24" strokeWidth="2.8" strokeLinecap="round" />
    {/* A right (mirrored) */}
    <path d="M42 46 L49 18 L56 46 M45 38 L53 38" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const Logo2C = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 56, height: 56 }}>{Logo2CMark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em',
      color: dark ? '#fff' : '#1E3A8A',
    }}>
      A<span style={{ color: '#F59E0B', fontWeight: 700 }}>X</span>A <span style={{ fontWeight: 300, color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(30,58,138,0.55)' }}>IT</span>
    </div>
  </div>
);

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONCEPT 4 — PRISM (diamant rotit la 45°, AXA energic)       ║
// ╚══════════════════════════════════════════════════════════════╝

// 4A — Original portocaliu-roșu
const Logo4AMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g4a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    <g transform="translate(32 32) rotate(45)">
      <rect x="-22" y="-22" width="44" height="44" rx="5" fill="url(#g4a)" />
    </g>
    <text x="32" y="38" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="17" fontWeight="800" fill="#fff" letterSpacing="-0.5">AXA</text>
  </svg>
);
const Logo4A = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo4AMark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 36, fontWeight: 800, letterSpacing: '-0.04em',
      color: dark ? '#fff' : '#18181B',
      textTransform: 'uppercase',
    }}>
      Axa<span style={{
        background: 'linear-gradient(135deg, #F97316, #DC2626)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>IT</span>
    </div>
  </div>
);

// 4B — Diamant albastru corporate (safe & premium)
const Logo4BMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g4b" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    <g transform="translate(32 32) rotate(45)">
      <rect x="-22" y="-22" width="44" height="44" rx="5" fill="url(#g4b)" />
      <rect x="-22" y="-22" width="44" height="44" rx="5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    </g>
    <text x="32" y="38" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="17" fontWeight="800" fill="#fff" letterSpacing="-0.5">AXA</text>
  </svg>
);
const Logo4B = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo4BMark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 36, fontWeight: 700, letterSpacing: '-0.035em',
      color: dark ? '#fff' : '#1E3A8A',
    }}>
      AXA<span style={{ color: '#3B82F6' }}>IT</span>
    </div>
  </div>
);

// 4C — Două diamante suprapuse (cel mic peste cel mare) — duo-tone
const Logo4CMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <g transform="translate(32 34) rotate(45)">
      <rect x="-24" y="-24" width="48" height="48" rx="6" fill="#7C3AED" />
    </g>
    <g transform="translate(32 30) rotate(45)">
      <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#F59E0B" />
    </g>
    <text x="32" y="36" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="13" fontWeight="800" fill="#111" letterSpacing="-0.5">AXA</text>
  </svg>
);
const Logo4C = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 60, height: 60 }}>{Logo4CMark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em',
      color: dark ? '#fff' : '#18181B',
      textTransform: 'uppercase',
    }}>
      Axa <span style={{ color: '#7C3AED' }}>/</span> <span style={{ color: '#F59E0B' }}>IT</span>
    </div>
  </div>
);

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONCEPT 6 — STACK (infrastructură, mono-font, AXA)          ║
// ╚══════════════════════════════════════════════════════════════╝

// 6A — Violet original, dar cu AXA în loc de AX
const Logo6AMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="10" fill="#111827" />
    {/* Server stack bars */}
    <rect x="8" y="14" width="48" height="5" rx="1" fill="#A78BFA" />
    <rect x="8" y="22" width="48" height="5" rx="1" fill="#8B5CF6" />
    <rect x="8" y="30" width="48" height="5" rx="1" fill="#7C3AED" />
    <rect x="8" y="38" width="30" height="5" rx="1" fill="#6D28D9" />
    <rect x="40" y="38" width="16" height="5" rx="1" fill="#6D28D9" />
    <rect x="8" y="46" width="20" height="5" rx="1" fill="#5B21B6" />
    <rect x="30" y="46" width="12" height="5" rx="1" fill="#5B21B6" />
    <rect x="44" y="46" width="12" height="5" rx="1" fill="#5B21B6" />
  </svg>
);
const Logo6A = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo6AMark}</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
        fontSize: 26, fontWeight: 700, letterSpacing: '-0.04em',
        color: dark ? '#fff' : '#111827',
      }}>axa_it</div>
      <div style={{
        marginTop: 6, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: dark ? '#A78BFA' : '#7C3AED', fontWeight: 600,
      }}>IT Outsourcing</div>
    </div>
  </div>
);

// 6B — Verde tech (cloud/devops), terminal vibe
const Logo6BMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="10" fill="#0C1F1A" />
    <rect x="8" y="14" width="48" height="5" rx="1" fill="#34D399" />
    <rect x="8" y="22" width="48" height="5" rx="1" fill="#10B981" />
    <rect x="8" y="30" width="48" height="5" rx="1" fill="#059669" />
    <rect x="8" y="38" width="30" height="5" rx="1" fill="#047857" />
    <rect x="40" y="38" width="16" height="5" rx="1" fill="#047857" />
    <rect x="8" y="46" width="20" height="5" rx="1" fill="#065F46" />
    <rect x="30" y="46" width="12" height="5" rx="1" fill="#065F46" />
    <rect x="44" y="46" width="12" height="5" rx="1" fill="#065F46" />
  </svg>
);
const Logo6B = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo6BMark}</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em',
        color: dark ? '#fff' : '#0C1F1A',
      }}><span style={{ color: '#10B981' }}>$</span> axa.it</div>
      <div style={{
        marginTop: 6, fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: dark ? '#34D399' : '#059669', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
      }}>// cloud · devops · support</div>
    </div>
  </div>
);

// 6C — AXA scris în blocuri/stack, fiecare literă e o "ladă"
const Logo6CMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="10" fill="#18181B" />
    {/* A | X | A  — trei "containere" */}
    <rect x="8" y="16" width="14" height="32" rx="2" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
    <text x="15" y="38" textAnchor="middle" fontFamily="'JetBrains Mono', monospace"
          fontSize="14" fontWeight="700" fill="#A78BFA">A</text>
    <rect x="25" y="16" width="14" height="32" rx="2" fill="#7C3AED" />
    <text x="32" y="38" textAnchor="middle" fontFamily="'JetBrains Mono', monospace"
          fontSize="14" fontWeight="700" fill="#fff">X</text>
    <rect x="42" y="16" width="14" height="32" rx="2" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
    <text x="49" y="38" textAnchor="middle" fontFamily="'JetBrains Mono', monospace"
          fontSize="14" fontWeight="700" fill="#A78BFA">A</text>
  </svg>
);
const Logo6C = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo6CMark}</div>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em',
      color: dark ? '#fff' : '#18181B',
    }}>
      [AXA] <span style={{ color: '#7C3AED' }}>IT</span>
    </div>
  </div>
);

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONCEPT 8 — AXIS LINE (minimalism, AXA editorial)           ║
// ╚══════════════════════════════════════════════════════════════╝

// 8A — Original minimal (wordmark + bară)
const Logo8AMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="4" fill="#FAFAFA" stroke="#18181B" strokeWidth="1.5" />
    <text x="32" y="36" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="18" fontWeight="700" fill="#18181B" letterSpacing="-0.8">AXA</text>
    <line x1="12" y1="44" x2="52" y2="44" stroke="#18181B" strokeWidth="1.5" />
    <circle cx="48" cy="44" r="2.5" fill="#EAB308" stroke="#18181B" strokeWidth="1" />
  </svg>
);
const Logo8A = ({ dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 38, fontWeight: 600, letterSpacing: '0.02em',
      color: dark ? '#fff' : '#18181B',
      textTransform: 'uppercase',
    }}>AXA · IT</div>
    <div style={{
      width: 200, height: 1.5,
      background: dark ? '#fff' : '#18181B',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', right: 35, top: -3, width: 7, height: 7,
        borderRadius: '50%', background: '#EAB308',
        border: `1.5px solid ${dark ? '#fff' : '#18181B'}`,
      }} />
    </div>
    <div style={{
      marginTop: 4, fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(24,24,27,0.55)', fontWeight: 500,
    }}>Enterprise IT Partner</div>
  </div>
);

// 8B — Axa ca element conceptual: A—X—A despărțite de bare
const Logo8BMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="4" fill="#0B1F3A" />
    <text x="14" y="38" fontFamily="'Space Grotesk', sans-serif" fontSize="18" fontWeight="700" fill="#fff">A</text>
    <line x1="25" y1="30" x2="25" y2="38" stroke="#3B82F6" strokeWidth="1.2" />
    <text x="28" y="38" fontFamily="'Space Grotesk', sans-serif" fontSize="18" fontWeight="700" fill="#3B82F6">X</text>
    <line x1="40" y1="30" x2="40" y2="38" stroke="#3B82F6" strokeWidth="1.2" />
    <text x="43" y="38" fontFamily="'Space Grotesk', sans-serif" fontSize="18" fontWeight="700" fill="#fff">A</text>
  </svg>
);
const Logo8B = ({ dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 10,
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em',
      color: dark ? '#fff' : '#0B1F3A',
      textTransform: 'uppercase',
    }}>
      <span>A</span>
      <span style={{ fontSize: 16, fontWeight: 400, color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(11,31,58,0.3)' }}>|</span>
      <span style={{ color: '#3B82F6' }}>X</span>
      <span style={{ fontSize: 16, fontWeight: 400, color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(11,31,58,0.3)' }}>|</span>
      <span>A</span>
      <span style={{ fontSize: 22, fontWeight: 300, marginLeft: 4, color: dark ? 'rgba(255,255,255,0.6)' : 'rgba(11,31,58,0.6)' }}>IT</span>
    </div>
    <div style={{
      marginTop: 6, fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(11,31,58,0.55)', fontWeight: 500,
    }}>Infrastructure · Cloud · Security</div>
  </div>
);

// 8C — Wordmark ștanțat pe cadru oval — premium, insignă
const Logo8CMark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="2" y="18" width="60" height="28" rx="14" fill="none" stroke="#18181B" strokeWidth="1.5" />
    <text x="32" y="37" textAnchor="middle" fontFamily="'Fraunces', serif"
          fontSize="14" fontWeight="600" fill="#18181B" letterSpacing="0.1em">AXA</text>
    <circle cx="9" cy="32" r="1.5" fill="#18181B" />
    <circle cx="55" cy="32" r="1.5" fill="#18181B" />
  </svg>
);
const Logo8C = ({ dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div style={{
      padding: '10px 28px',
      border: `1.5px solid ${dark ? '#fff' : '#18181B'}`,
      borderRadius: 999,
      fontFamily: "'Fraunces', serif",
      fontSize: 20, fontWeight: 600, letterSpacing: '0.18em',
      color: dark ? '#fff' : '#18181B',
      textTransform: 'uppercase',
      position: 'relative',
    }}>
      <span style={{ color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>—</span> AXA <span style={{ color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>—</span>
    </div>
    <div style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 10.5, letterSpacing: '0.5em', textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(24,24,27,0.7)', fontWeight: 600,
    }}>I T&nbsp;&nbsp;S E R V I C E S</div>
  </div>
);

// Expose
Object.assign(window, {
  LogoShowcase2,
  Logo2A, Logo2AMark, Logo2B, Logo2BMark, Logo2C, Logo2CMark,
  Logo4A, Logo4AMark, Logo4B, Logo4BMark, Logo4C, Logo4CMark,
  Logo6A, Logo6AMark, Logo6B, Logo6BMark, Logo6C, Logo6CMark,
  Logo8A, Logo8AMark, Logo8B, Logo8BMark, Logo8C, Logo8CMark,
});
