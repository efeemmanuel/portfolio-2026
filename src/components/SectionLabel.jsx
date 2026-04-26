export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-12 text-[0.62rem] text-muted tracking-[0.16em] uppercase">
      {children}
      <span className="flex-1 h-px bg-border" />
    </div>
  )
}
