import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { useReveal } from '../hooks/useReveal.js'

/* ── Icons ── */
const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const EyeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

/* ── Skill logos (small black & white SVGs) ── */
const SkillLogos = {
  Python: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.889S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.403 3.347-3.403h5.765s3.236.052 3.236-3.128V3.296S18.28 0 11.914 0zm-3.2 1.902a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z"/>
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.132S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.403-3.347 3.403H9.454s-3.236-.052-3.236 3.128v5.238S5.72 24 12.086 24zm3.2-1.902a1.047 1.047 0 1 1 0-2.094 1.047 1.047 0 0 1 0 2.094z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  SQL: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 4.02 2 6.5S6.48 11 12 11s10-2.02 10-4.5S17.52 2 12 2zm0 13c-3.87 0-7.2-.78-9-2v2.5C3 17.98 7.48 20 12 20s9-2.02 9-4.5V13c-1.8 1.22-5.13 2-9 2zm0-5c-3.87 0-7.2-.78-9-2v2.5C3 12.98 7.48 15 12 15s9-2.02 9-4.5V8c-1.8 1.22-5.13 2-9 2z"/>
    </svg>
  ),
  FastAPI: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm-.624 21.624v-7.248H6.48L13.68 2.376v7.248h4.896l-7.2 12z"/>
    </svg>
  ),
  Django: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.097.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.708.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v11.644c0 4.027-.3 5.967-1.172 7.637-.82 1.62-1.92 2.65-4.156 3.77l-3.643-1.733c2.236-1.045 3.336-1.996 4.03-3.439.743-1.47.997-3.21.997-7.75V6.06h3.944z"/>
    </svg>
  ),
  'Express.js': () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.942.6l5.043-6.884-4.519-6.209a1.529 1.529 0 0 1 1.87.721l3.39 4.683 3.55-4.812a1.468 1.468 0 0 1 1.902-.599l-2.158 2.915-.868 1.175 3.884 5.322zM.002 7.022c.17-2.051 1.61-3.8 3.99-3.9 1.74-.07 2.96.59 3.77 1.96.63 1.06.76 2.23.76 3.46H1.2c0 2.14 1.17 3.36 3.23 3.36.96 0 1.82-.3 2.53-.9.12-.11.27-.2.39-.31l.72.72c-1.01.99-2.21 1.51-3.65 1.51C1.65 12.92.002 10.97.002 7.02zm1.21-.47h5.31c-.07-1.88-.97-3.06-2.56-3.06-1.63 0-2.6 1.17-2.75 3.06z"/>
    </svg>
  ),
  React: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  // PostgreSQL - official elephant icon
  PostgreSQL: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.56 14.371c-.178-.919-1.048-1.261-1.78-1.443l-.396-.093c-.174-.04-.342-.08-.503-.124-.165-.045-.311-.099-.445-.173-.301-.168-.437-.41-.427-.759.008-.259.12-.483.332-.667.203-.176.486-.285.804-.312.342-.028.649.022.946.137a6.547 6.547 0 0 1 .736.352l.077.044.059-.022c.294-.111.57-.25.821-.411.155-.1.309-.204.46-.311l.038-.027-.031-.04c-.19-.24-.407-.456-.646-.643a4.13 4.13 0 0 0-2.004-.84 5.07 5.07 0 0 0-1.107 0 4.02 4.02 0 0 0-1.949.744 2.895 2.895 0 0 0-1.036 1.497 2.656 2.656 0 0 0-.069.706c.028.693.284 1.239.761 1.622.438.352 1.014.534 1.668.584.157.013.317.017.48.014.22-.004.442-.024.662-.063.27-.047.518-.125.742-.228.219-.102.419-.235.6-.397.176-.158.34-.338.49-.539l.024-.031.147-.197-.014.043a2.565 2.565 0 0 1-.277.594c-.162.254-.376.45-.643.591-.266.14-.578.213-.94.216-.319.003-.611-.057-.872-.178a1.555 1.555 0 0 1-.617-.518 1.573 1.573 0 0 1-.255-.787 1.765 1.765 0 0 1 .094-.658c.098-.272.278-.498.535-.675.247-.172.547-.284.895-.333.34-.049.697-.044 1.073.014.296.046.577.127.842.243l.068.03.03-.06a2.97 2.97 0 0 0 .19-.624c.026-.145.034-.294.027-.448-.031-.63-.294-1.071-.783-1.31a3.147 3.147 0 0 0-.994-.262 4.512 4.512 0 0 0-.79.003 3.74 3.74 0 0 0-1.465.441 3.028 3.028 0 0 0-.946.858 2.7 2.7 0 0 0-.454 1.237 3.12 3.12 0 0 0 .036.897 2.88 2.88 0 0 0 .413.944c.212.307.489.567.829.779.344.213.748.364 1.207.45a6.28 6.28 0 0 0 1.478.067 5.573 5.573 0 0 0 1.38-.26 4.53 4.53 0 0 0 1.172-.598 3.977 3.977 0 0 0 .869-.913 3.59 3.59 0 0 0 .505-1.17 4.014 4.014 0 0 0 .063-1.22zm-11.33-9.01c-.362-.7-.868-1.267-1.508-1.686A5.296 5.296 0 0 0 8.45 2.9a6.08 6.08 0 0 0-1.298-.084 5.78 5.78 0 0 0-1.269.202A5.194 5.194 0 0 0 4.6 3.7a4.838 4.838 0 0 0-.96.924 4.565 4.565 0 0 0-.63 1.203A5.2 5.2 0 0 0 2.79 7.2a6.01 6.01 0 0 0 .118 1.574c.155.703.435 1.33.835 1.868.393.53.886.964 1.47 1.292.577.325 1.234.526 1.962.597.177.018.358.026.542.026.195 0 .389-.01.579-.028.305-.03.601-.09.884-.18l.027.268c.02.177.04.354.056.529.056.59.068 1.16.033 1.704-.036.551-.13 1.065-.282 1.538a4.085 4.085 0 0 1-.591 1.216 2.938 2.938 0 0 1-.978.838c-.39.206-.851.327-1.38.36-.29.018-.543.009-.762-.027a2.14 2.14 0 0 1-.618-.208 1.55 1.55 0 0 1-.467-.411 1.8 1.8 0 0 1-.288-.627 2.52 2.52 0 0 1-.053-.82c.032-.326.127-.654.286-.977l.024-.048-.054-.007a7.35 7.35 0 0 0-.857-.071 7.22 7.22 0 0 0-.813.013l-.047.005-.01.047a3.64 3.64 0 0 0-.078.742c.004.43.086.836.247 1.207.162.374.404.705.722.988.31.278.694.5 1.143.661.445.16.957.243 1.52.248.06 0 .12 0 .18-.001.592-.013 1.128-.116 1.596-.309a3.97 3.97 0 0 0 1.221-.787c.34-.332.614-.728.82-1.182.203-.449.346-.95.422-1.5.078-.553.09-1.155.038-1.8a22.6 22.6 0 0 0-.104-.938l-.056-.46a5.8 5.8 0 0 0 .613-.354c.555-.373.997-.856 1.313-1.437.318-.583.497-1.255.534-2 .036-.734-.078-1.422-.338-2.048zm-1.416 3.4a2.79 2.79 0 0 1-.741.932 3.23 3.23 0 0 1-1.074.549 4.247 4.247 0 0 1-1.295.15 4.35 4.35 0 0 1-1.271-.224 3.232 3.232 0 0 1-1.025-.575 2.756 2.756 0 0 1-.69-.907 2.706 2.706 0 0 1-.252-1.176 3.06 3.06 0 0 1 .195-1.093 2.796 2.796 0 0 1 .595-.932 2.944 2.944 0 0 1 .96-.644 3.595 3.595 0 0 1 1.32-.249c.154 0 .31.008.468.024.49.05.925.192 1.297.42.371.228.673.538.9.923.228.386.37.834.424 1.337.05.48.003.946-.14 1.39l-.001.001z"/>
    </svg>
  ),
  // MongoDB - official leaf icon
  MongoDB: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.003 0C8.29 0 5.246 3.068 5.246 6.81c0 4.065 4.53 8.076 5.98 11.464.14.33.259.655.348.979.026.096.053.187.075.275l.005.02c.09.385.143.781.143 1.182v1.87c0 .221.088.422.23.567.143.145.341.231.545.231h.81c.204 0 .402-.086.545-.231a.803.803 0 0 0 .23-.567v-1.87c0-.4.053-.797.143-1.181l.005-.021c.022-.088.049-.179.075-.275.09-.324.208-.649.348-.979C15.23 14.886 19.76 10.875 19.76 6.81 19.76 3.069 16.716 0 12.003 0z"/>
    </svg>
  ),
  Docker: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
    </svg>
  ),
  GitHub: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  Redis: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.5 2.661L8.343 3.757 6.028 2.588l-.001.001L3.856 3.703 1.643 2.588 0 3.416v1.16l.001-.001 1.643.858v2.263l1.857.97V6.406l.68.354.679-.355v1.884l1.169-.617V5.39l.68.354.68-.355v1.884L9.02 6.656v-2.32l.68.354.68-.354v2.32l-1.17.616v1.26l1.17.612 1.17-.612V7.271l.679-.354.681.354v1.885l1.17-.617V6.217l.678.353.681-.354v1.537l1.17.614V6.08l1.643-.857.001.001V4.063L17 3.416 14.786 2.3l-2.213 1.116L10.5 2.661zM0 8.83v1.144l3.5 1.83 3.5-1.83V8.83L3.5 10.66 0 8.83zm6.5 0v1.144l3.5 1.83 3.5-1.83V8.83l-3.5 1.83L6.5 8.83zm6.5 0v1.144l3.5 1.83 3.5-1.83V8.83l-3.5 1.83-3.5-1.83zM1.643 12.116v2.32l1.857.97V13.12l1.169.614v1.884l1.17-.617v-2.32l-.68-.354-.68.354v1.26l-.68-.354v-1.26l-.68-.354-1.476.772zm6.5 0v2.32l1.857.97V13.12l1.169.614v1.884l1.17-.617v-2.32l-.68-.354-.68.354v1.26l-.68-.354v-1.26l-.68-.354-1.476.772zm5.714 0l-1.214.634v1.26l1.214.634 1.214-.634v-1.26l-1.214-.634zM0 16.163v1.144l3.5 1.83 3.5-1.83v-1.144l-3.5 1.83-3.5-1.83zm6.5 0v1.144l3.5 1.83 3.5-1.83v-1.144l-3.5 1.83-3.5-1.83zm6.5 0v1.144l3.5 1.83 3.5-1.83v-1.144l-3.5 1.83-3.5-1.83z"/>
    </svg>
  ),
  // CONCEPTS icons
  'RESTful API Design': () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6l4-4 4 4"/>
      <path d="M12 2v10.3"/>
      <rect x="2" y="14" width="6" height="6" rx="1"/>
      <rect x="9" y="14" width="6" height="6" rx="1"/>
      <rect x="16" y="14" width="6" height="6" rx="1"/>
      <line x1="5" y1="14" x2="5" y2="12"/>
      <line x1="12" y1="14" x2="12" y2="12"/>
      <line x1="19" y1="14" x2="19" y2="12"/>
    </svg>
  ),
  Scalability: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  'System Design': () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="3" width="8" height="6" rx="1"/>
      <rect x="14" y="3" width="8" height="6" rx="1"/>
      <rect x="7" y="15" width="10" height="6" rx="1"/>
      <line x1="6" y1="9" x2="6" y2="12"/>
      <line x1="18" y1="9" x2="18" y2="12"/>
      <line x1="6" y1="12" x2="18" y2="12"/>
      <line x1="12" y1="12" x2="12" y2="15"/>
    </svg>
  ),
  Maintainability: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
}

