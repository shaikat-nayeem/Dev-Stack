import type { Technology } from '../types/tech';

interface TechCardProps {
  technology: Technology;
  onAddStack: (tech: Technology) => void;
  isSelected: boolean;
}

export default function TechCard({ technology, onAddStack, isSelected }: TechCardProps) {
  // Helper for badge styling based on variant or type
  const getBadgeStyle = (variant?: string) => {
    switch (variant) {
      case 'popular':
        return 'bg-blue-50 text-blue-600';
      case 'versatile':
        return 'bg-emerald-50 text-emerald-600';
      case 'fast':
        return 'bg-amber-50 text-amber-600';
      case 'standard':
        return 'bg-cyan-50 text-cyan-600';
      case 'top-sql':
        return 'bg-indigo-50 text-indigo-600';
      case 'essential':
        return 'bg-orange-50 text-orange-600';
      case 'robust':
        return 'bg-sky-50 text-sky-600';
      case 'modern':
        return 'bg-teal-50 text-teal-600';
      case 'containers':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between">
      <div>
        {/* Top Header inside card: Icon/Name and Optional Badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center font-bold text-gray-800 border border-gray-100">
              {technology.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">{technology.name}</h3>
            </div>
          </div>
          {technology.badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle(technology.badgeVariant)}`}>
              {technology.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {technology.description}
        </p>
      </div>

      <div>
        {/* Category, Level / Rating info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-50">
          <span className="font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded">
            {technology.category}
          </span>
          <div className="flex items-center gap-2">
            <span>Intermediate</span>
            <span className="flex items-center font-medium text-gray-800">
              ⭐ {technology.rating}
            </span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAddStack(technology)}
          disabled={isSelected}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition duration-200 ${
            isSelected
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm'
          }`}
        >
          {isSelected ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}