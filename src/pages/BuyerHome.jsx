import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Bell, Sliders, Flame, Star, Clock, Heart, ChevronDown, Sparkles, X, Filter, Check } from 'lucide-react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const BuyerHome = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('حي الصحافة، الرياض');
  const [showRegions, setShowRegions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const regions = [
    'حي الصحافة، الرياض', 'حي الياسمين، الرياض', 'حي الملقا، الرياض',
    'حي الروضة، جدة', 'حي الشاطئ، جدة', 'المنطقة المركزية، مكة', 'حي الفيصلية، الدمام'
  ];

  const categories = [
    { id: 'cooking', name: 'طبخ منزلي', icon: '🥘', color: 'from-orange-500 to-red-600', size: 'col-span-2 row-span-2' },
    { id: 'sweets', name: 'حلويات', icon: '🍰', color: 'from-pink-500 to-rose-600', size: 'col-span-1 row-span-1' },
    { id: 'bakery', name: 'مخبوزات', icon: '🥐', color: 'from-yellow-500 to-amber-600', size: 'col-span-1 row-span-1' },
    { id: 'crafts', name: 'حرف يدوية', icon: '🧶', color: 'from-blue-500 to-indigo-600', size: 'col-span-2 row-span-1' },
  ];

  const featuredProducts = [
    { id: 1, name: 'ورق عنب حامض سبايسي', price: '45', family: 'مطبخ أم نورة', rating: '4.9', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'كيكة العسل بالزعفران', price: '80', family: 'سويت هوم', rating: '4.8', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'مطبق مالح وحلو', price: '35', family: 'مخبوزات الهناء', rating: '4.7', image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 selection:bg-neon-blue selection:text-dark" dir="rtl">
      <TopBar type="buyer" />

      {/* Region Selector & Welcome */}
      <section className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
               أهلاً بك <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">اكتشف أفضل المأكولات المنزلية</p>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowRegions(!showRegions)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl hover:border-neon-blue/50 transition-all active:scale-95 group"
            >
              <MapPin className="w-4 h-4 text-neon-blue" />
              <span className="text-[10px] font-bold text-white max-w-[100px] truncate">{selectedRegion}</span>
              <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${showRegions ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showRegions && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 w-56 glass-card rounded-2xl p-2 z-50 overflow-hidden shadow-2xl"
                >
                  <div className="max-h-48 overflow-y-auto no-scrollbar">
                    {regions.map((region, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedRegion(region);
                          setShowRegions(false);
                        }}
                        className={`w-full text-right px-4 py-3 rounded-xl text-[10px] font-bold transition-all ${
                          selectedRegion === region ? 'bg-neon-blue text-dark' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hero Search & Filter */}
      <section className="px-6 mb-10">
        <div className="flex gap-3">
            <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-neon-blue/20 blur-2xl group-focus-within:bg-neon-blue/40 transition-all duration-500 rounded-3xl opacity-0 group-focus-within:opacity-100"></div>
                <div className="relative flex items-center bg-white/[0.03] border border-white/5 group-focus-within:border-neon-blue/50 rounded-[2rem] p-1 shadow-2xl transition-all duration-500">
                    <div className="p-4"><Search className="w-5 h-5 text-gray-500" /></div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ماذا تشتهي اليوم؟"
                        className="bg-transparent border-none focus:ring-0 text-white w-full py-4 text-sm font-bold placeholder:text-gray-600"
                    />
                    <AnimatePresence>
                        {searchQuery && (
                            <motion.button 
                                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                onClick={() => setSearchQuery('')}
                                className="p-2 ml-2 glass rounded-full"
                            ><X className="w-4 h-4 text-gray-500" /></motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(true)}
                className="w-16 h-16 glass-card rounded-[1.8rem] border-white/5 flex items-center justify-center relative group overflow-hidden"
            >
                <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors"></div>
                <Filter className="w-6 h-6 text-neon-blue group-hover:scale-110 transition-transform" />
                <div className="absolute top-3 right-3 w-2 h-2 bg-neon-green rounded-full shadow-[0_0_8px_#00ff00]"></div>
            </motion.button>
        </div>
      </section>

      {/* Filter Modal (New) */}
      <AnimatePresence>
        {showFilters && (
            <div className="fixed inset-0 z-[100] flex items-end justify-center px-6 pb-10">
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setShowFilters(false)}
                    className="absolute inset-0 bg-dark/80 backdrop-blur-md"
                ></motion.div>
                
                <motion.div 
                    initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative w-full max-w-lg glass-card rounded-[3rem] border-white/10 p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-black text-white tracking-tighter">تصفية النتائج</h2>
                        <button onClick={() => setShowFilters(false)} className="p-2 glass rounded-full"><X className="w-5 h-5 text-white" /></button>
                    </div>

                    <div className="space-y-8">
                        {/* Price Range */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">نطاق السعر (ر.س)</label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-card bg-white/5 p-4 rounded-2xl border-white/5">
                                    <span className="text-[8px] text-gray-500 block mb-1">من</span>
                                    <span className="text-white font-black text-sm">٠</span>
                                </div>
                                <div className="glass-card bg-white/5 p-4 rounded-2xl border-white/5">
                                    <span className="text-[8px] text-gray-500 block mb-1">إلى</span>
                                    <span className="text-white font-black text-sm">٥٠٠</span>
                                </div>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">التقييم</label>
                            <div className="flex gap-2">
                                {[5, 4, 3, 2].map(star => (
                                    <button key={star} className={`flex-1 py-3 rounded-2xl border-2 font-black text-xs transition-all flex items-center justify-center gap-1
                                        ${star === 5 ? 'bg-neon-blue/10 border-neon-blue text-white' : 'bg-white/5 border-white/5 text-gray-600'}`}>
                                        <Star className={`w-3 h-3 ${star === 5 ? 'fill-neon-blue' : ''}`} />
                                        {star}+
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">ترتيب حسب</label>
                            <div className="space-y-2">
                                {['الأكثر مبيعاً', 'الأعلى تقييماً', 'الأقرب مسافة', 'السعر: من الأقل للأعلى'].map((sort, i) => (
                                    <button key={i} className="w-full p-4 glass-card border-white/5 rounded-2xl flex items-center justify-between group">
                                        <span className="text-sm font-black text-white group-hover:text-neon-blue transition-colors">{sort}</span>
                                        {i === 0 && <Check className="w-4 h-4 text-neon-blue" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => setShowFilters(false)}
                        className="w-full bg-neon-blue text-dark py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-neon-blue/20 mt-10 btn-premium"
                    >تطبيق الفلتر</button>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* Categories Bento */}
      <section className="px-6 mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-neon-purple rounded-full"></span>
            التصنيفات
          </h2>
          <button onClick={() => navigate('/buyer/categories')} className="text-[10px] text-neon-blue font-black uppercase tracking-widest hover:underline">عرض الكل</button>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[320px]">
          {categories.map((cat, i) => (
            <motion.div
              whileHover={{ scale: 0.98, y: -2 }} whileTap={{ scale: 0.95 }} key={i}
              className={`${cat.size} glass-card rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center p-4 text-center cursor-pointer group`}
              onClick={() => navigate(`/buyer/categories?type=${cat.id}`)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">{cat.icon}</span>
              </div>
              <span className="text-xs font-black text-white group-hover:text-neon-blue transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="px-6 flex justify-between items-end mb-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-neon-green rounded-full"></span>
            بالقرب منك
          </h2>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
            <Clock className="w-3 h-3 text-neon-green" />
            <span>توصيل خلال ٣٠-٤٥ دقيقة</span>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 py-2">
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[280px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-6 mb-12">
         <motion.div 
            whileHover={{ y: -5 }} className="glass-card rounded-[3rem] p-8 border border-white/10 relative overflow-hidden group cursor-pointer"
            onClick={() => navigate('/buyer/store/featured')}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/10 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 text-neon-purple mb-4">
                    <Flame className="w-5 h-5 fill-neon-purple" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">متجر الأسبوع المميز</span>
                </div>
                <h3 className="text-2xl font-black mb-2 text-white">مطبخ العراقة النجدية</h3>
                <p className="text-gray-400 text-[11px] mb-8 leading-relaxed max-w-[200px]">استمتع بأصالة المذاق النجدي المحضر بحب في منزل "أم ناصر".</p>
                <button className="bg-white text-dark px-10 py-3.5 rounded-2xl font-black text-xs btn-premium shadow-2xl shadow-white/10">زيارة المتجر</button>
            </div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-40 h-40 bg-neon-blue/20 rounded-full blur-[80px] group-hover:bg-neon-blue/40 transition-colors"></div>
            <div className="absolute bottom-4 left-6 text-6xl opacity-30 grayscale group-hover:grayscale-0 transition-all group-hover:scale-125">🥘</div>
         </motion.div>
      </section>

      <BottomNav type="buyer" />
    </div>
  );
};

export default BuyerHome;
