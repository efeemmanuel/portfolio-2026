import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { useReveal } from '../hooks/useReveal.js'

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */

const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const GithubIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="14"
    height="14"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

/* ─────────────────────────────────────────
   SKILL LOGOS
───────────────────────────────────────── */

// Small consistent monogram badge used for stacks that don't have
// a dedicated glyph below — keeps the visual language unified.
const Monogram = ({ children }) => (
  <span
    className="flex items-center justify-center rounded-[4px] border border-current/40 font-display font-bold leading-none"
    style={{ width: 17, height: 17, fontSize: '0.5rem', letterSpacing: '-0.02em' }}
  >
    {children}
  </span>
)

const SkillLogos = {
  Python: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.889S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.403 3.347-3.403h5.765s3.236.052 3.236-3.128V3.296S18.28 0 11.914 0zm-3.2 1.902a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z" />
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.132S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109-3.403-3.347 3.403H9.454s-3.236-.052-3.236 3.128v5.238S5.72 24 12.086 24zm3.2-1.902a1.047 1.047 0 1 1 0-2.094 1.047 1.047 0 0 1 0 2.094z" />
    </svg>
  ),

  JavaScript: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),

  SQL: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 4.02 2 6.5S6.48 11 12 11s10-2.02 10-4.5S17.52 2 12 2zm0 13c-3.87 0-7.2-.78-9-2v2.5C3 17.98 7.48 20 12 20s9-2.02 9-4.5V13c-1.8 1.22-5.13 2-9 2zm0-5c-3.87 0-7.2-.78-9-2v2.5C3 12.98 7.48 15 12 15s9-2.02 9-4.5V8c-1.8 1.22-5.13 2-9 2z" />
    </svg>
  ),

  PHP: () => (
    <span className="text-current">
      <Monogram>Ph</Monogram>
    </span>
  ),

  FastAPI: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm-.624 21.624v-7.248H6.48L13.68 2.376v7.248h4.896l-7.2 12z" />
    </svg>
  ),

  Django: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.097.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.708.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v11.644c0 4.027-.3 5.967-1.172 7.637-.82 1.62-1.92 2.65-4.156 3.77l-3.643-1.733c2.236-1.045 3.336-1.996 4.03-3.439.743-1.47.997-3.21.997-7.75V6.06h3.944z" />
    </svg>
  ),

  'Express.js': () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.942.6l5.043-6.884-4.519-6.209a1.529 1.529 0 0 1 1.87.721l3.39 4.683 3.55-4.812a1.468 1.468 0 0 1 1.902-.599l-2.158 2.915-.868 1.175 3.884 5.322zM.002 7.022c.17-2.051 1.61-3.8 3.99-3.9 1.74-.07 2.96.59 3.77 1.96.63 1.06.76 2.23.76 3.46H1.2c0 2.14 1.17 3.36 3.23 3.36.96 0 1.82-.3 2.53-.9.12-.11.27-.2.39-.31l.72.72c-1.01.99-2.21 1.51-3.65 1.51C1.65 12.92.002 10.97.002 7.02z" />
    </svg>
  ),

  'Nest.js': () => (
    <span className="text-current">
      <Monogram>Ne</Monogram>
    </span>
  ),

  'Next.js': () => (
    <span className="text-current">
      <Monogram>Nx</Monogram>
    </span>
  ),

  Laravel: () => (
    <span className="text-current">
      <Monogram>La</Monogram>
    </span>
  ),

  React: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),

  PostgreSQL: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.56 14.371c-.178-.919-1.048-1.261-1.78-1.443l-.396-.093c-.174-.04-.342-.08-.503-.124-.165-.045-.311-.099-.445-.173-.301-.168-.437-.41-.427-.759.008-.259.12-.483.332-.667.203-.176.486-.285.804-.312.342-.028.649.022.946.137a6.547 6.547 0 0 1 .736.352l.077.044.059-.022c.294-.111.57-.25.821-.411.155-.1.309-.204.46-.311l.038-.027-.031-.04c-.19-.24-.407-.456-.646-.643a4.13 4.13 0 0 0-2.004-.84 5.07 5.07 0 0 0-1.107 0 4.02 4.02 0 0 0-1.949.744 2.895 2.895 0 0 0-1.036 1.497 2.656 2.656 0 0 0-.069.706c.028.693.284 1.239.761 1.622.438.352 1.014.534 1.668.584.157.013.317.017.48.014.22-.004.442-.024.662-.063.27-.047.518-.125.742-.228.219-.102.419-.235.6-.397.176-.158.34-.338.49-.539l.024-.031.147-.197-.014.043a2.565 2.565 0 0 1-.277.594c-.162.254-.376.45-.643.591-.266.14-.578.213-.94.216-.319.003-.611-.057-.872-.178a1.555 1.555 0 0 1-.617-.518 1.573 1.573 0 0 1-.255-.787 1.765 1.765 0 0 1 .094-.658c.098-.272.278-.498.535-.675.247-.172.547-.284.895-.333.34-.049.697-.044 1.073.014.296.046.577.127.842.243l.068.03.03-.06a2.97 2.97 0 0 0 .19-.624c.026-.145.034-.294.027-.448-.031-.63-.294-1.071-.783-1.31a3.147 3.147 0 0 0-.994-.262 4.512 4.512 0 0 0-.79.003 3.74 3.74 0 0 0-1.465.441 3.028 3.028 0 0 0-.946.858 2.7 2.7 0 0 0-.454 1.237 3.12 3.12 0 0 0 .036.897 2.88 2.88 0 0 0 .413.944c.212.307.489.567.829.779.344.213.748.364 1.207.45a6.28 6.28 0 0 0 1.478.067 5.573 5.573 0 0 0 1.38-.26 4.53 4.53 0 0 0 1.172-.598 3.977 3.977 0 0 0 .869-.913 3.59 3.59 0 0 0 .505-1.17 4.014 4.014 0 0 0 .063-1.22z" />
    </svg>
  ),

  MongoDB: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.003 0C8.29 0 5.246 3.068 5.246 6.81c0 4.065 4.53 8.076 5.98 11.464.14.33.259.655.348.979.026.096.053.187.075.275l.005.02c.09.385.143.781.143 1.182v1.87c0 .221.088.422.23.567.143.145.341.231.545.231h.81c.204 0 .402-.086.545-.231a.803.803 0 0 0 .23-.567v-1.87c0-.4.053-.797.143-1.181l.005-.021c.022-.088.049-.179.075-.275.09-.324.208-.649.348-.979C15.23 14.886 19.76 10.875 19.76 6.81 19.76 3.069 16.716 0 12.003 0z" />
    </svg>
  ),

  MySQL: () => (
    <span className="text-current">
      <Monogram>My</Monogram>
    </span>
  ),

  Docker: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.186.186 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186" />
    </svg>
  ),

  GitHub: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),

  Redis: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.5 2.661L8.343 3.757 6.028 2.588 3.856 3.703 1.643 2.588 0 3.416v1.16l1.644.857v2.263l1.857.97V6.406l.68.354.679-.355v1.884l1.169-.617V5.39l.68.354.68-.355v1.884L9.02 6.656v-2.32l.68.354.68-.354v2.32l-1.17.616v1.26l1.17.612 1.17-.612V7.271l.679-.354.681.354v1.885l1.17-.617V6.217l.678.353.681-.354v1.537l1.17.614V6.08l1.643-.857.001.001V4.063L17 3.416 14.786 2.3l-2.213 1.116L10.5 2.661z" />
    </svg>
  ),

  'RESTful API Design': () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 6l4-4 4 4" />
      <path d="M12 2v10.3" />
      <rect x="2" y="14" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <rect x="16" y="14" width="6" height="6" rx="1" />
    </svg>
  ),

  Scalability: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),

  'System Design': () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="2" y="3" width="8" height="6" rx="1" />
      <rect x="14" y="3" width="8" height="6" rx="1" />
      <rect x="7" y="15" width="10" height="6" rx="1" />
      <line x1="6" y1="9" x2="6" y2="12" />
      <line x1="18" y1="9" x2="18" y2="12" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="12" y1="12" x2="12" y2="15" />
    </svg>
  ),

  Maintainability: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

