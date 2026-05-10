import { motion } from 'framer-motion';
import { Package, ChevronRight, Plus, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerProducts = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'ورق عنب بالليمون', price: '45', sales: '120', status: 'نشط' },
    { id: 2, name: 'بخور دوسري ملكي', price: '120', sales: '45', status: 'نشط' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="seller" />

      <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black">منتجاتي</h1>
          <button
            onClick={() => navigate('/seller/add-product')}
            className="w-10 h-10 rounded-xl bg-neon-purple flex items-center justify-center text-white shadow-neon-purple/30 shadow-lg"
          >
              <Plus className="w-6 h-6" />
          </button>
      </div>

      <div className="space-y-4">
          {products.map((p) => (
              <div key={p.id} className="glass p-4 rounded-3xl border-white/5 flex gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${p.id}/100/100`} alt="" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                          <div className="flex justify-between">
                            <h3 className="font-bold text-white text-sm">{p.name}</h3>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">{p.status}</span>
                          </div>
                          <p className="text-[10px] text-gray-500 mt-1">المبيعات: {p.sales} قطعة</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <span className="font-black text-neon-purple">{p.price} ر.س</span>
                          <div className="flex gap-2">
                              <button className="p-2 glass rounded-lg border-white/10 text-gray-400 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                              <button className="p-2 glass rounded-lg border-white/10 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerProducts;
