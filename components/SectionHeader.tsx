import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
        {title}<span className="text-violet-500">.</span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;