/* ─────────────────────────────────────────
   SKILLS
───────────────────────────────────────── */

const skillGroups = [
  {
    cat: 'LANGUAGES',
    items: ['Python', 'JavaScript', 'SQL', 'PHP'],
  },
  {
    cat: 'FRAMEWORKS',
    items: ['Nest.js', 'Next.js', 'FastAPI', 'Express.js', 'React', 'Laravel'],
  },
  {
    cat: 'DATABASES',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    cat: 'CONCEPTS',
    items: [
      'RESTful API Design',
      'Scalability',
      'System Design',
      'Maintainability',
    ],
  },
  {
    cat: 'TOOLS',
    items: ['Docker', 'GitHub', 'Redis'],
  },
]

/* ─────────────────────────────────────────
   BADGES
───────────────────────────────────────── */

const LiveBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.04] rounded-full animate-[pulseGlow_2.6s_ease-in-out_infinite]">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
    </span>

    <span className="text-[0.72rem] tracking-[0.12em] text-emerald-300 font-medium">
      LIVE
    </span>
  </div>
)

const WipBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.04] rounded-full">
    <span className="text-[0.72rem] tracking-[0.08em] text-white/40">
      ◐ IN PROGRESS
    </span>
  </div>
)

/* ─────────────────────────────────────────
   PROJECTS
   (Order: Olorimarket → Greencrest → ReferChain → SyncFlow)
───────────────────────────────────────── */

