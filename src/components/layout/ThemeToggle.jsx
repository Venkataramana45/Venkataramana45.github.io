export default function ThemeToggle({ theme, onToggle}) {

  

  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="h-8 w-8 grid place-items-center rounded-md bg-neutral-800 hover:bg-neutral-700 text-yellow-300 dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:text-yellow-600"
    >
      {theme === 'light' ? (
        // Moon (tap to go dark)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
        </svg>
      ) : (
        // Sun (tap to go light)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  )
}

