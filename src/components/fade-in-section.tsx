'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInSection({ children, className }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
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
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity ease-in duration-700',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