const projects = [
  {
    num: 'PROJECT_01',
    name: 'Olorimarket',
    wip: false,
    desc: 'An e-commerce web application integrated with a payment gateway.',
    tags: [
      { label: 'Laravel', hi: true },
      { label: 'SQLite', hi: true },
      { label: 'PHP', hi: true },
    ],
    liveUrl: 'https://olorimarket.com/',
    screenshot: '/images/olorimarket.png',
    screenshotAlt: 'Olorimarket e-commerce website',
  },

  {
    num: 'PROJECT_02',
    name: 'Greencrest',
    wip: false,
    desc: 'A modern real estate website designed to showcase properties and communicate the Greencrest brand.',
    tags: [
      { label: 'React', hi: true },
      { label: 'Tailwind', hi: true },
    ],
    liveUrl: 'https://greencrestproperty.com/',
    screenshot: '/images/green.png',
    screenshotAlt: 'Greencrest real estate website',
  },

  {
    num: 'PROJECT_03',
    name: 'ReferChain',
    wip: false,
    desc: 'Patient referral system connecting hospitals efficiently. Replaces phone-and-paper referrals with structured, traceable digital handoffs across facilities.',
    tags: [
      { label: 'Django', hi: true },
      { label: 'PostgreSQL', hi: true },
      { label: 'React', hi: true },
      { label: 'Docker', hi: true },
      { label: 'Nginx', hi: true },
    ],
    liveUrl: 'https://referchain-frontend.vercel.app/profile',
    githubUrl: 'https://github.com/efeemmanuel/referchain',
    screenshot: '/images/referchain-screenshot.png',
    screenshotAlt: 'ReferChain admin dashboard',
  },

  {
    num: 'PROJECT_04',
    name: 'SyncFlow',
    wip: false,
    desc: 'Workflow management system for organizing and streamlining company operations at scale. A single source of truth for cross-department processes with full traceability.',
    tags: [
      { label: 'FastAPI', hi: true },
      { label: 'PostgreSQL', hi: true },
      { label: 'React', hi: true },
      { label: 'Redis', hi: true },
      { label: 'Docker', hi: true },
    ],
    liveUrl: 'https://syncflow-frontend-iota.vercel.app/',
    githubUrl: 'https://github.com/efeemmanuel/syncflow',
    screenshot: '/images/syncflow-screenshot.png',
    screenshotAlt: 'SyncFlow dashboard',
  },
]

/* ─────────────────────────────────────────
   PROJECT SCREENSHOT
   Single <img>, object-contain, fixed frame —
   fixes the "doubled" look caused by cropping
   tall dashboard screenshots with object-cover.
───────────────────────────────────────── */

