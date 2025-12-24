
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-4">
        {title}
        <span className="h-1 flex-1 bg-gradient-to-r from-violet-500/50 to-transparent rounded-full hidden md:block"></span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
