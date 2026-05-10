import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, MapPin, ChevronRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const OrderTracking = () => {
  const navigate = useNavigate();

  const steps = [
    { label: 'تم استلام الطلب', time: '12:30 م', status: 'completed' },
    { label: 'قيد التجهيز', time: '12:45 م', status: 'completed' },
    { label: 'مع المندوب', time: 'جاري الآن', status: 'active' },
    { label: 'تم التوصيل', time: '--:--', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="buyer" />

      <div className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate('/buyer/home')} className="p-2 glass rounded-lg border-white/10"><ChevronRight className="w-5 h-5 text-white" /></button>
          <h1 className="text-2xl font-black">تتبع الطلب</h1>
      </div>

      {/* Map View */}
      <div className="glass h-64 rounded-[2.5rem] border-white/5 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/46.67,24.71,13/400x400?access_token=pk.mock')] bg-cover opacity-60"></div>

          {/* Driver Marker */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/3"
          >
              <div className="bg-neon-blue p-2 rounded-xl shadow-lg shadow-neon-blue/50">
                  <Truck className="w-5 h-5 text-dark" />
              </div>
          </motion.div>

          {/* Destination Marker */}
          <div className="absolute bottom-1/4 right-1/4">
              <div className="bg-neon-pink p-2 rounded-xl shadow-lg shadow-neon-pink/50">
                  <MapPin className="w-5 h-5 text-dark" />
              </div>
          </div>
      </div>

      {/* Order Info */}
      <div className="glass p-6 rounded-[2.5rem] border-white/5 mb-8">
          <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <img src="https://via.placeholder.com/50" className="w-10 h-10 rounded-xl" alt="Driver" />
                  </div>
                  <div>
                      <h3 className="font-bold text-white text-sm">محمد السعدي</h3>
                      <p className="text-[10px] text-gray-500">مندوب التوصيل</p>
                  </div>
              </div>
              <button className="p-3 bg-neon-blue/10 rounded-2xl border border-neon-blue/20">
                  <Phone className="w-5 h-5 text-neon-blue" />
              </button>
          </div>

          <div className="space-y-8 relative pr-6">
              <div className="absolute top-2 bottom-2 right-1 w-0.5 bg-white/5"></div>
              {steps.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between">
                      <div className={`absolute -right-[23px] w-3 h-3 rounded-full border-2 border-dark z-10 ${step.status === 'completed' ? 'bg-neon-green border-neon-green/50 shadow-[0_0_8px_rgba(0,255,102,0.5)]' : step.status === 'active' ? 'bg-neon-blue border-neon-blue/50 shadow-[0_0_8px_rgba(0,243,255,0.5)] animate-pulse' : 'bg-gray-800 border-gray-700'}`}></div>
                      <span className={`text-sm font-bold ${step.status === 'pending' ? 'text-gray-600' : 'text-white'}`}>{step.label}</span>
                      <span className="text-[10px] text-gray-500 font-medium">{step.time}</span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default OrderTracking;
