import { technologiesData } from '../data/technologies';
import TechCard from './TechCard';
import type { Technology } from '../types/tech';

interface TechListProps {
  onAddStack: (tech: Technology) => void;
  selectedStack: Technology[];
}

export default function TechList({ onAddStack, selectedStack }: TechListProps) {
  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid of Tech Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologiesData.map((tech) => {
          // Check if this technology is already added in the user's stack
          const isSelected = selectedStack.some((item) => item.id === tech.id);

          return (
            <TechCard
              key={tech.id}
              technology={tech}
              onAddStack={onAddStack}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </section>
  );
}