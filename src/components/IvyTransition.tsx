import React from 'react';

interface IvyTransitionProps {
  className?: string;
}

export const IvyTransition: React.FC<IvyTransitionProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute left-0 w-full h-dvh z-10 pointer-events-none ${className}`}
      style={{
        top: '100vh',
        transform: 'translateY(-55%)',
      }}
    >
      <img
        src="/plush.png"
        alt=""
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default IvyTransition;