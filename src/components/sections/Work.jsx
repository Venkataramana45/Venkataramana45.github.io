import { useMemo, useRef, useState, useEffect } from 'react';
import Section from './Section';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { LeftArrow } from '../../assets/icons/LeftArrow';
import { RightArrow } from '../../assets/icons/RightArrow';

export default function Work({ theme }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  const items = useMemo(
    () => [
      { role: 'Flutter Intern', company: 'Ambao Krishi Kutumb', desc: 'As part of a full-stack development team, I contributed to the design and development of cross-platform mobile applications using Flutter. I integrated Firebase as the backend database and implemented RESTful APIs to enable seamless communication between the frontend and backend. For state management, I utilized GetX to efficiently handle application state and routing. A significant challenge—and learning opportunity—was my involvement in the testing process, where I gained valuable experience in writing and executing test cases to ensure application reliability and performance.' },
      { role: 'Android Intern', company: '1Stop', desc: 'Assigned multiple Android development projects—such as a News App—to evaluate and strengthen my development skills. Focused on building clean UIs and integrating RESTful APIs to fetch and display dynamic content. These projects helped enhance my practical understanding of mobile architecture, API handling, and UI responsiveness.' },
    ],
    []
  );

  const scrollToIndex = (newIndex) => {
  const el = containerRef.current;
  if (!el) return;

  const clampedIndex = Math.max(0, Math.min(items.length - 1, newIndex));
  setIndex(clampedIndex);
  el.scrollTo({
    left: clampedIndex * el.clientWidth,
    behavior: 'smooth',
  });
};


useEffect(() => {
  if (isHovered) return;

  const interval = setInterval(() => {
    setIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % items.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, 3500);

  return () => clearInterval(interval);
}, [items.length, isHovered]);



  const next = () => scrollToIndex(index + 1);
  const prev = () => scrollToIndex(index - 1);

  return (
    <Section
      id="work"
      title="Work History"
      className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}
      theme={theme}
    >
      <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div
          ref={containerRef}
          className="w-full overflow-hidden scroll-smooth"
        >
          <div className="flex transition-transform duration-500 ease-in-out">
            {items.map((w, idx) => (
              <div
                key={idx}
                className="shrink-0 w-full lg:h-[60vh] md:h-[30vh] h-[70vh] rounded-2xl bg-neutral-900 text-white"
              >
                <div className="w-full h-full rounded-2xl flex flex-col justify-center lg:px-20 px-10 bg-gradient-to-r from-fuchsia-500/0 via-purple-500/0 via-amber-300/0 via-fuchsia-500/30 via-purple-500/30 via-amber-300/30 via-fuchsia-500 via-purple-500 to-amber-300">
                  <div className="lg:text-3xl text-2xl font-extrabold">{w.role}</div>
                  <div className="lg:mt-2 mt-1 text-neutral-300">{w.company}</div>
                  <p className="lg:mt-4 mt-2 lg:max-w-2xl max-w-6xl text-sm text-neutral-200 text-justify">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {index > 0 && (
          <button
            onClick={prev}
            className="absolute lg:left-4 left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
          >
            <LeftArrow/>
          </button>
        )}

        
        {index < items.length - 1 && (
          <button
            onClick={next}
            className="absolute lg:right-4 right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
          >
            <RightArrow/>
          </button>
        )}

        
        <div className="flex justify-center gap-3 mt-6">
          {items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              className={`lg:w-3 lg:h-3 w-4 h-1 rounded-full transition-all duration-300 ${
                index === dotIdx
                  ? `${theme === 'dark' ? `bg-white scale-125` : `bg-neutral-900 scale-125`}`
                  : `${theme === 'dark' ? `bg-neutral-600` : `bg-gray-400`}`
              }`}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
}
