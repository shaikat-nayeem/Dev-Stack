import type { Technology } from '../types/tech';


interface StackManagerProps {
  selectedStack: Technology[];
  onRemoveStack: (id: string, name: string) => void;
  onClearAll: () => void;
}

export default function StackManager({ selectedStack, onRemoveStack, onClearAll }: StackManagerProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-24 w-full lg:w-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-base">Your Stack</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
          {selectedStack.length} Selected
        </span>
      </div>

      {selectedStack.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-400 text-sm">No technologies added yet.</p>
          <p className="text-gray-300 text-xs mt-1">Pick items from the list to build your stack.</p>
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 p-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-xs text-gray-800 border border-gray-200 shadow-sm">
                  {tech.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-gray-900">{tech.name}</h4>
                  <span className="text-[10px] text-gray-500">{tech.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemoveStack(tech.id, tech.name)}
                className="text-gray-400 hover:text-red-500 text-sm font-bold px-2 py-1 transition duration-150"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedStack.length > 0 && (
        <button
          onClick={onClearAll}
          className="w-full border border-red-200 hover:bg-red-50 text-red-600 text-sm font-medium py-2 rounded-xl transition duration-200"
        >
          Remove All
        </button>
      )}
    </div>
  );
}