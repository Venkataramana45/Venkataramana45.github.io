export default function Section({ id, title, children, className = '', theme}) {
  return (
    <section id={id} className={`flex min-h-screen max-w-screen  overflow-hidden ${(id === 'skills') ? `lg:items-start items-center` : `items-center`} ${className}`}>
      <div className="w-full max-w-6xl mx-auto px-6">
        {title ? <h2 className={`lg:text-4xl text-3xl font-extrabold ${id === 'skills' ? `lg:mt-3 lg:mb-0 mb-50 mt-0` : `mb-8`} ${id === 'projects-category' ? 'mt-20' : 'mt-0'} ${theme === 'dark' ? 'text-white' : ''}`}>{title}</h2> : null}
        {children}
      </div>
    </section>
  )
}


