// 8 variante de logo pentru AXA IT
// Fiecare logo e prezentat pe fundal deschis + fundal închis + favicon + carte de vizită mini

const LogoFrame = ({ children, bg = '#FAFAFA', label, height = 220 }) => (
  <div style={{
    display: 'flex', flexDirection: 'column',
    background: bg, borderRadius: 0,
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

const LogoShowcase = ({ Logo, DarkLogo, Mark, bgDark = '#0B1220', accentName, tagline }) => (
  <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif' }}>
    <LogoFrame bg="#FFFFFF" label="Light" height={200}>
      <Logo />
    </LogoFrame>
    <LogoFrame bg={bgDark} label="Dark" height={200}>
      {DarkLogo ? <DarkLogo /> : <Logo dark />}
    </LogoFrame>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#F4F4F5' }}>
      <LogoFrame bg="#F4F4F5" label="Mark 64" height={140}>
        <div style={{ width: 64, height: 64 }}>{Mark}</div>
      </LogoFrame>
      <LogoFrame bg={bgDark} label="Mark 64" height={140}>
        <div style={{ width: 64, height: 64 }}>{Mark}</div>
      </LogoFrame>
    </div>
    {tagline && (
      <div style={{
        padding: '12px 16px', fontSize: 11, color: 'rgba(0,0,0,0.55)',
        background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)',
        letterSpacing: '0.02em', lineHeight: 1.5,
      }}>
        <strong style={{ color: '#111' }}>{accentName}</strong> — {tagline}
      </div>
    )}
  </div>
);

// ============================================================
// 1. MONOLITH — wordmark curat, lettermark negru pe un pătrat solid
//    Conservator-premium. Dacă ar trebui să aleg unul "safe & serious".
// ============================================================
const Logo01Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="8" fill="#0B1F3A" />
    <text x="32" y="42" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="28" fontWeight="700" fill="#FFFFFF" letterSpacing="-1">AX</text>
    <circle cx="52" cy="14" r="3" fill="#3B82F6" />
  </svg>
);
const Logo01 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo01Mark}</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{
        fontFamily: "'Space Grotesk', Inter, sans-serif",
        fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em',
        color: dark ? '#fff' : '#0B1F3A',
      }}>AXA<span style={{ color: '#3B82F6' }}>IT</span></div>
      <div style={{
        marginTop: 6, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(11,31,58,0.55)',
        fontWeight: 500,
      }}>Managed IT Services</div>
    </div>
  </div>
);

// ============================================================
// 2. AXIS — monogramă AX stilizată ca axă (X = două axe încrucișate)
//    Joc vizual cu numele. Modern, tech, ușor de ținut minte.
// ============================================================
const Logo02Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g02" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#g02)" />
    {/* A */}
    <path d="M14 46 L22 18 L30 46 M17 38 L27 38" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* X as crossed axes */}
    <path d="M36 20 L50 44 M50 20 L36 44" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="43" cy="32" r="2.5" fill="#fff" />
  </svg>
);
const Logo02 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 60, height: 60 }}>{Logo02Mark}</div>
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

// ============================================================
// 3. SHIELD — emblem/insignă cu scut, pentru accent pe securitate
//    Comunică cyber security, managed services, încredere.
// ============================================================
const Logo03Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <path d="M32 4 L56 14 L56 30 C56 46 45 56 32 60 C19 56 8 46 8 30 L8 14 Z"
          fill="#0F2E1F" stroke="#10B981" strokeWidth="2" />
    <path d="M32 4 L56 14 L56 30 C56 46 45 56 32 60 Z" fill="#10B981" opacity="0.15" />
    <text x="32" y="38" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="18" fontWeight="700" fill="#10B981" letterSpacing="-0.5">AX</text>
    <line x1="20" y1="44" x2="44" y2="44" stroke="#10B981" strokeWidth="1.5" />
  </svg>
);
const Logo03 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 52, height: 52 }}>{Logo03Mark}</div>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{
        fontFamily: "'Space Grotesk', Inter, sans-serif",
        fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em',
        color: dark ? '#fff' : '#0F2E1F',
      }}>AXA IT</div>
      <div style={{
        marginTop: 5, fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase',
        color: '#10B981', fontWeight: 600,
      }}>Secure · Cloud · Support</div>
    </div>
  </div>
);

// ============================================================
// 4. PRISM — mark geometric dintr-un pătrat rotit (axă la 45°)
//    Îndrăzneț, energic, dinamic. Gradient portocaliu → roșu.
// ============================================================
const Logo04Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g04" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    <g transform="translate(32 32) rotate(45)">
      <rect x="-20" y="-20" width="40" height="40" rx="4" fill="url(#g04)" />
      <rect x="-20" y="-20" width="40" height="40" rx="4" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    </g>
    <text x="32" y="38" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="20" fontWeight="800" fill="#fff" letterSpacing="-1">AX</text>
  </svg>
);
const Logo04 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 54, height: 54 }}>{Logo04Mark}</div>
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