const skillGroups = [
  { cat: 'LANGUAGES', items: ['Python', 'JavaScript', 'SQL'] },
  { cat: 'FRAMEWORKS', items: ['FastAPI', 'Django', 'Express.js', 'React'] },
  { cat: 'DATABASES', items: ['PostgreSQL', 'MongoDB'] },
  { cat: 'CONCEPTS', items: ['RESTful API Design', 'Scalability', 'System Design', 'Maintainability'] },
  { cat: 'TOOLS', items: ['Docker', 'GitHub', 'Redis'] },
]

/* ── Live Badge with pulsing animation ── */
const LiveBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500 bg-green-50">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
    <span className="text-[0.58rem] tracking-[0.08em] text-green-700 font-medium">LIVE</span>
  </div>
)

const WipBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 border border-border">
    <span className="text-[0.58rem] tracking-[0.08em] text-muted">◐ IN PROGRESS</span>
  </div>
)

const projects = [
  {
    num: 'PROJECT_01', name: 'SyncFlow', wip: false,
    desc: 'Workflow management system for organizing and streamlining company operations at scale. Single source of truth for cross-department processes with full traceability.',
    tags: [
      { label: 'FastAPI', hi: true }, { label: 'PostgreSQL', hi: true }, { label: 'React', hi: true },
      { label: 'Redis', hi: true }, { label: 'Docker', hi: true },
    ],
    caseStudy: '/projects/syncflow',
    liveUrl: 'https://syncflow-frontend-iota.vercel.app/',
    githubUrl: 'https://github.com/efeemmanuel/syncflow',
    screenshot: '/images/syncflow-screenshot.png',
    screenshotAlt: 'SyncFlow dashboard',
  },
  {
    num: 'PROJECT_02', name: 'ReferChain', wip: false,
    desc: 'Patient referral system connecting hospitals efficiently. Replaces phone-and-paper referrals with structured, traceable digital handoffs across facilities.',
    tags: [
      { label: 'Django', hi: true }, { label: 'PostgreSQL', hi: true }, { label: 'React', hi: true },
      { label: 'Docker', hi: true }, { label: 'Nginx', hi: true },
    ],
    caseStudy: '/projects/referchain',
    liveUrl: 'https://referchain-frontend.vercel.app/profile',
    githubUrl: 'https://github.com/efeemmanuel/referchain',
    screenshot: '/images/referchain-screenshot.png',
    screenshotAlt: 'ReferChain admin dashboard',
  },
  {
    num: 'PROJECT_03', name: 'Auth Library', wip: true,
    desc: 'Open-source Python authentication library. Modular token lifecycle management, refresh rotation, session invalidation, and multi-provider support for FastAPI and Django.',
    tags: [
      { label: 'Python' }, { label: 'FastAPI' }, { label: 'JWT' }, { label: 'OAuth2' },
    ],
    screenshot: null,
  },
]

