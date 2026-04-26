import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { useReveal } from '../hooks/useReveal.js'

const tags = [
  { label: 'Django REST Framework', hi: true },
  { label: 'PostgreSQL', hi: true },
  { label: 'React', hi: true },
  { label: 'Neon', hi: true },
  { label: 'JWT', hi: true },
  { label: 'Redis' },
  { label: 'Tailwind CSS' },
  { label: 'Vite' },
  { label: 'Render' },
  { label: 'Vercel' },
]

const sections = [
  {
    num: '02',
    label: 'PROBLEM',
    title: 'The Challenge',
    content: [
      "Nigeria's hospital system relies on informal referrals  phone calls, handwritten letters, and word-of-mouth. There is no standard format, no tracking mechanism, and receiving hospitals often have no advance notice before a patient arrives at their door.",
      "Patients like Mama Ngozi  a woman from Surulere referred from a Primary Health Centre to Lagos Island General, then to LUTH  arrive at each new facility as if they are a brand new patient. The same blood tests get repeated. The same history gets retold. No one in the chain has the complete picture. This is not an edge case. This is Tuesday in Nigeria.",
    ],
  },
  {
    num: '03',
    label: 'SOLUTION',
    title: 'The Approach',
    content: [
      'ReferChain replaces the paper referral letter with a tracked, shareable, and persistent digital record that follows the patient across every hospital they visit. A doctor creates a digital referral in minutes  capturing symptoms, test results, urgency level, and the destination hospital. The receiving hospital is notified immediately by email with a full patient summary before the patient even arrives.',
      'When a referral is accepted, the patient receives a unique referral code and QR code by email. At the receiving hospital, the receptionist scans the QR or types the code to pull up the complete referral history and all medical records  no phone calls, no repeated tests, no starting from zero.',
    ],
  },
  {
    num: '04',
    label: 'TECH STACK & DECISIONS',
    title: 'Stack and Why',
    content: [
      'Every technology decision was made deliberately  prioritising correctness, speed of delivery, and long-term maintainability over novelty.',
    ],
    design: [
      {
        label: 'DJANGO REST FRAMEWORK',
        value: 'Chosen over FastAPI for its batteries-included approach. Built-in ORM, migrations, admin panel, and permissions system meant we could focus on domain logic rather than infrastructure wiring. DRF serializers handle validation, shaping, and nested relationships cleanly.',
      },
      {
        label: 'POSTGRESQL ON NEON',
        value: 'PostgreSQL for relational integrity across hospitals, patients, doctors, and referrals. Neon provides serverless PostgreSQL with connection pooling  free tier sufficient for early stage, no infrastructure to manage, SSL enforced by default.',
      },
      {
        label: 'JWT WITH SIMPLEJWT',
        value: 'Short-lived access tokens (5 min) with long-lived refresh tokens (1 day). Automatic refresh on 401 responses handled by Axios interceptors on the frontend. Two user roles  hospital_admin and doctor  enforced at the permission class level on every endpoint.',
      },
      {
        label: 'REACT + VITE + TAILWIND',
        value: 'React for component-driven UI with role-based routing. Vite for fast builds and hot module replacement. Tailwind for consistent design tokens without a component library dependency. Zustand for lightweight auth state management  no Redux overhead needed.',
      },
      {
        label: 'REDIS CACHING',
        value: 'Redis via django-redis on the three heaviest endpoints: GET /patients/{id}/, GET /referrals/{id}/, and GET /referrals/{id}/chain/. Cache invalidated on every write. Falls back to local memory cache gracefully when Redis is unavailable  the app never crashes without it.',
      },
      {
        label: 'RENDER + VERCEL + NEON',
        value: 'Backend on Render  auto-deploys from GitHub main branch, migrations run on startup. Frontend on Vercel  auto-deploys on push, zero config for Vite. Database on Neon  decoupled from both, accessible from anywhere with SSL. Three separate deployment concerns, zero shared infrastructure.',
      },
    ],
  },
  {
    num: '05',
    label: 'SYSTEM DESIGN',
    title: 'Architecture',
    content: [
      'The system is built around a central ownership model  ReferChain owns the patient profile, not any individual hospital. This is a deliberate architectural decision. If the originating hospital owned the profile, the chain would break the moment the patient moved to a new facility. Central ownership ensures the record is always accessible, always complete, and never lost regardless of how many hospitals a patient passes through.',
    ],
    design: [
      {
        label: 'ACCESS CONTROL',
        value: 'A hospital can only view a patient profile if they are the originating facility or an active recipient in that patient\'s current referral chain. Access is enforced at the query level  not just in views  so no data leaks between hospitals regardless of how the API is called.',
      },
      {
        label: 'REFERRAL STATE MACHINE',
        value: 'Referrals move through four states: pending → accepted → completed, or pending → rejected. State transitions are enforced at the view layer with explicit checks  invalid transitions return 400. Only the receiving hospital can accept, reject, or complete a referral.',
      },
      {
        label: 'NOTIFICATION PIPELINE',
        value: 'Django signals fire on post_save. On referral creation, the receiving hospital gets an email with the full patient summary and medical records. On acceptance, the patient gets their referral code and QR code attached as a PNG. Signal order ensures QR exists before the patient email fires.',
      },
      {
        label: 'MEDICAL RECORDS',
        value: 'Stored centrally against the patient profile  not per hospital. Records include symptoms, test results, diagnoses, prescriptions, and clinical notes. Any hospital in the referral chain can read the full record history. The referring hospital\'s records are included in the notification email to the receiving hospital.',
      },
    ],
  },
  {
    num: '06',
    label: 'INVITE FLOW',
    title: 'Doctor Onboarding',
    content: [
      'Doctors do not self-register. A hospital admin sends an invite to a doctor\'s email  the backend generates a secure token, stores the invitation with a 48-hour expiry, and emails a registration link. The doctor clicks the link, verifies the token is valid and pending, then completes their profile and sets a password.',
      'This approach was chosen deliberately. It ties every doctor account to a verified hospital, prevents arbitrary registrations, and gives the hospital admin full control over who can access their patients. The invite flow uses atomic transactions  if the User or Doctor record fails to create, neither is committed.',
    ],
  },
  {
    num: '07',
    label: 'PATIENT IDENTITY',
    title: 'The Two Codes',
    content: [
      'Every patient gets two distinct codes that serve different purposes. The patient unique code is permanent  generated at registration, it is the patient\'s identity in the system across all hospitals, equivalent to a file number. The referral unique code is generated fresh only when a receiving hospital accepts a referral  it is the one-time travel document the patient carries to the receiving facility.',
      'Non-tech-savvy patients receive their referral code by SMS or as a printed slip from the referring doctor. Tech-savvy patients receive the QR code by email and show it on their phone screen. Both paths resolve to the same lookup endpoint: GET /patients/code/{code}/  which returns the full patient profile and referral history to any hospital with legitimate access.',
    ],
  },
  {
    num: '08',
    label: 'IMPROVEMENTS',
    title: "What's Next",
    content: [
      'SMS notifications via Termii or WhatsApp Cloud API  for patients without email and for facilities in areas with inconsistent data connectivity. The signal pipeline is already designed for this: the patient notification function is isolated and the fallback path is documented.',
      'Longer term, HL7 FHIR compliance to enable interoperability with larger health systems and government health infrastructure. FHIR would allow ReferChain to plug into existing health data exchanges rather than being a standalone system. Also planned: an audit log of every profile access, NIN-based duplicate detection, and an admin analytics dashboard for referral volume and response times by facility.',
    ],
  },
]

