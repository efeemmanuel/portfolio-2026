import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { useReveal } from '../hooks/useReveal.js'

const tags = [
  { label: 'FastAPI', hi: true },
  { label: 'PostgreSQL', hi: true },
  { label: 'React', hi: true },
  { label: 'Redis', hi: true },
  { label: 'Docker', hi: true },
  { label: 'JWT', hi: true },
  { label: 'SQLAlchemy', hi: false },
  { label: 'Alembic', hi: false },
  { label: 'Neon', hi: false },
  { label: 'Render', hi: false },
  { label: 'Vercel', hi: false },
  { label: 'Zustand', hi: false },
  { label: 'TanStack Query', hi: false },
  { label: 'Tailwind CSS', hi: false },
  { label: 'Framer Motion', hi: false },
  { label: 'Pydantic', hi: false },
]

const sections = [
  {
    num: '02',
    label: 'PROBLEM',
    title: 'The Challenge',
    content: [
      'Operations teams across companies were relying on spreadsheets and fragmented email threads to coordinate work. Tasks fell through the cracks, ownership was unclear, and there was no centralised audit trail for accountability or visibility into project progress.',
      'There was no single place for admins, team leads, and members to see who owned what, what stage a task was at, or how projects were progressing across teams. As organisations grew, the absence of structure was creating costly delays and miscommunications between departments.',
    ],
  },
  {
    num: '03',
    label: 'SOLUTION',
    title: 'The Approach',
    content: [
      'Built a full stack workspace platform with FastAPI and PostgreSQL that models companies, teams, projects, tasks, and members as structured relational entities. Role based access control governs every action: admins oversee the entire company, team leads manage their team scope, and members interact only with work assigned to them.',
      'A Redis backed session layer handles OTP flows, JWT refresh token rotation, and invite token management. Async database access via SQLAlchemy and asyncpg keeps the API fast under load. The React frontend communicates through a typed Axios client with optimistic UI updates powered by TanStack Query.',
    ],
  },
  {
    num: '04',
    label: 'SYSTEM DESIGN',
    title: 'Architecture',
    content: [
      'The system is structured around a multi tenant data model where every entity (users, teams, projects, tasks, channels) belongs to a company. Row level isolation enforces tenant boundaries at the query layer. Role based permission checks are enforced at the route layer on every endpoint before any service logic runs.',
    ],
    design: [
      { label: 'DATA LAYER', value: 'PostgreSQL via Neon · SQLAlchemy async ORM · Alembic migrations · relational multi tenant schema · foreign key cascade deletes' },
      { label: 'CACHE AND SESSION LAYER', value: 'Redis · OTP storage with TTL · JWT refresh token rotation · invite token management · session invalidation on logout' },
      { label: 'AUTH LAYER', value: 'JWT access and refresh tokens · role based access control (admin, team lead, member) · route level permission enforcement · email OTP verification · invite based onboarding' },
      { label: 'API LAYER', value: 'FastAPI · async request handling · Pydantic v2 validation · structured error responses · CORS configured per environment' },
      { label: 'FRONTEND', value: 'React 19 · TanStack Query for server state · Zustand for client state · Axios typed API client · Framer Motion animations · Tailwind CSS v4 · dark mode with localStorage persistence' },
      { label: 'INFRASTRUCTURE', value: 'Docker Compose for local development · Render for backend hosting · Vercel for frontend · Neon for hosted Postgres · Render Key Value for hosted Redis' },
    ],
  },
  {
    num: '05',
    label: 'FEATURES',
    title: 'What Was Built',
    content: [
      'The platform covers the full lifecycle of team collaboration. Companies register and verify via OTP email. Admins invite team leads and members through tokenised email links. Projects are created and scoped to teams or company wide, each automatically provisioning a dedicated communication channel.',
      'Tasks support priority levels, deadlines, assignees, comments, and file attachments. A channels system provides threaded messaging scoped to projects or company wide, with reply support and message deletion. Role based dashboards surface contextual stats per user type. Profile images, dark mode, and responsive layouts are supported across all devices.',
    ],
  },
  {
    num: '06',
    label: 'IMPROVEMENTS',
    title: "What's Next",
    content: [
      'Planning to introduce a WebSocket layer for real time channel messaging and task status updates, removing the need for polling and reducing server load significantly. Push notifications for task assignments, comments, and mentions would close the feedback loop for users.',
      'A file storage integration using S3 or Cloudflare R2 would replace the current URL based attachment model with true binary file uploads including image previews and video playback directly in the task detail view. A metrics layer surfacing time per task stage and team throughput would give leads and admins the data needed to continuously improve operational performance.',
    ],
  },
]

