import { motion } from 'framer-motion';
import { ChevronRight, Filter, Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 'food', name: 'مأكولات منزلية', count: '١٢٠ أسرة', icon: '🍲', color: 'from-orange-500/20 to-orange-500/5' },
    { id: 'sweets', name: 'حلويات ومخبوزات', count: '٨٥ أسرة', icon: '🍰', color: 'from-pink-500/20 to-pink-500/5' },
    { id: 'perfumes', name: 'عطور وبخور', count: '٤٥ أسرة', icon: '✨', color: 'from-blue-500/20 to-blue-500/5' },
    { id: 'tailoring', name: 'خياطة وتطريز', count: '٣٠ أسرة', icon: '🪡', color: 'from-purple-500/20 to-purple-500/5' },
    { id: 'gifts', name: 'هدايا وتوزيعات', count: '٦٠ أسرة', icon: '🎁', color: 'from-yellow-500/20 to-yellow-500/5' },
    { id: 'art', name: 'فنون وحرف', count: '٢٥ أسرة', icon: '🎨', color: 'from-green-500/20 to-green-500/5' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-28 px-6" dir="rtl">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 glass-card z-50 p-5 flex items-center justify-between border-b border-white/5 shadow-2xl">
        <button 
            onClick={() => navigate(-1)} 
            className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-black text-white">التصنيفات</h1>
            <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-neon-blue" />
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Explore All</span>
            </div>
        </div>
        <button className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90">
            <Search className="w-6 h-6 text-neon-blue" />
        </button>
      </div>

      <div className="space-y-4">
          {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                onClick={() => navigate(`/buyer/search?category=${cat.id}`)}
                className={`relative overflow-hidden glass-card p-6 rounded-[2.5rem] border-white/5 bg-gradient-to-br ${cat.color} flex items-center justify-between group cursor-pointer shadow-xl`}
              >
                  <div className="flex items-center gap-6 relative z-10">
                      <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-white/10">
                        {cat.icon}
                      </div>
                      <div>
                          <h3 className="text-lg font-black text-white group-hover:text-neon-blue transition-colors">{cat.name}</h3>
                          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{cat.count}</p>
                      </div>
                  </div>
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center border-white/10 group-hover:border-neon-blue transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400 rotate-180 group-hover:text-neon-blue transition-colors" />
                  </div>

                  {/* Animated background glow */}
                  <div className="absolute -right-10 -top-10 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-blue/10 transition-colors"></div>
              </motion.div>
          ))}
      </div>

      <BottomNav type="buyer" />
    </div>
  );
};

export default Categories;
