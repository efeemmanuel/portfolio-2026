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
      'Operations teams across growing companies were coordinating work through spreadsheets, shared inboxes, and ad hoc Slack threads. There was no structured ownership model. Tasks were duplicated, dropped, or completed without anyone knowing. Project status lived in someone\'s head, not in a system.',
      'The deeper problem was organisational: there was no concept of role scoped visibility. An intern and a department head saw the same undifferentiated pile of tasks. Team leads had no tooling to track what their team was actually shipping. Admins had no audit layer to understand where work was stalling and why.',
    ],
  },
  {
    num: '03',
    label: 'SOLUTION',
    title: 'The Approach',
    content: [
      'SyncFlow models the real structure of a company as first class database entities. A company owns teams. Teams own projects and members. Projects own tasks and channels. Every query, every permission check, and every API response is scoped to this hierarchy. Nothing leaks across tenant boundaries.',
      'Role based access control is not a bolt on. It is enforced at the dependency injection layer in FastAPI before any service logic runs. Admins get full company visibility. Team leads get team scoped write access. Members get read and update access on their own assigned work only. The frontend adapts its entire UI surface based on the authenticated role, not just hiding buttons but changing what data is fetched entirely.',
      'The async stack was a deliberate choice. FastAPI with SQLAlchemy async and asyncpg means the server never blocks on a database round trip. Under concurrent load, requests interleave at the IO boundary rather than queuing behind each other. Redis handles everything that needs sub-millisecond reads: OTP codes with TTL, refresh token state, invite tokens, and session invalidation.',
    ],
  },
  {
    num: '04',
    label: 'SYSTEM DESIGN',
    title: 'Architecture',
    content: [
      'The backend is structured as a layered service architecture. Routes handle HTTP concerns and permission enforcement only. Services contain all business logic. Models define the schema. This separation means any service can be tested in isolation without touching the HTTP layer, and schema changes never bleed into route handlers.',
      'The data model uses a strict multi tenant pattern. Every table that holds business data carries a company_id foreign key with CASCADE delete. Cascade constraints are enforced at the database level, not just the application layer, so orphaned records are structurally impossible. Alembic manages all schema migrations with full version history, making production schema changes auditable and reversible.',
    ],
    design: [
      { label: 'DATA LAYER', value: 'PostgreSQL via Neon · SQLAlchemy 2.0 async ORM · Alembic versioned migrations · multi tenant schema with company_id isolation · CASCADE deletes enforced at DB level · async session per request via dependency injection' },
      { label: 'CACHE AND SESSION LAYER', value: 'Redis via Render Key Value · OTP codes stored with 10 minute TTL · JWT refresh tokens stored per user with invalidation on logout · invite tokens with configurable expiry · from_url connection for environment portability' },
      { label: 'AUTH LAYER', value: 'JWT access tokens (30 min) and refresh tokens (7 day rotation) · three tier RBAC: admin, team lead, member · permission enforcement via FastAPI Depends before service execution · email OTP verification on company registration · tokenised invite flow for team leads and members' },
      { label: 'API LAYER', value: 'FastAPI with async route handlers throughout · Pydantic v2 for request validation and response serialisation · structured ValueError to HTTPException mapping in every route · CORS origins split by environment · prefix versioned at /api/v1' },
      { label: 'FRONTEND ARCHITECTURE', value: 'React 19 with TanStack Query for all server state · Zustand for auth and theme state with localStorage persistence · Axios client with request interceptor for token injection and 401 redirect · Framer Motion for layout animations · Tailwind CSS v4 with dark mode via custom variant · role adaptive UI: data fetching strategy changes per role, not just rendering' },
      { label: 'INFRASTRUCTURE', value: 'Docker Compose for local development with health checks on Postgres and Redis before web service starts · Render Web Service via Docker runtime for backend · Render Key Value for Redis · Neon serverless Postgres with asyncpg connection string · Vercel for frontend with VITE_API_URL environment variable · GitHub push triggers auto deploy on both Render and Vercel' },
    ],
  },
  {
    num: '05',
    label: 'TECH DECISIONS',
    title: 'Why These Choices',
    content: [
      'FastAPI over Django REST Framework was chosen for its native async support. Django\'s ORM is synchronous at its core. For a multi tenant app with concurrent users across projects and channels, blocking the event loop on every query would have been a structural ceiling on throughput. FastAPI with asyncpg means database IO never blocks the server.',
      'SQLAlchemy 2.0 over a lighter ORM like Tortoise was chosen for its maturity and the power of its query API. Complex queries involving joins across company, team, project, and task boundaries needed an expressive query layer. Tortoise would have required dropping to raw SQL for several of these. SQLAlchemy handled them natively.',
      'TanStack Query on the frontend eliminated an entire class of bugs. Before it, every page was managing its own loading, error, and stale data state with useEffect and useState. TanStack Query centralises that into a single cache with automatic invalidation. When a task is updated in the detail panel, every other component showing that task data reflects the change without any manual coordination.',
      'Redis for session state rather than database storage was a deliberate security and performance decision. OTP codes and refresh tokens are high read frequency, short lived, and need atomic TTL enforcement. Storing them in Postgres would have added unnecessary row churn and made TTL expiry a cron job rather than a database primitive.',
    ],
  },
  {
    num: '06',
    label: 'FEATURES',
    title: 'What Was Built',
    content: [
      'Company registration with OTP email verification. Tokenised invite flows for team leads and members. Project creation scoped to single teams or company wide with automatic channel provisioning per project. Task management with priority levels, deadlines, status tracking, assignees, threaded comments, and file attachments.',
      'A channels system with company wide general rooms and project scoped channels, threaded replies, message deletion, and 5 second polling ahead of WebSocket integration. Role adaptive dashboards with contextual stats per user type. Profile image upload stored locally with cross app propagation. Dark mode with system preference detection. Fully responsive layout across mobile, tablet, and desktop.',
    ],
  },
  {
    num: '07',
    label: 'IMPROVEMENTS',
    title: "What's Next",
    content: [
      'The channels system currently polls every 5 seconds. The next iteration replaces this with a WebSocket layer using FastAPI\'s native WebSocket support, pushing message events to connected clients rather than having them request repeatedly. This removes unnecessary server load and makes the chat experience feel instant.',
      'File attachments currently accept URLs. The next version integrates Cloudflare R2 for binary file storage with presigned upload URLs generated server side. Images render as inline previews, videos play in the task panel, and all files are scoped to the company tenant with signed access so files from one company are never accessible to another.',
      'A metrics layer is planned to surface per team and per project throughput: average time a task spends in each status, blocked rate by team, and completion velocity over rolling windows. This gives team leads and admins the data layer needed to identify bottlenecks systematically rather than through instinct.',
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
            SyncFlow is a multi tenant team management platform built to replace fragmented task tracking across
            company departments. It models the real structure of an organisation as first class database entities,
            enforces role based access control at the infrastructure layer, and delivers a role adaptive frontend
            that changes not just what users see but what data it fetches entirely based on who is authenticated.
            Built async throughout: FastAPI, SQLAlchemy 2.0, asyncpg, and Redis handling everything from OTP
            flows to session state.
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
              alt="SyncFlow dashboard screenshot"
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