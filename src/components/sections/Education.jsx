import Section from './Section'

const items = [
  { title: 'Bachelor of Technology', place: 'Vardhaman College of Engineering', years: '2021 - 2025', cgpa: '7.88 CGPA', location: 'Hyderabad, IN' },
  { title: 'Intermediate', place: 'Narayana Junior College', years: '2019 - 2021', cgpa: '936 marks', location: 'Hyderabad, IN' },
  { title: 'School', place: "ST. Joseph's High School", years: '2009 - 2019', cgpa: '9.7 GPA', location: 'Hyderabad, IN' },
]

export default function Education({theme}) {
  return (
    <Section id="education" title="Education" className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} theme={theme}>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-amber-400" />
        <div className="lg:space-y-16 space-y-20 my-15 lg:my-0">
          {items.map((e, idx) => (
            <div key={idx} className="grid grid-cols-[48px_1fr] gap-6 items-start">
              <div className="relative h-6">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-fuchsia-500 shadow ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`} />
              </div>
              <div className="rounded-lg lg:p-4 p-0">
                <div className={`lg:text-2xl text-xl font-bold ${theme === 'dark' ? 'text-white' : ''}`}>{e.title}</div>
                <div className={`text-md  ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>{e.place} • {e.years}</div>
                <div className={`text-md  mt-1 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>{e.cgpa}  •  {e.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}


