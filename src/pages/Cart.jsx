import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, name: 'ورق عنب بالليمون', price: 45, qty: 1, family: 'مطبخ سارة' },
    { id: 2, name: 'بخور دوسري ملكي', price: 120, qty: 1, family: 'أطياب الشرقية' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-20 px-4" dir="rtl">
      <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold">سلة التسوق</h1>
        <div className="w-10"></div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <motion.div key={item.id} className="glass p-4 rounded-3xl flex gap-4 border-white/5">
            <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden">
               <img src="https://via.placeholder.com/100" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.family}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neon-blue font-bold">{item.price} ر.س</span>
                <div className="flex items-center gap-3 glass px-3 py-1 rounded-xl border-white/10">
                  <button className="text-neon-blue font-bold">+</button>
                  <span className="text-sm">{item.qty}</span>
                  <button className="text-red-500 font-bold">-</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="fixed bottom-28 left-4 right-4 z-40">
        <div className="glass p-6 rounded-3xl border-neon-blue/20 shadow-2xl space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">المجموع الفرعي</span>
            <span className="text-white">165 ر.س</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">رسوم التوصيل</span>
            <span className="text-neon-green">15 ر.س</span>
          </div>
          <div className="h-px bg-white/10 w-full"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold">الإجمالي</span>
            <span className="text-2xl font-black text-neon-blue">180 ر.س</span>
          </div>
          <button
            onClick={() => navigate('/buyer/checkout')}
            className="w-full py-4 rounded-2xl bg-neon-blue text-dark font-black text-lg shadow-neon-blue/30 shadow-lg active:scale-95 transition-all"
          >
            إتمام الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
