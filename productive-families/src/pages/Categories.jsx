import { motion } from 'framer-motion';
import { ChevronRight, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'مأكولات منزلية', count: '120 أسرة', icon: '🍲', color: 'from-orange-500/20' },
    { name: 'حلويات ومخبوزات', count: '85 أسرة', icon: 'Cake', color: 'from-pink-500/20' },
    { name: 'عطور وبخور', count: '45 أسرة', icon: '✨', color: 'from-blue-500/20' },
    { name: 'خياطة وتطريز', count: '30 أسرة', icon: '🪡', color: 'from-purple-500/20' },
    { name: 'هدايا وتوزيعات', count: '60 أسرة', icon: '🎁', color: 'from-yellow-500/20' },
    { name: 'فنون وحرف', count: '25 أسرة', icon: '🎨', color: 'from-green-500/20' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-20 px-6" dir="rtl">
      <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center justify-between border-b border-white/5">
        <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold">التصنيفات</h1>
        <button className="p-2 text-neon-blue"><Search className="w-6 h-6" /></button>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
          {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden glass p-6 rounded-[2rem] border-white/5 bg-gradient-to-br ${cat.color} to-transparent flex items-center justify-between group cursor-pointer`}
              >
                  <div className="flex items-center gap-6">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{cat.icon === 'Cake' ? '🍰' : cat.icon}</div>
                      <div>
                          <h3 className="text-lg font-black text-white">{cat.name}</h3>
                          <p className="text-xs text-gray-500">{cat.count}</p>
                      </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
              </motion.div>
          ))}
      </div>

      <BottomNav type="buyer" />
    </div>
  );
};

export default Categories;
