import Section from './Section'

export default function Projects({ onOpenCategory, theme }) {
  const Card = ({ title, caption, type, theme }) => (
    <button
      onClick={() => onOpenCategory(type)}
      className={`group relative w-full md:w-[420px] overflow-hidden rounded-2xl border border-neutral-200 p-8 text-left shadow-sm transition-transform hover:-translate-y-1 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}
    >
      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-300 group-hover:from-fuchsia-500 group-hover:to-cyan-500 transition-colors">{title}</div>
      <div className={`mt-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-500'}`}>{caption}</div>
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-40 bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-fuchsia-500 via-purple-500 to-yellow-300 blur-2xl opacity-60" />
      </div>
    </button>
  )

  return (
    <Section id="projects" title="Projects" className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} theme={theme}>
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        <Card title="Flutter" caption="Mobile apps and UI" type="flutter" theme={theme}/>
        <Card title="MERN" caption="Web apps and APIs" type="mern" theme={theme}/>
      </div>
    </Section>
  )
}


