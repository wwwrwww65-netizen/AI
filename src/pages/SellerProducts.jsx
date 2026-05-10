import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ChevronRight, Plus, Edit2, Trash2, ArrowLeft, Search, Filter, Sparkles, Star, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerProducts = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});

  const products = [
    { id: 1, name: 'ورق عنب بالليمون سبايسي', price: '٤٥', sales: '١٢٠', status: 'نشط', rating: '٤.٩', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'بخور دوسري ملكي فاخر', price: '١٢٠', sales: '٤٥', status: 'نشط', rating: '٤.٨', image: 'https://images.unsplash.com/photo-1595943529924-c5012fbd7933?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'كيكة العسل بالكراميل', price: '٨٥', sales: '٣٢', status: 'نفدت الكمية', rating: '٤.٧', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=200' },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-dark pb-40 pt-28 px-6 selection:bg-neon-purple selection:text-white" dir="rtl">
      <TopBar type="seller" />

      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-black text-white tracking-tighter">منتجاتي</h1>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">إدارة المخزون والمبيعات</p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/seller/add-product')}
            className="w-14 h-14 rounded-2xl bg-neon-purple flex items-center justify-center text-white shadow-[0_0_25px_rgba(188,19,254,0.4)] transition-all"
          >
              <Plus className="w-8 h-8" />
          </motion.button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-3 mb-8">
          <div className="flex-1 glass-card p-3 rounded-2xl border-white/5 flex items-center gap-3 shadow-inner">
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="ابحث في منتجاتك..." 
                className="bg-transparent border-none outline-none text-xs font-bold text-white placeholder:text-gray-600 w-full"
              />
          </div>
          <button className="w-12 h-12 glass-card rounded-2xl border-white/5 flex items-center justify-center text-gray-500 hover:text-neon-purple transition-all">
              <Filter className="w-5 h-5" />
          </button>
      </div>

      {/* Product Grid/List */}
      <div className="space-y-4">
          {products.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 rounded-[2.5rem] border-white/5 flex gap-5 group hover:border-neon-purple/20 transition-all shadow-xl relative overflow-hidden"
              >
                  {/* Image Container */}
                  <div className="w-24 h-24 rounded-2xl bg-white/5 overflow-hidden border border-white/10 group-hover:border-neon-purple transition-colors relative z-10">
                      {!loadedImages[p.id] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2 className="w-5 h-5 text-neon-purple/30 animate-spin" />
                        </div>
                      )}
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        onLoad={() => handleImageLoad(p.id)}
                        className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${loadedImages[p.id] ? 'opacity-100' : 'opacity-0'}`} 
                      />
                      <div className="absolute top-1 right-1 bg-dark/60 backdrop-blur-md px-1.5 py-0.5 rounded-lg flex items-center gap-1 border border-white/10">
                        <Star className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                        <span className="text-[8px] font-black text-white">{p.rating}</span>
                      </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col justify-between py-1 relative z-10">
                      <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-black text-white text-sm group-hover:text-neon-purple transition-colors line-clamp-1">{p.name}</h3>
                            <div className={`px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${p.status === 'نشط' ? 'bg-neon-green/10 text-neon-green border-neon-green/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                                {p.status}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                              <div className="flex flex-col">
                                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">إجمالي المبيعات</span>
                                  <span className="text-xs font-black text-gray-300">{p.sales} قطعة</span>
                              </div>
                              <div className="w-px h-6 bg-white/5"></div>
                              <div className="flex flex-col">
                                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">السعر الحالي</span>
                                  <span className="text-xs font-black text-neon-purple">{p.price} <span className="text-[8px]">ر.س</span></span>
                              </div>
                          </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-3">
                          <button className="flex-1 py-2 glass rounded-xl border-white/5 text-[10px] font-black text-gray-400 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
                              <Edit2 className="w-3 h-3" />
                              تعديل
                          </button>
                          <button className="p-2 glass rounded-xl border-white/5 text-gray-500 hover:text-red-500 hover:border-red-500/30 transition-all active:scale-90">
                              <Trash2 className="w-4 h-4" />
                          </button>
                      </div>
                  </div>

                  {/* Decorative Background Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl group-hover:bg-neon-purple/10 transition-colors"></div>
              </motion.div>
          ))}
      </div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerProducts;
