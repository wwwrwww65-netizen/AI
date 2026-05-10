import { motion } from 'framer-motion';
import { MapPin, Phone, User, Package, ChevronRight, Check, X, Navigation } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const SellerOrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = {
    id: id || '12345',
    customer: 'فهد سليمان',
    phone: '0501234567',
    address: 'حي الملقا، شارع الأمير محمد بن سعد',
    items: [
      { name: 'ورق عنب (كبير)', price: '45', qty: 1 },
      { name: 'كبة مقلية', price: '20', qty: 2 },
    ],
    total: '85',
    status: 'جديد',
  };

  return (
    <div className="min-h-screen bg-dark pb-10 pt-24 px-6" dir="rtl">
      <TopBar type="seller" />

      <div className="flex items-center gap-2 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 glass rounded-lg border-white/10"><ChevronRight className="w-5 h-5 text-white" /></button>
          <h1 className="text-xl font-black">تفاصيل الطلب #{order.id}</h1>
      </div>

      <div className="space-y-6">
          {/* Customer Card */}
          <div className="glass p-6 rounded-[2.5rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30 text-neon-blue font-black text-xl">ف</div>
                  <div>
                      <h3 className="font-black text-white">{order.customer}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <Phone className="w-3 h-3" />
                          <span>{order.phone}</span>
                      </div>
                  </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-neon-purple" />
                      <span className="text-xs text-gray-300 leading-tight">{order.address}</span>
                  </div>
                  <button className="bg-neon-purple/20 p-2 rounded-xl border border-neon-purple/30">
                      <Navigation className="w-5 h-5 text-neon-purple" />
                  </button>
              </div>
          </div>

          {/* Items Card */}
          <div className="glass p-6 rounded-[2.5rem] border-white/5">
              <h3 className="font-bold text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-neon-green" />
                  المنتجات المطلوبة
              </h3>
              <div className="space-y-4">
                  {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                          <div>
                              <p className="font-bold text-white text-sm">{item.name}</p>
                              <p className="text-[10px] text-gray-500">الكمية: {item.qty}</p>
                          </div>
                          <span className="font-black text-white text-sm">{item.price} ر.س</span>
                      </div>
                  ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="font-bold text-gray-400">الإجمالي</span>
                  <span className="text-xl font-black text-neon-green">{order.total} ر.س</span>
              </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
              <button className="flex-1 bg-neon-green py-5 rounded-2xl font-black shadow-lg shadow-neon-green/20 flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <Check className="w-6 h-6" />
                  قبول الطلب
              </button>
              <button className="flex-1 bg-red-500/10 border border-red-500/30 text-red-500 py-5 rounded-2xl font-black flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <X className="w-6 h-6" />
                  رفض
              </button>
          </div>
      </div>
    </div>
  );
};

export default SellerOrderDetails;
