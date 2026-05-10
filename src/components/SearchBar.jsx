import { Search, SlidersHorizontal } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative group w-full mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
          </div>
          <input
            type="text"
            placeholder="ابحث عن مأكولات، حرف، أو أسر..."
            dir="rtl"
            className="w-full glass bg-opacity-20 border-white/10 text-white placeholder-gray-500 rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 focus:border-neon-blue transition-all duration-300 text-sm"
          />
        </div>
        <button className="p-4 glass rounded-2xl border-white/10 text-neon-blue hover:bg-neon-blue/10 transition-all">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
