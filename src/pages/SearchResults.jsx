import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, Filter, X, Sliders, ArrowLeft, Sparkles, LayoutGrid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('حلويات منزلية');
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    { id: 1, name: 'ورق عنب بالليمون حامض', family: 'مطبخ سارة', price: '٤٥', rating: '٤.٩', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'بخور دوسري ملكي فاخر', family: 'أطياب الشرقية', price: '١٢٠', rating: '٥.٠', image: 'https://images.unsplash.com/photo-1595943529924-c5012fbd7933?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'كيكة العسل بالكراميل', family: 'سويت هوم', price: '٨٥', rating: '٤.٨', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'مطبق مالح وحلو محشي', family: 'مخبوزات الهناء', price: '٣٥', rating: '٤.٧', image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-28 px-6 selection:bg-neon-blue selection:text-dark" dir="rtl">
      {/* Premium Search Header */}
      <div className="fixed top-0 left-0 right-0 glass-card z-50 p-5 flex flex-col gap-4 border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-4">
            <button 
                onClick={() => navigate(-1)} 
                className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
            >
                <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-neon-blue/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center bg-white/[0.03] border border-white/5 group-focus-within:border-neon-blue/40 rounded-2xl p-0.5 transition-all">
                    <div className="p-3">
                        <Search className="w-4 h-4 text-gray-500 group-focus-within:text-neon-blue transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-white w-full py-3 text-sm font-bold placeholder:text-gray-600"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="p-2 ml-2">
                            <X className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                        </button>
                    )}
                </div>
            </div>
            <button className="p-3 glass rounded-2xl border-white/10 text-neon-blue shadow-lg shadow-neon-blue/5">
                <Sliders className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Results Controls */}
      <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
                نتائج البحث <Sparkles className="w-4 h-4 text-neon-blue" />
            </h2>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">تم العثور على {products.length * 2} منتجاً</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-neon-blue text-dark shadow-lg shadow-neon-blue/20' : 'text-gray-500'}`}
              >
                  <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-neon-blue text-dark shadow-lg shadow-neon-blue/20' : 'text-gray-500'}`}
              >
                  <List className="w-4 h-4" />
              </button>
          </div>
      </div>

      {/* Products Grid */}
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <ProductCard {...p} />
          </motion.div>
        ))}
        {products.map((p, i) => (
          <motion.div
            key={p.id + 10}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i + 4) * 0.05 }}
          >
            <ProductCard {...p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
