import { motion } from 'framer-motion';
import { ChevronRight, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'ورق عنب بالليمون', family: 'مطبخ سارة', price: '45', rating: '4.9' },
    { id: 2, name: 'بخور دوسري ملكي', family: 'أطياب الشرقية', price: '120', rating: '5.0' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-4" dir="rtl">
      <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
                type="text"
                defaultValue="ورق عنب"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 pl-10 text-sm outline-none focus:border-neon-blue"
            />
        </div>
        <button className="p-2 glass rounded-xl border-white/10 text-neon-blue">
            <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
          <h2 className="text-gray-400 text-sm">تم العثور على 24 منتج</h2>
          <select className="bg-transparent text-xs text-white outline-none font-bold">
              <option>الأحدث</option>
              <option>الأقل سعراً</option>
          </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        {products.map(p => (
          <ProductCard key={p.id + 10} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