const ProjectShot = ({ src, alt }) => (
  <div className="relative w-full h-[300px] md:h-[360px] rounded-md overflow-hidden bg-[#101012] border border-white/[0.08] p-3 flex items-center justify-center transition-all duration-500 group-hover:border-white/[0.22] group-hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)]">
    {src ? (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full max-h-full w-auto h-auto object-contain rounded-sm transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />
    ) : null}

    <div
      className="absolute inset-0 items-center justify-center"
      style={{ display: src ? 'none' : 'flex' }}
    >
      <div className="text-[0.7rem] tracking-[0.12em] text-white/25">
        COMING SOON
      </div>
    </div>

    {/* subtle scanline sheen sweep on hover */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -inset-y-full -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rotate-12 group-hover:translate-x-[420%] transition-transform duration-[1200ms] ease-out" />
    </div>
  </div>
)

/* ─────────────────────────────────────────
   HOME
───────────────────────────────────────── */

export default function Home() {
  useReveal()

  return (
    <div className="min-h-screen bg-[#1a1a1c] text-white selection:bg-white selection:text-black overflow-x-hidden">

      <Nav />

      {/* ───────────────── HERO ───────────────── */}

      <section
        className="relative py-28 pb-24 border-b border-white/[0.08] overflow-hidden"
        id="hero"
      >
        {/* animated ambient blobs */}
        <div className="absolute -top-20 right-[-100px] w-[520px] h-[520px] rounded-full bg-white/[0.035] blur-[100px] pointer-events-none animate-[floatBlob_16s_ease-in-out_infinite]" />
        <div className="absolute top-40 left-[-140px] w-[420px] h-[420px] rounded-full bg-emerald-400/[0.05] blur-[110px] pointer-events-none animate-[floatBlob_20s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[90px] pointer-events-none animate-[floatBlob_13s_ease-in-out_infinite]" />

        <div className="relative max-w-[1100px] mx-auto px-8">

          {/* availability */}
          <div className="flex items-center gap-3 mb-14 animate-[fadeIn_0.8s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <span className="text-[0.78rem] text-white/45 tracking-[0.15em] uppercase">
              Available · Full Stack Developer
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-end gap-10 max-[700px]:grid-cols-1">

            <div>

              <h1
                className="font-display font-bold leading-[0.9] tracking-[-0.045em] mb-8 bg-clip-text text-transparent"
                style={{
                  fontSize: 'clamp(3.6rem, 9vw, 7.2rem)',
                  backgroundImage:
                    'linear-gradient(110deg, #ffffff 25%, #7d7d82 42%, #ffffff 58%, #7d7d82 75%)',
                  backgroundSize: '250% 100%',
                  animation: 'shimmerText 6s linear infinite',
                }}
              >
                Efe
                <br />
                Emmanuel
                <br />
                Obaro
                <span className="inline-block w-[5px] h-[0.78em] bg-white align-[-0.04em] ml-3 animate-blink" />
              </h1>

              <div className="text-[1.02rem] text-white/45 leading-relaxed mb-12 max-w-[680px]">
                <strong className="text-white font-semibold">
                  I build systems that scale.
                </strong>

                <span className="mx-3 text-white/20">·</span>

                Full Stack Developer

                <span className="mx-3 text-white/20">·</span>

                Scalability

                <span className="mx-3 text-white/20">·</span>

                System Design
              </div>

              <div className="flex gap-3 flex-wrap">

                <a
                  href="#contact"
                  className="text-[0.82rem] tracking-[0.05em] px-6 py-3.5 bg-white text-black font-semibold inline-flex items-center gap-2 rounded-sm transition-all duration-300 hover:bg-white/85 hover:-translate-y-1 hover:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)]"
                >
                  <MailIcon />
                  Get in touch
                </a>

                <a
                  href="https://github.com/efeemmanuel"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.82rem] tracking-[0.05em] px-6 py-3.5 bg-transparent text-white border border-white/15 inline-flex items-center gap-2 rounded-sm transition-all duration-300 hover:border-white/50 hover:-translate-y-1"
                >
                  <GithubIcon />
                  GitHub
                </a>

              </div>
            </div>

            {/* project count */}
            <div className="font-display font-bold text-[7rem] leading-none text-right select-none max-[700px]:hidden">
              <span className="text-white/[0.06]">
                15+
              </span>

              <span className="block text-[0.75rem] font-normal text-white/25 tracking-[0.1em] text-right mt-2">
                PROJECTS SHIPPED
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────── APPROACH ───────────────── */}

      <section
        className="py-24 border-b border-white/[0.08] reveal"
        id="think"
      >
        <div className="max-w-[1100px] mx-auto px-8">

          <SectionLabel>
            01 · APPROACH
          </SectionLabel>

          <p
            className="font-display font-normal text-white max-w-[820px] leading-[1.6]"
            style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.85rem)' }}
          >
            I approach software as{' '}
            <strong className="font-semibold">
              systems, not just code.
            </strong>

            <br />
            <br />

            My focus is on building applications that are scalable,
            maintainable, and{' '}
            <strong className="font-semibold">
              resilient over time.
            </strong>{' '}

            I think in terms of structure: how components interact,
            how data flows, and how systems behave under pressure.

            <br />
            <br />

            Engineering is not just about making things work.
            It's about making them{' '}
            <strong className="font-semibold">
              work well, at scale.
            </strong>
          </p>

        </div>
      </section>

      {/* ───────────────── SKILLS ───────────────── */}

      <section
        className="py-24 border-b border-white/[0.08] reveal"
        id="skills"
      >
        <div className="max-w-[1100px] mx-auto px-8">

          <SectionLabel>
            02 · SKILLS
          </SectionLabel>

          <div
            className="grid gap-x-12 gap-y-12"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(180px, 1fr))',
            }}
          >

            {skillGroups.map((group, gi) => (

              <div
                key={group.cat}
                className="reveal"
                style={{ transitionDelay: `${gi * 70}ms` }}
              >

                <div className="text-[0.72rem] text-white/30 tracking-[0.16em] border-b border-white/[0.08] pb-3 mb-5 uppercase">
                  {group.cat}
                </div>

                <div className="flex flex-col gap-4">

                  {group.items.map(item => {

                    const Logo = SkillLogos[item]

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-[0.95rem] text-white/70 group cursor-default transition-all duration-300 hover:text-white hover:translate-x-1.5"
                      >

                        {Logo ? (
                          <span className="text-white/45 flex-shrink-0 transition-all duration-300 group-hover:text-white group-hover:rotate-[8deg] group-hover:scale-110">
                            <Logo />
                          </span>
                        ) : (
                          <span className="w-[17px] h-[17px] flex-shrink-0" />
                        )}

                        {item}

                      </div>
                    )
                  })}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ───────────────── PROJECTS ───────────────── */}

      <section
        className="py-24 border-b border-white/[0.08]"
        id="projects"
      >

        <div className="max-w-[1400px] mx-auto px-8">

          <SectionLabel>
            03 · PROJECTS
          </SectionLabel>

        </div>

        <div className="max-w-[1400px] mx-auto px-8">

          <div className="flex flex-col gap-6">

            {projects.map((proj, index) => (

              <article
                key={proj.name}
                className={`
                  reveal
                  group
                  relative
                  bg-[#212124]
                  border border-white/[0.08]
                  rounded-lg
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:border-white/[0.2]
                  hover:bg-[#242428]
                  hover:-translate-y-1.5
                  ${proj.wip ? 'opacity-60' : ''}
                `}
                style={{
                  transitionDelay: `${index * 90}ms`,
                }}
              >

                <div className="grid grid-cols-[1.15fr_1fr] max-[900px]:grid-cols-1">

                  {/* IMAGE */}

                  <div className="p-6">

                    <div className="text-[0.7rem] text-white/30 tracking-[0.14em] mb-4">
                      {proj.num}
                    </div>

                    <ProjectShot
                      src={proj.screenshot}
                      alt={proj.screenshotAlt}
                    />

                  </div>

                  {/* DETAILS */}

                  <div className="p-9 flex flex-col justify-center max-[900px]:pt-4">

                    <div className="flex items-start justify-between gap-5 mb-5">

                      <div className="font-display font-bold text-[1.9rem] tracking-[-0.025em] text-white">
                        {proj.name}
                      </div>

                      {proj.wip ? (
                        <WipBadge />
                      ) : (
                        <LiveBadge />
                      )}

                    </div>

                    <p className="text-[0.95rem] text-white/45 leading-[1.8] mb-6 max-w-[520px]">
                      {proj.desc}
                    </p>

                    {/* TAGS */}

                    <div className="flex gap-2 flex-wrap mb-7">

                      {proj.tags.map(tag => (

                        <span
                          key={tag.label}
                          className={`
                            text-[0.75rem]
                            tracking-[0.05em]
                            px-2.5
                            py-1
                            rounded-sm
                            border
                            font-medium
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            ${
                              tag.hi
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white/45 border-white/10'
                            }
                          `}
                        >
                          {tag.label}
                        </span>

                      ))}

                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-2 flex-wrap">

                      {!proj.wip ? (
                        <>

                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[0.78rem] tracking-[0.05em] px-3.5 py-2 border border-white/10 text-white/55 bg-transparent rounded-sm transition-all duration-300 hover:border-white/40 hover:text-white hover:-translate-y-0.5"
                            >
                              Live Demo ↗
                            </a>
                          )}

                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[0.78rem] tracking-[0.05em] px-3.5 py-2 border border-white/10 text-white/55 bg-transparent rounded-sm transition-all duration-300 hover:border-white/40 hover:text-white hover:-translate-y-0.5"
                            >
                              GitHub ↗
                            </a>
                          )}

                        </>
                      ) : (

                        <span className="text-[0.75rem] text-white/25 tracking-[0.06em]">
                          Available soon
                        </span>

                      )}

                    </div>

                  </div>

                </div>

                {/* corner glow accent on hover */}
                <div className="pointer-events-none absolute -top-1/2 -right-1/4 w-72 h-72 rounded-full bg-white/[0.04] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ───────────────── EXPERIENCE ───────────────── */}

      <section
        className="py-24 border-b border-white/[0.08] reveal"
        id="experience"
      >

        <div className="max-w-[1100px] mx-auto px-8">

          <SectionLabel>
            04 · EXPERIENCE
          </SectionLabel>

          <div className="border border-white/[0.08] bg-[#212124] rounded-lg p-9 transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-1">

            <div className="font-display font-bold text-[1.3rem] text-white mb-2">
              Software Developer
            </div>

            <div className="text-[0.75rem] text-white/30 tracking-[0.1em] mb-5 uppercase">
              Asoro Automotive
            </div>

            <p className="text-[0.95rem] text-white/45 leading-[1.85] max-w-[650px]">
              Working on backend infrastructure: designing and maintaining
              APIs, building reliable data pipelines, and improving system
              performance. Focused on maintainable code, reducing technical
              debt, and architecting for scale.
            </p>

          </div>

          {/* RESUME */}

          <div className="mt-14">

            <div className="text-[0.7rem] text-white/30 tracking-[0.16em] mb-5 uppercase">
              Resume
            </div>

            <div className="border border-white/[0.08] bg-[#212124] rounded-lg p-8 flex items-center justify-between flex-wrap gap-6 transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-1">

              <div>

                <div className="font-display font-bold text-[1.15rem] text-white mb-2">
                  Efe Emmanuel Obaro
                </div>

                <div className="text-[0.8rem] text-white/40">
                  Full Stack Developer · Python · FastAPI · Django ·
                  PostgreSQL · System Design
                </div>

              </div>

              <a
                href="/Efe_Emmanuel_Obaro_Resume.pdf"
                download
                className="text-[0.78rem] tracking-[0.05em] px-5 py-3 bg-white text-black font-semibold inline-flex items-center gap-2 rounded-sm transition-all duration-300 hover:bg-white/85 hover:-translate-y-1"
              >
                <DownloadIcon />
                Download PDF
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ───────────────── CONTACT ───────────────── */}

      <section
        className="py-24 border-b border-white/[0.08] reveal"
        id="contact"
      >

        <div className="max-w-[1100px] mx-auto px-8">

          <SectionLabel>
            05 · CONTACT
          </SectionLabel>

          <div className="grid grid-cols-2 gap-16 items-start max-[700px]:grid-cols-1">

            <div>

              <div
                className="font-display font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(2.1rem, 5vw, 3.5rem)' }}
              >
                Let's build
                <br />
                something real.
              </div>

              <p className="text-[0.95rem] text-white/45 leading-[1.9] max-w-[520px]">
                Open to Full Stack Developer roles and interesting system
                design problems. If you're building something that needs
                to scale, let's talk.
              </p>

            </div>

            <div className="flex flex-col gap-5">

              {[
                {
                  label: 'EMAIL',
                  value: 'efeemmanuel2030@gmail.com',
                  href: 'mailto:efeemmanuel2030@gmail.com',
                },
                {
                  label: 'GITHUB',
                  value: 'github.com/efeemmanuel',
                  href: 'https://github.com/efeemmanuel',
                },
                {
                  label: 'LINKEDIN',
                  value: 'linkedin.com/in/efeemmanuel',
                  href: 'https://www.linkedin.com/in/efeemmanuel',
                },
                {
                  label: 'X (TWITTER)',
                  value: '@efeobaro',
                  href: 'https://x.com/ox_emmanuel',
                },
              ].map(ci => (

                <div
                  key={ci.label}
                  className="border-l-2 border-white/10 pl-5 transition-all duration-300 hover:border-white group"
                >

                  <div className="text-[0.68rem] text-white/30 tracking-[0.13em] mb-1.5 uppercase">
                    {ci.label}
                  </div>

                  <a
                    href={ci.href}
                    target={ci.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-[0.94rem] text-white/55 block transition-colors duration-300 group-hover:text-white"
                  >
                    {ci.value}
                  </a>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      <Footer />

      {/* small local animation definitions */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 45% {
            opacity: 1;
          }

          50%, 100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1.1s steps(1) infinite;
        }

        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          100% { background-position: 250% 50%; }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.12); }
          66% { transform: translate(-30px, 30px) scale(0.92); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.0); }
          50% { box-shadow: 0 0 22px 2px rgba(52, 211, 153, 0.12); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

    </div>
  )
}