export default function CaseStudyReferChain() {
  useReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-white text-black font-mono">
      <Nav isCase projectPath="projects/referchain" />

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

          <div className="text-[0.6rem] text-black tracking-[0.14em] mb-3">CASE STUDY  02</div>
          <div className="font-display font-extrabold text-black tracking-[-0.03em] leading-none mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            ReferChain
          </div>
          <div className="text-[0.65rem] text-muted tracking-[0.06em] mb-6">/projects/referchain</div>
          <p className="text-[0.82rem] text-dim leading-[1.9] max-w-[640px]">
            ReferChain digitizes the patient referral process between Nigerian hospitals  replacing
            handwritten letters and phone calls with a tracked, shareable, and persistent digital record
            that follows the patient across every hospital they visit. Built with a role-based Django REST
            API, a React frontend, and a central patient ownership model designed to survive the full
            referral chain regardless of how many facilities a patient passes through.
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
              src="/images/referchain-screenshot.png"
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
            <a href="https://referchain-frontend.vercel.app" target="_blank" rel="noreferrer"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-black text-black bg-transparent transition-all duration-200 hover:bg-black hover:text-white font-mono">
              Live Demo ↗
            </a>
            <a href="https://github.com/efeemmanuel/referchain" target="_blank" rel="noreferrer"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-transparent transition-all duration-200 hover:border-paper hover:text-black font-mono">
              GitHub ↗
            </a>
            <Link to="/"
              className="text-[0.63rem] tracking-[0.06em] px-[0.85rem] py-[0.42rem] border border-border text-dim bg-transparent transition-all duration-200 hover:border-paper hover:text-black font-mono">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}