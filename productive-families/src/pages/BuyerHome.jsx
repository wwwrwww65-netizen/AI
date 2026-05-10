import { motion } from 'framer-motion';
import { Search, MapPin, Bell, Sliders, Flame, Star, Clock, Heart } from 'lucide-react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const BuyerHome = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'طبخ منزلي', icon: '🥘', color: 'bg-orange-500', size: 'col-span-2 row-span-2' },
    { name: 'حلويات', icon: '🍰', color: 'bg-pink-500', size: 'col-span-1 row-span-1' },
    { name: 'مخبوزات', icon: '🥐', color: 'bg-yellow-600', size: 'col-span-1 row-span-1' },
    { name: 'حرف يدوية', icon: '🧶', color: 'bg-blue-500', size: 'col-span-2 row-span-1' },
  ];

  const featuredProducts = [
    { id: 1, name: 'ورق عنب حامض', price: '45', seller: 'مطبخ أم نورة', rating: '4.9', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'كيكة العسل', price: '80', seller: 'سويت هوم', rating: '4.8', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=300' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24" dir="rtl">
      <TopBar type="buyer" />

      {/* Hero Section with Search */}
      <section className="px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-dark/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            <Search className="w-6 h-6 text-gray-500 mr-4" />
            <input
              type="text"
              placeholder="ابحث عن أكلة منزلية أو منتج..."
              className="bg-transparent border-none focus:ring-0 text-white w-full py-3 px-4 text-sm"
              onClick={() => navigate('/buyer/search')}
            />
            <button className="bg-neon-blue/10 p-3 rounded-xl border border-neon-blue/20">
              <Sliders className="w-5 h-5 text-neon-blue" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Bento Categories */}
      <section className="px-6 mb-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-neon-purple rounded-full"></span>
            التصنيفات
          </h2>
          <button className="text-xs text-neon-blue font-bold">عرض الكل</button>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[300px]">
          {categories.map((cat, i) => (
            <motion.div
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className={`${cat.size} glass rounded-3xl border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center cursor-pointer`}
              onClick={() => navigate('/buyer/categories')}
            >
              <div className={`absolute top-0 right-0 w-16 h-16 ${cat.color} blur-[50px] opacity-20`}></div>
              <span className="text-4xl mb-2 z-10">{cat.icon}</span>
              <span className="text-sm font-bold text-white z-10">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Near You - Floating Horizontal Scroll */}
      <section className="mb-10">
        <div className="px-6 flex justify-between items-end mb-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-neon-green rounded-full"></span>
            بالقرب منك
          </h2>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            <MapPin className="w-3 h-3 text-neon-green" />
            <span>حي الصحافة، الرياض</span>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 py-2">
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[280px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions / Featured Seller */}
      <section className="px-6 mb-10">
         <div className="glass-morphism rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 text-neon-purple mb-4">
                    <Flame className="w-5 h-5 fill-neon-purple" />
                    <span className="text-xs font-black uppercase tracking-widest">متجر اليوم المميز</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-white">مطبخ العراقة النجدية</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">أفضل المأكولات الشعبية المحضرة منزلياً بأيدي طهاة محترفين.</p>
                <button
                  onClick={() => navigate('/buyer/store/1')}
                  className="bg-white text-dark px-8 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-white/10 hover:bg-neon-purple hover:text-white transition-all duration-500"
                >
                    تصفح المتجر
                </button>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neon-purple rounded-full blur-[60px] opacity-20"></div>
         </div>
      </section>

      <BottomNav type="buyer" />
    </div>
  );
};

export default BuyerHome;
