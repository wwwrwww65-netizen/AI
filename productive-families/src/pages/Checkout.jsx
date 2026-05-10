import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, MapPin, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="buyer" />

      <div className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate(-1)} className="p-2 glass rounded-lg border-white/10"><ChevronRight className="w-5 h-5 text-white" /></button>
          <h1 className="text-2xl font-black">إتمام الطلب</h1>
      </div>

      <div className="space-y-6">
          {/* Delivery Location */}
          <div className="glass p-6 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-sm text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neon-blue" />
                      موقع التوصيل
                  </h3>
                  <button className="text-[10px] text-neon-blue font-bold">تغيير</button>
              </div>
              <div className="h-32 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
                  {/* Mock Map Background */}
                  <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/46.67,24.71,12/400x200?access_token=pk.mock')] bg-cover opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center animate-ping">
                          <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                      </div>
                  </div>
              </div>
              <p className="mt-4 text-xs text-white font-medium">حي الملقا، شارع الأمير محمد بن سعد، الرياض</p>
          </div>

          {/* Payment Method */}
          <div className="glass p-6 rounded-[2.5rem] border-white/5">
              <h3 className="font-bold text-sm text-gray-400 mb-6 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-neon-purple" />
                  طريقة الدفع
              </h3>
              <div className="space-y-3">
                  {['مدى / فيزا', 'Apple Pay', 'الدفع عند الاستلام'].map((method, i) => (
                      <button key={i} className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${i === 0 ? 'bg-neon-purple/10 border-neon-purple/50' : 'bg-white/5 border-white/10'}`}>
                          <span className="text-sm font-bold text-white">{method}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-neon-purple' : 'border-gray-700'}`}>
                              {i === 0 && <div className="w-2.5 h-2.5 bg-neon-purple rounded-full"></div>}
                          </div>
                      </button>
                  ))}
              </div>
          </div>

          {/* Order Summary */}
          <div className="glass p-6 rounded-[2.5rem] border-white/5">
              <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs text-gray-500">
                      <span>مجموع المنتجات</span>
                      <span>125 ر.س</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                      <span>رسوم التوصيل</span>
                      <span>15 ر.س</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-white pt-3 border-t border-white/5">
                      <span>الإجمالي</span>
                      <span className="text-neon-green text-lg">140 ر.س</span>
                  </div>
              </div>
              <button
                onClick={() => navigate('/buyer/order-tracking')}
                className="w-full bg-neon-green py-5 rounded-2xl font-black shadow-lg shadow-neon-green/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
              >
                  تأكيد ودفع
                  <ShoppingBag className="w-5 h-5" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default Checkout;