export default function CaseStudySyncFlow() {
  useReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-white text-black font-mono">
      <Nav isCase projectPath="projects/syncflow" />

      {/* HERO */}
      <div className="py-20 pb-12 border-b border-border border-t-2 border-t-black">
        <div className="max-w-[1020px] mx-auto px-8">
          <Link to="/#projects"
            className="text-[0.65rem] text-dim tracking-[0.08em] mb-10 inline-flex items-center gap-2 transition-colors duration-200 hover:text-black">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            back to projects
          </Link>

          <div className="text-[0.6rem] text-black tracking-[0.14em] mb-3">CASE STUDY — 01</div>
          <div className="font-display font-extrabold text-black tracking-[-0.03em] leading-none mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            SyncFlow
          </div>
          <div className="text-[0.65rem] text-muted tracking-[0.06em] mb-6">/projects/syncflow</div>
          <p className="text-[0.82rem] text-dim leading-[1.9] max-w-[640px]">
            SyncFlow is a full stack team management platform built to replace fragmented task tracking across
            company departments. It provides a single source of truth for projects, tasks, and team communication
            with role based access control, real time channels, and an async backend designed for multi tenant
            scale.
          </p>
          <div className="flex gap-[0.35rem] flex-wrap mt-6">
            {tags.map(t => (
              <span key={t.label}
                className={`text-[0.6rem] tracking-[0.04em] px-2 py-[0.18rem] border
                  ${t.hi ? 'bg-black text-white border-black' : 'bg-white text-dim border-border'}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

       {/* Screenshot */}
      <div className="bg-surface border-t border-b border-border">
        <div className="max-w-[1020px] mx-auto px-8">
          <div className="w-full aspect-[16/7] overflow-hidden">
            <img
              src="/images/syncflow-screenshot.png"
              alt="ReferChain admin dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-16">
        <div className="max-w-[1020px] mx-auto px-8">
          <div className="flex flex-col gap-px bg-border">
            {sections.map(sec => (
              <div key={sec.num}
                className="reveal bg-white py-10 grid gap-12 items-start
                  grid-cols-[200px_1fr] max-[600px]:grid-cols-1 max-[600px]:gap-4 max-[600px]:py-6">
                <div>
                  <div className="text-[0.58rem] text-muted tracking-[0.1em] mb-1">{sec.num}</div>
                  <div className="text-[0.6rem] text-black tracking-[0.14em]">{sec.label}</div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[1.1rem] text-black mb-3">{sec.title}</h4>
                  {sec.content.map((p, i) => (
                    <p key={i} className={`text-[0.82rem] text-dim leading-[1.9] ${i > 0 ? 'mt-4' : ''}`}>{p}</p>
                  ))}
                  {sec.design && (
                    <div className="grid grid-cols-2 gap-4 mt-4 max-[480px]:grid-cols-1">
                      {sec.design.map(d => (
                        <div key={d.label} className="p-4 bg-surface border border-border">
                          <div className="text-[0.57rem] text-muted tracking-[0.1em] mb-[0.4rem]">{d.label}</div>
                          <div className="text-[0.75rem] text-dim leading-[1.7]">{d.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-12 flex gap-3 flex-wrap pt-8 border-t border-border">
            <a href="https://syncflow-frontend-iota.vercel.app" target="_blank" rel="noreferrer"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-black text-black bg-transparent transition-all duration-200 hover:bg-black hover:text-white font-mono">
              Live Demo ↗
            </a>
            <a href="https://github.com/efeemmanuel/syncflow" target="_blank" rel="noreferrer"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-transparent transition-all duration-200 hover:border-paper hover:text-black font-mono">
              GitHub ↗
            </a>
            <Link to="/projects/referchain"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-transparent transition-all duration-200 hover:border-paper hover:text-black font-mono">
              Next Project: ReferChain →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}