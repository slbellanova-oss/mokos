import React from 'react';

interface AboutSectionProps {
  scrollProgress: number;
}

export const AboutSection = ({ scrollProgress }: AboutSectionProps) => {
  return (
    <div className={`fixed inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${scrollProgress > 50 && scrollProgress < 250 ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
    </div>
  );
};