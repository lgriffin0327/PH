'use client'

import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F7F9F9] py-16 pt-32">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center text-[#2C3E50] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          The world's largest Christian counseling service, 100% online.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '400,000+', text: 'Counseling sessions' },
            { number: '25,000+', text: 'Licensed therapists' },
            { number: '3,000,000+', text: 'Lives improved' },
          ].map((stat, index) => (
            <div key={index} className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-5xl md:text-6xl font-bold text-[#B1A976] mb-2">{stat.number}</p>
              <p className="text-xl text-[#2C3E50]">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
