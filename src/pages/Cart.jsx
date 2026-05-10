import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, Sparkles, MapPin, ReceiptText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'ورق عنب بالليمون حامض', price: 45, qty: 1, family: 'مطبخ سارة', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'بخور دوسري ملكي فاخر', price: 120, qty: 1, family: 'أطياب الشرقية', image: 'https://images.unsplash.com/photo-1595943529924-c5012fbd7933?auto=format&fit=crop&q=80&w=200' },
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ).filter(item => item.qty > 0));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-dark pb-64 pt-28 px-6 selection:bg-neon-blue selection:text-dark" dir="rtl">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 glass-card z-50 p-5 flex items-center justify-between border-b border-white/5 shadow-2xl">
        <button 
            onClick={() => navigate(-1)} 
            className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-black text-white">سلة التسوق</h1>
            <div className="flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-neon-blue" />
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{items.length} منتجات في السلة</span>
            </div>
        </div>
        <button 
            onClick={clearCart}
            className="p-3 glass rounded-2xl border-white/10 hover:border-red-500/50 transition-all active:scale-90"
        >
            <Trash2 className="w-5 h-5 text-red-500" />
        </button>
      </div>

      <div className="space-y-4">
        {items.length > 0 ? (
          <>
            {/* Active Promotion */}
            <div className="glass-card p-4 rounded-3xl border-neon-blue/20 bg-neon-blue/5 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
                <p className="text-[10px] font-bold text-gray-300">
                    {subtotal < 200 
                        ? `لديك توصيل مجاني عند إضافة منتجات بقيمة ${200 - subtotal} ر.س إضافية!` 
                        : 'تهانينا! لقد حصلت على توصيل مجاني.'}
                </p>
            </div>

            <AnimatePresence>
                {items.map((item, i) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 50 }}
                    className="glass-card p-4 rounded-[2.5rem] flex gap-4 border-white/5 shadow-xl group relative overflow-hidden"
                >
                    <div className="w-24 h-24 rounded-2xl bg-white/5 overflow-hidden border border-white/10 group-hover:border-neon-blue transition-colors z-10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1 z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-sm font-black text-white line-clamp-1 group-hover:text-neon-blue transition-colors">{item.name}</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[8px] font-black bg-white/5 px-2 py-0.5 rounded-full text-gray-500 uppercase">{item.family}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => removeItem(item.id)}
                            className="p-2 glass rounded-xl border-white/5 text-gray-600 hover:text-red-500 transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">السعر</span>
                            <span className="text-lg font-black text-white">{item.price} <span className="text-[10px] text-neon-blue">ر.س</span></span>
                        </div>
                        <div className="flex items-center gap-4 glass px-3.5 py-2 rounded-2xl border-white/10 shadow-inner">
                        <button onClick={() => updateQty(item.id, 1)} className="text-neon-blue hover:scale-125 transition-transform active:scale-90"><Plus className="w-4 h-4" /></button>
                        <span className="text-sm font-black text-white w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, -1)} className="text-gray-500 hover:text-red-500 hover:scale-125 transition-transform active:scale-90"><Minus className="w-4 h-4" /></button>
                        </div>
                    </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl group-hover:bg-neon-blue/10 transition-colors"></div>
                </motion.div>
                ))}
            </AnimatePresence>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <ShoppingBag className="w-10 h-10 text-gray-600" />
            </div>
            <h2 className="text-xl font-black text-white">السلة فارغة حالياً</h2>
            <p className="text-xs text-gray-500 mt-2 max-w-[200px]">ابدأ بالتسوق وأضف منتجاتك المفضلة من الأسر المنتجة</p>
          </motion.div>
        )}
      </div>

      {/* Suggestion */}
      <div className="mt-8 flex justify-center">
          <button 
            onClick={() => navigate('/buyer/home')}
            className="text-[10px] font-black text-gray-500 hover:text-white transition-colors flex items-center gap-2"
          >
              <Plus className="w-3 h-3" />
              أضف المزيد من المنتجات للسلة
          </button>
      </div>

      {/* Checkout Summary */}
      <AnimatePresence>
        {items.length > 0 && (
            <div className="fixed bottom-28 left-6 right-6 z-40">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="glass-card p-8 rounded-[3.5rem] border-neon-blue/20 shadow-[0_30px_70px_rgba(0,0,0,0.7)] space-y-6"
                >
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <ReceiptText className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-500">المجموع الفرعي</span>
                        </div>
                        <span className="text-white tracking-normal">{subtotal} ر.س</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-500">رسوم التوصيل</span>
                        </div>
                        <span className="text-neon-green tracking-normal">{shipping} ر.س</span>
                    </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">الإجمالي النهائي</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{total}</span>
                            <span className="text-sm font-black text-neon-blue uppercase">ر.س</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/buyer/checkout')}
                        className="bg-neon-blue text-dark px-12 py-5 rounded-[2rem] font-black text-sm btn-premium shadow-[0_10px_30px_rgba(0,243,255,0.3)] hover:shadow-neon-blue/40"
                    >
                        إتمام الطلب
                    </button>
                </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
