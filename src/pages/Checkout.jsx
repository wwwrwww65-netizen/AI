import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, MapPin, Truck, ShieldCheck, CreditCard, Apple, Wallet, Sparkles, ReceiptText, User, Phone, StickyNote, ArrowLeft, Clock, Tag, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-64 pt-24 px-6 selection:bg-neon-blue selection:text-dark" dir="rtl">
      <TopBar type="buyer" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-10"
      >
          <button 
            onClick={() => navigate(-1)} 
            className="p-3 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-3xl font-black text-white tracking-tighter">إتمام الطلب</h1>
      </motion.div>

      <div className="space-y-8">
          {/* 1. Personal Information */}
          <div className="glass-card p-8 rounded-[3rem] border-white/5 shadow-2xl space-y-6">
              <h3 className="font-black text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-neon-blue" />
                  المعلومات الشخصية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input type="text" placeholder="الاسم الكامل" className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-4 pr-12 text-sm font-bold text-white outline-none focus:border-neon-blue/50 transition-all" />
                  </div>
                  <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input type="tel" placeholder="رقم الجوال" className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-4 pr-12 text-sm font-bold text-white outline-none focus:border-neon-blue/50 transition-all text-left" dir="ltr" />
                  </div>
              </div>
          </div>

          {/* 2. Delivery & Time */}
          <div className="glass-card p-8 rounded-[3rem] border-white/5 relative overflow-hidden group shadow-2xl">
              <h3 className="font-black text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <MapPin className="w-4 h-4 text-neon-blue" />
                  تفاصيل التوصيل والوقت
              </h3>
              
              <div className="h-40 glass rounded-[2rem] border border-white/10 overflow-hidden relative mb-6 shadow-inner group-hover:border-neon-blue/30 transition-all duration-700">
                  <div className="absolute inset-0 bg-[#070708] opacity-50">
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 bg-neon-blue rounded-full shadow-[0_0_20px_rgba(0,243,255,0.8)] border-4 border-dark animate-pulse"></div>
                  </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                    <StickyNote className="absolute right-4 top-4 w-4 h-4 text-gray-600" />
                    <textarea placeholder="وصف العنوان (رقم الشقة، الدور...)" className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-4 pr-12 text-sm font-bold text-white outline-none focus:border-neon-blue/50 transition-all resize-none h-20"></textarea>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest px-2 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        وقت التوصيل المفضل
                    </label>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {['الآن (خلال ٤٥ د)', 'اليوم (٧-٩ مساءً)', 'غداً صباحاً'].map((time, i) => (
                            <button key={i} className={`whitespace-nowrap px-6 py-3 rounded-xl border-2 font-black text-[10px] transition-all
                                ${i === 0 ? 'bg-neon-blue/10 border-neon-blue text-white shadow-lg shadow-neon-blue/10' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/10'}`}>
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
              </div>
          </div>

          {/* 3. Promo Code & Extras */}
          <div className="glass-card p-8 rounded-[3rem] border-white/5 shadow-2xl">
              <h3 className="font-black text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <Tag className="w-4 h-4 text-neon-purple" />
                  العروض والإضافات
              </h3>
              <div className="space-y-4">
                  <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Tag className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input type="text" placeholder="كود الخصم" className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-4 pr-12 text-sm font-bold text-white outline-none focus:border-neon-purple/50 transition-all" />
                      </div>
                      <button className="px-8 bg-white/10 text-white rounded-2xl font-black text-xs hover:bg-white/20 transition-all">تطبيق</button>
                  </div>
                  <button className="w-full p-4 glass-card border-white/5 rounded-2xl flex items-center justify-between group hover:border-neon-pink/30 transition-all">
                      <div className="flex items-center gap-3">
                        <Gift className="w-5 h-5 text-neon-pink" />
                        <span className="text-sm font-black text-white">إرسال كهدية؟</span>
                      </div>
                      <div className="w-10 h-6 bg-white/5 rounded-full relative">
                          <div className="absolute left-1 top-1 w-4 h-4 bg-gray-600 rounded-full"></div>
                      </div>
                  </button>
              </div>
          </div>

          {/* 4. Payment Methods */}
          <div className="glass-card p-8 rounded-[3rem] border-white/5 shadow-2xl">
              <h3 className="font-black text-[10px] text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-neon-blue" />
                  وسيلة الدفع
              </h3>
              <div className="grid grid-cols-1 gap-3">
                  {['Apple Pay', 'مدى / فيزا', 'الدفع عند الاستلام'].map((method, i) => (
                      <button key={i} className={`p-5 rounded-2xl border-2 flex items-center justify-between transition-all group
                        ${i === 0 ? 'bg-neon-blue/5 border-neon-blue/50' : 'bg-white/5 border-white/5'}`}>
                          <span className="text-sm font-black text-white">{method}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-neon-blue' : 'border-gray-800'}`}>
                              {i === 0 && <div className="w-2.5 h-2.5 bg-neon-blue rounded-full"></div>}
                          </div>
                      </button>
                  ))}
              </div>
          </div>

          {/* 5. Summary & Payment */}
          <div className="glass-card p-8 rounded-[3.5rem] border-neon-blue/20 shadow-2xl">
              <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-[11px] font-black uppercase">
                    <span className="text-gray-500">المجموع</span>
                    <span className="text-white">١٢٥ ر.س</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-black uppercase">
                    <span className="text-gray-500">التوصيل</span>
                    <span className="text-neon-green">مجاني</span>
                  </div>
                  <div className="h-px bg-white/10 w-full"></div>
                  <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-500 uppercase">الإجمالي</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">١٢٥</span>
                            <span className="text-sm font-black text-neon-blue uppercase">ر.س</span>
                        </div>
                      </div>
                      <div className="text-[9px] font-bold text-gray-500 bg-white/5 px-4 py-2 rounded-xl flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-neon-blue" />
                        دفع آمن
                      </div>
                  </div>
              </div>
              <button onClick={() => navigate('/buyer/order-tracking')} className="w-full bg-neon-blue text-dark py-6 rounded-[2rem] font-black shadow-2xl shadow-neon-blue/20 btn-premium text-lg">
                  تأكيد ودفع الطلب
              </button>
          </div>
      </div>
    </div>
  );
};

export default Checkout;
