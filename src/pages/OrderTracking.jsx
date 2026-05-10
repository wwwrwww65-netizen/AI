import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, MapPin, ChevronRight, Phone, MessageSquare, Clock, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const OrderTracking = () => {
  const navigate = useNavigate();

  const steps = [
    { label: 'تم استلام الطلب', time: '١٢:٣٠ م', status: 'completed', desc: 'تم تأكيد الطلب من قبل المتجر' },
    { label: 'قيد التجهيز', time: '١٢:٤٥ م', status: 'completed', desc: 'مطبخ سارة يجهز طلبك الآن' },
    { label: 'مع المندوب', time: 'جاري الآن', status: 'active', desc: 'المندوب في طريقه إليك' },
    { label: 'تم التوصيل', time: '--:--', status: 'pending', desc: 'استمتع بوجبتك الشهية' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-40 pt-28 px-6 selection:bg-neon-blue selection:text-dark" dir="rtl">
      <TopBar type="buyer" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/buyer/home')} 
            className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter leading-none">تتبع الطلب</h1>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">رقم الطلب: #١٢٣٤٥٦</p>
          </div>
      </div>

      {/* Premium Map View */}
      <div className="glass-card h-72 rounded-[3rem] border-white/5 mb-10 relative overflow-hidden shadow-2xl">
          {/* Mock Map Texture */}
          <div className="absolute inset-0 bg-[#0a0a0b]">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 rotate-12"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -rotate-12"></div>
          </div>

          {/* Destination Pulsing */}
          <div className="absolute bottom-1/4 right-1/4">
              <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center animate-ping opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-neon-pink rounded-xl shadow-[0_0_20px_#ff0080] border-4 border-dark flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
              </div>
          </div>

          {/* Delivery Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path
                d="M 100 150 Q 200 100 300 200"
                fill="transparent"
                stroke="#00f3ff"
                strokeWidth="2"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>

          {/* Driver Marker */}
          <motion.div
            animate={{ 
                x: [0, 50, 0], 
                y: [0, -20, 0] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4"
          >
              <div className="relative group">
                <div className="absolute -inset-2 bg-neon-blue rounded-full blur opacity-40 animate-pulse"></div>
                <div className="relative bg-neon-blue p-3 rounded-2xl shadow-2xl border-4 border-dark">
                    <Truck className="w-6 h-6 text-dark" />
                </div>
              </div>
          </motion.div>

          <div className="absolute top-6 left-6 glass px-4 py-2 rounded-xl border-white/10 flex items-center gap-2">
            <Clock className="w-4 h-4 text-neon-blue" />
            <span className="text-[10px] font-black text-white">تصلك خلال ١٥ دقيقة</span>
          </div>
      </div>

      {/* Status Timeline Card */}
      <div className="glass-card p-8 rounded-[3.5rem] border-white/5 mb-8 shadow-2xl relative overflow-hidden">
          {/* Driver Quick Profile */}
          <div className="flex justify-between items-center mb-10 pb-8 border-b border-white/5">
              <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-[1.8rem] glass border-2 border-white/10 p-1">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover rounded-[1.5rem]" alt="Driver" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neon-green rounded-lg flex items-center justify-center border-2 border-dark shadow-lg">
                        <Star className="w-3 h-3 text-dark fill-dark" />
                    </div>
                  </div>
                  <div>
                      <h3 className="text-lg font-black text-white leading-tight">فارس الحربي</h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">كابتن التوصيل • ٤.٩ ★</p>
                  </div>
              </div>
              <div className="flex gap-3">
                  <button className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:border-neon-blue transition-all active:scale-90">
                      <MessageSquare className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue border border-neon-blue/20 hover:bg-neon-blue hover:text-dark transition-all active:scale-90 shadow-lg shadow-neon-blue/10">
                      <Phone className="w-5 h-5" />
                  </button>
              </div>
          </div>

          {/* Vertical Timeline */}
          <div className="space-y-10 relative pr-6">
              <div className="absolute top-2 bottom-2 right-[7px] w-0.5 bg-gradient-to-b from-neon-green via-neon-blue to-white/5"></div>
              {steps.map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex items-start justify-between group"
                  >
                      {/* Node Indicator */}
                      <div className={`absolute -right-[23px] w-4 h-4 rounded-full border-4 border-dark z-10 transition-all duration-500
                        ${step.status === 'completed' ? 'bg-neon-green shadow-[0_0_15px_#00ff66]' : 
                          step.status === 'active' ? 'bg-neon-blue shadow-[0_0_15px_#00f3ff] animate-pulse' : 
                          'bg-gray-800'}`}
                      ></div>
                      
                      <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-black transition-colors ${step.status === 'pending' ? 'text-gray-600' : 'text-white group-hover:text-neon-blue'}`}>{step.label}</span>
                            {step.status === 'active' && (
                                <span className="bg-neon-blue/10 text-neon-blue text-[8px] font-black px-2 py-0.5 rounded-full border border-neon-blue/20">جاري الآن</span>
                            )}
                          </div>
                          <p className={`text-[10px] mt-1 font-bold ${step.status === 'pending' ? 'text-gray-700' : 'text-gray-500'}`}>{step.desc}</p>
                      </div>
                      <span className="text-[10px] text-gray-500 font-black tracking-tighter">{step.time}</span>
                  </motion.div>
              ))}
          </div>
      </div>

      {/* Safety & Support */}
      <div className="flex items-center gap-4 bg-neon-blue/5 p-5 rounded-[2.5rem] border border-neon-blue/10">
          <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center shadow-inner">
            <ShieldCheck className="w-6 h-6 text-neon-blue" />
          </div>
          <div>
              <h4 className="text-[11px] font-black text-white uppercase tracking-widest">التوصيل الآمن مفعل</h4>
              <p className="text-[9px] text-gray-500 mt-1">يتبع الكابتن أعلى معايير النظافة والتسليم بدون تلامس.</p>
          </div>
      </div>
    </div>
  );
};

export default OrderTracking;