// ============================================================
// 5. ORBIT — cerc concentric cu punct off-center (axă de rotație)
//    Elegant, premium, "infrastructure that revolves around you".
// ============================================================
const Logo05Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <circle cx="32" cy="32" r="26" fill="none" stroke="#1E40AF" strokeWidth="2" />
    <circle cx="32" cy="32" r="18" fill="none" stroke="#1E40AF" strokeWidth="1.5" opacity="0.5" />
    <circle cx="32" cy="32" r="10" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
    <circle cx="32" cy="32" r="3.5" fill="#1E40AF" />
    <circle cx="58" cy="32" r="3" fill="#F59E0B" />
    <circle cx="14" cy="14" r="2" fill="#1E40AF" opacity="0.4" />
  </svg>
);
const Logo05 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 52, height: 52 }}>{Logo05Mark}</div>
    <div style={{
      fontFamily: "'Fraunces', 'Playfair Display', Georgia, serif",
      fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em',
      color: dark ? '#fff' : '#1E3A8A',
      fontStyle: 'italic',
    }}>
      Axa<span style={{ fontWeight: 600, fontStyle: 'normal' }}>IT</span>
    </div>
  </div>
);

// ============================================================
// 6. BLOCK — literele AX construite ca un "bloc" / server stack
//    Concret, structural, transmite infrastructură. Violet premium.
// ============================================================
const Logo06Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="10" fill="#111827" />
    {/* A as stacked bars */}
    <rect x="10" y="14" width="18" height="5" rx="1" fill="#A78BFA" />
    <rect x="10" y="24" width="18" height="5" rx="1" fill="#8B5CF6" />
    <rect x="10" y="34" width="18" height="5" rx="1" fill="#7C3AED" />
    <rect x="10" y="44" width="8" height="5" rx="1" fill="#6D28D9" />
    <rect x="20" y="44" width="8" height="5" rx="1" fill="#6D28D9" />
    {/* X as diagonal bars */}
    <path d="M36 14 L52 49" stroke="#A78BFA" strokeWidth="5" strokeLinecap="round" />
    <path d="M52 14 L36 49" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" />
  </svg>
);
const Logo06 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 56, height: 56 }}>{Logo06Mark}</div>
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

// ============================================================
// 7. ARROW — săgeată ascendentă formată din A+X (momentum)
//    Curaj, creștere, energie. Gradient albastru → verde (trust + growth).
// ============================================================
const Logo07Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <defs>
      <linearGradient id="g07" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path d="M8 54 L28 14 L36 30 L44 22 L56 54 Z" fill="url(#g07)" />
    <path d="M28 14 L44 22" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
    <circle cx="28" cy="14" r="3" fill="#fff" />
  </svg>
);
const Logo07 = ({ dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <div style={{ width: 54, height: 54 }}>{Logo07Mark}</div>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em',
      color: dark ? '#fff' : '#0F172A',
    }}>
      AXA<span style={{
        background: 'linear-gradient(90deg, #2563EB, #10B981)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>IT</span>
    </div>
  </div>
);

// ============================================================
// 8. AXIS·LINE — wordmark cu bară orizontală ca "axă" sub text
//    Minimalist extrem. Foarte lizibil, premium, serios.
// ============================================================
const Logo08Mark = (
  <svg viewBox="0 0 64 64" width="100%" height="100%">
    <rect x="0" y="0" width="64" height="64" rx="4" fill="#FAFAFA" stroke="#18181B" strokeWidth="1.5" />
    <text x="32" y="36" textAnchor="middle" fontFamily="'Space Grotesk', Inter, sans-serif"
          fontSize="24" fontWeight="700" fill="#18181B" letterSpacing="-1.5">AX</text>
    <line x1="12" y1="46" x2="52" y2="46" stroke="#18181B" strokeWidth="1.5" />
    <circle cx="48" cy="46" r="2.5" fill="#EAB308" stroke="#18181B" strokeWidth="1" />
  </svg>
);
const Logo08 = ({ dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
    <div style={{
      fontFamily: "'Space Grotesk', Inter, sans-serif",
      fontSize: 38, fontWeight: 600, letterSpacing: '0.02em',
      color: dark ? '#fff' : '#18181B',
      textTransform: 'uppercase',
    }}>AXA · IT</div>
    <div style={{
      width: 180, height: 1.5,
      background: dark ? '#fff' : '#18181B',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', right: 30, top: -3, width: 7, height: 7,
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

// ============================================================
// Expose to window for canvas
// ============================================================
Object.assign(window, {
  LogoShowcase,
  Logo01, Logo01Mark,
  Logo02, Logo02Mark,
  Logo03, Logo03Mark,
  Logo04, Logo04Mark,
  Logo05, Logo05Mark,
  Logo06, Logo06Mark,
  Logo07, Logo07Mark,
  Logo08, Logo08Mark,
});