export default function Home() {
  useReveal()

  return (
    <div className="bg-white text-black">
      <Nav />

      {/* ── HERO ── */}
      <section className="py-28 pb-24 border-b border-border" id="hero">
        <div className="max-w-[1020px] mx-auto px-8">

          {/* availability pill */}
          <div className="flex items-center gap-2 mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span className="text-[0.65rem] text-dim tracking-[0.14em] uppercase">
              available · backend engineer · systems-first
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-end gap-8 max-sm:grid-cols-1">
            <div>
              {/* Name */}
              <h1 className="font-display font-bold leading-[0.93] tracking-[-0.03em] text-black mb-6"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                Efe<br />
                Emmanuel<br />
                Obaro
                <span className="inline-block w-[4px] h-[0.82em] bg-black align-[-0.05em] ml-2 animate-blink" />
              </h1>

              {/* Tagline */}
              <div className="text-[0.9rem] text-dim leading-relaxed mb-12">
                <strong className="text-black font-semibold">I build systems that scale.</strong>
                <span className="mx-2 text-border">·</span>
                Backend engineering
                <span className="mx-2 text-border">·</span>
                Scalability
                <span className="mx-2 text-border">·</span>
                System design
              </div>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                <a href="#contact"
                  className="text-[0.8rem] tracking-[0.04em] px-6 py-3 bg-black text-white font-medium inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#222]">
                  <MailIcon /> Get in touch
                </a>
                <a href="https://github.com/efeemmanuel" target="_blank" rel="noreferrer"
                  className="text-[0.8rem] tracking-[0.04em] px-6 py-3 bg-white text-black border border-border inline-flex items-center gap-2 transition-all duration-200 hover:border-black">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>

            {/* Big number */}
            <div className="font-display font-bold text-[6rem] leading-none text-right select-none max-sm:hidden"
              style={{ color: '#f0f0f0' }}>
              03
              <span className="block text-[0.65rem] font-normal text-[#ccc] tracking-[0.08em] text-right mt-1">
                projects shipped
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-20 border-b border-border reveal" id="think">
        <div className="max-w-[1020px] mx-auto px-8">
          <SectionLabel>01 · APPROACH</SectionLabel>
          <p className="font-display font-normal text-black max-w-[720px] leading-[1.55]"
            style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)' }}>
            I approach software as <strong className="font-semibold">systems, not just code.</strong><br /><br />
            My focus is on building applications that are scalable, maintainable, and{' '}
            <strong className="font-semibold">resilient over time.</strong>{' '}
            I think in terms of structure: how components interact, how data flows, how systems behave under pressure.<br /><br />
            Engineering is not just about making things work. It's about making them{' '}
            <strong className="font-semibold">work well, at scale.</strong>
          </p>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-20 border-b border-border reveal" id="skills">
        <div className="max-w-[1020px] mx-auto px-8">
          <SectionLabel>02 · SKILLS</SectionLabel>
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
            {skillGroups.map(group => (
              <div key={group.cat}>
                <div className="text-[0.58rem] text-muted tracking-[0.14em] border-b border-border pb-2 mb-4 uppercase">
                  {group.cat}
                </div>
                <div className="flex flex-col gap-3">
                  {group.items.map(item => {
                    const Logo = SkillLogos[item]
                    return (
                      <div key={item} className="flex items-center gap-3 text-[0.82rem] text-black group cursor-default hover:text-dim transition-colors duration-200">
                        {Logo ? (
                          <span className="text-black opacity-70 flex-shrink-0 group-hover:opacity-40 transition-opacity duration-200">
                            <Logo />
                          </span>
                        ) : (
                          <span className="w-4 h-4 flex-shrink-0" />
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

      {/* ── PROJECTS ── */}
      <section className="py-20 border-b border-border" id="projects">
        <div className="max-w-[1020px] mx-auto px-8">
          <SectionLabel>03 · PROJECTS</SectionLabel>
        </div>
        <div className="max-w-[1020px] mx-auto px-8 flex flex-col gap-px bg-border">
          {projects.map(proj => (
            <div key={proj.name}
              className={`reveal bg-white py-10 grid gap-12 items-start transition-colors duration-200 hover:bg-[#fafafa]
                ${proj.wip ? 'opacity-60' : ''}
                grid-cols-[5fr_7fr] max-[700px]:grid-cols-1 max-[700px]:gap-6 max-[700px]:py-8`}>

              {/* Left: number + image */}
              <div>
                <div className="text-[0.58rem] text-muted tracking-[0.12em] mb-4">{proj.num}</div>
                <div className="w-full aspect-[16/10] bg-surface border border-border flex items-center justify-center relative overflow-hidden">
                  {proj.screenshot ? (
                    <img
                      src={proj.screenshot}
                      alt={proj.screenshotAlt}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <>
                      <div className="proj-img-pattern" />
                      <div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <span className="text-[0.58rem] tracking-[0.1em] text-muted">COMING SOON</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right: details */}
              <div>
                {/* Name + badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="font-display font-bold text-[1.65rem] tracking-[-0.02em] text-black">{proj.name}</div>
                  {proj.wip ? <WipBadge /> : <LiveBadge />}
                </div>

                {/* Description */}
                <p className="text-[0.82rem] text-dim leading-[1.85] mb-5">{proj.desc}</p>

                {/* Tags */}
                <div className="flex gap-[0.35rem] flex-wrap mb-6">
                  {proj.tags.map(t => (
                    <span key={t.label}
                      className={`text-[0.62rem] tracking-[0.04em] px-2 py-[0.2rem] border font-medium
                        ${t.hi ? 'bg-black text-white border-black' : 'bg-white text-dim border-border'}`}>
                      {t.label}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-wrap">
                  {!proj.wip ? (
                    <>
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer"
                          className="text-[0.65rem] tracking-[0.05em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-white transition-all duration-200 hover:border-black hover:text-black">
                          Live Demo ↗
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer"
                          className="text-[0.65rem] tracking-[0.05em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-white transition-all duration-200 hover:border-black hover:text-black">
                          GitHub ↗
                        </a>
                      )}
                      <Link to={proj.caseStudy}
                        className="text-[0.65rem] tracking-[0.05em] px-[0.85rem] py-[0.42rem] border border-black text-black bg-white transition-all duration-200 hover:bg-black hover:text-white">
                        Case Study →
                      </Link>
                    </>
                  ) : (
                    <span className="text-[0.62rem] text-muted tracking-[0.06em]">available soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-20 border-b border-border reveal" id="experience">
        <div className="max-w-[1020px] mx-auto px-8">
          <SectionLabel>04 · EXPERIENCE</SectionLabel>
          <div className="border border-border p-8 hover:border-[#aaa] transition-[border-color] duration-200">
            <div className="font-display font-bold text-[1.15rem] text-black mb-1">Software Developer</div>
            <div className="text-[0.68rem] text-muted tracking-[0.1em] mb-4 uppercase">Asoro Automotive</div>
            <p className="text-[0.82rem] text-dim leading-[1.85] max-w-[580px]">
              Working on backend infrastructure: designing and maintaining APIs,
              building reliable data pipelines, and improving system performance. Focused on maintainable code,
              reducing technical debt, and architecting for scale.
            </p>
          </div>

          <div className="mt-12">
            <div className="text-[0.58rem] text-muted tracking-[0.16em] mb-5 uppercase">Resume</div>
            <div className="border border-border p-8 flex items-center justify-between flex-wrap gap-6 hover:border-[#aaa] transition-[border-color] duration-200">
              <div>
                <div className="font-display font-bold text-[1.05rem] text-black mb-1">Efe Emmanuel Obaro</div>
                <div className="text-[0.7rem] text-dim">Backend Engineer · Python · FastAPI · Django · PostgreSQL · System Design</div>
              </div>
              <div className="flex gap-3 flex-wrap">
                
                <a href="/assets/efe-obaro-resume.pdf" download
                  className="text-[0.68rem] tracking-[0.04em] px-[1.1rem] py-[0.58rem] bg-black text-white font-medium inline-flex items-center gap-2 hover:bg-[#333] transition-all duration-200">
                  <DownloadIcon /> Download PDF
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              {[
                { label: 'GitHub', href: 'https://github.com/efeemmanuel', icon: <GithubIcon /> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/efeemmanuel', icon: <LinkedinIcon /> },
                { label: 'X (Twitter)', href: 'https://x.com/ox_emmanuel', icon: <XIcon /> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-[0.68rem] text-dim border border-border px-[0.85rem] py-[0.45rem] transition-all duration-200 hover:border-black hover:text-black">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 border-b border-border reveal" id="contact">
        <div className="max-w-[1020px] mx-auto px-8">
          <SectionLabel>05 · CONTACT</SectionLabel>
          <div className="grid grid-cols-2 gap-12 items-start max-[580px]:grid-cols-1">
            <div>
              <div className="font-display font-bold text-black leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                Let's build<br />something real.
              </div>
              <p className="text-[0.82rem] text-dim leading-[1.9]">
                Open to backend engineering roles and interesting system design problems.
                If you're building something that needs to scale, let's talk.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'EMAIL', value: 'efeemmanuel2030.com', href: 'mailto:efeemmanuel2030@gmail.com' },
                { label: 'GITHUB', value: 'github.com/efeobaro', href: 'https://github.com/efeemmanuel' },
                { label: 'LINKEDIN', value: 'linkedin.com/in/efeobaro', href: 'https://www.linkedin.com/in/efeemmanuel' },
                { label: 'X (TWITTER)', value: '@efeobaro', href: 'https://x.com/ox_emmanuel' },
              ].map(ci => (
                <div key={ci.label} className="border-l-2 border-border pl-4 transition-[border-color] duration-200 hover:border-black group">
                  <div className="text-[0.57rem] text-muted tracking-[0.12em] mb-1 uppercase">{ci.label}</div>
                  <a href={ci.href} target={ci.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="text-[0.82rem] text-dim block transition-colors duration-200 group-hover:text-black">
                    {ci.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
