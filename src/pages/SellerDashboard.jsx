import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, CheckCircle, Clock, Wallet, Plus, Sparkles, ArrowUpRight, MessageCircle, BarChart3, Bell, ArrowLeft, UserCircle, RefreshCw } from 'lucide-react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'إجمالي المبيعات', value: '٤,٢٥٠ ر.س', icon: <TrendingUp className="w-5 h-5" />, color: 'text-neon-green', growth: '+١٢٪', trend: 'up' },
    { label: 'طلبات اليوم', value: '١٢', icon: <ShoppingBag className="w-5 h-5" />, color: 'text-neon-blue', growth: '+٥', trend: 'up' },
    { label: 'رصيد متاح', value: '١,٨٠٠ ر.س', icon: <Wallet className="w-5 h-5" />, color: 'text-neon-purple', growth: '', trend: '' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-36 pt-28 px-6 selection:bg-neon-purple selection:text-white" dir="rtl">
      <TopBar type="seller" />

      {/* Mode Switcher (Back to Buyer) */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => navigate('/buyer/home')}
        className="w-full glass-card p-4 rounded-2xl border-neon-blue/20 bg-neon-blue/5 flex items-center justify-between mb-8 group"
      >
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                <UserCircle className="w-6 h-6 text-neon-blue" />
            </div>
            <span className="text-xs font-black text-white">العودة لوضع المشتري</span>
        </div>
        <RefreshCw className="w-4 h-4 text-neon-blue group-hover:rotate-180 transition-transform duration-500" />
      </motion.button>

      {/* Welcome Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 relative"
      >
        <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-2xl">👨‍🍳</div>
            <div>
                <h1 className="text-3xl font-black text-white tracking-tighter">مرحباً، مطبخ سارة</h1>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">المتجر نشط الآن</p>
                </div>
            </div>
        </div>
      </motion.header>

      {/* Quick Actions Bento Grid */}
      <div className="grid grid-cols-2 gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/seller/add-product')}
            className="glass-card p-6 rounded-[2.5rem] border-white/5 flex flex-col items-center justify-center gap-4 group transition-all"
          >
              <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/30 group-hover:bg-neon-purple/20 transition-all">
                  <Plus className="w-7 h-7 text-neon-purple group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-center">
                <span className="block text-xs font-black text-white">إضافة منتج</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase mt-1">منتج جديد</span>
              </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/seller/analytics')}
            className="glass-card p-6 rounded-[2.5rem] border-white/5 flex flex-col items-center justify-center gap-4 group transition-all"
          >
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30 group-hover:bg-neon-blue/20 transition-all">
                  <BarChart3 className="w-7 h-7 text-neon-blue group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-center">
                <span className="block text-xs font-black text-white">التحليلات</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase mt-1">أداء المتجر</span>
              </div>
          </motion.button>
      </div>

      {/* Main Stats */}
      <div className="space-y-4 mb-10">
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] px-2 mb-2">نظرة عامة على الأداء</h3>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center justify-between group hover:border-white/10 transition-all relative overflow-hidden"
          >
            <div className="flex items-center gap-5 relative z-10">
                <div className={`w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center ${stat.color} shadow-inner group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                </div>
                <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5">{stat.label}</p>
                    <h3 className="text-2xl font-black text-white tracking-tight">{stat.value}</h3>
                </div>
            </div>
            {stat.growth && (
                <div className="flex items-center gap-1.5 bg-neon-green/10 px-3 py-1.5 rounded-xl border border-neon-green/20 relative z-10">
                    <ArrowUpRight className="w-3 h-3 text-neon-green" />
                    <span className="text-[10px] font-black text-neon-green">{stat.growth}</span>
                </div>
            )}
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-purple/5 transition-colors"></div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-lg font-black text-white tracking-tight">آخر الطلبات</h2>
          <button 
            onClick={() => navigate('/seller/orders')}
            className="text-[10px] font-black text-neon-blue uppercase tracking-widest hover:scale-105 transition-transform"
          >
            عرض الكل
          </button>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((order, i) => (
            <motion.div 
                key={order} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="glass-card p-4 rounded-[1.8rem] border-white/5 flex items-center justify-between group cursor-pointer hover:border-neon-blue/20 transition-all shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neon-blue border border-white/10 group-hover:border-neon-blue/30 transition-all">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm">طلب #١٢٣٤{order}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">منذ ١٠ دقائق</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">٣ منتجات</span>
                  </div>
                </div>
              </div>
              <div className="text-left flex flex-col items-end gap-1.5">
                <p className="text-sm font-black text-white tracking-tight">٨٥ <span className="text-[10px] text-neon-blue">ر.س</span></p>
                <div className="flex items-center gap-1.5 bg-neon-blue/10 px-3 py-1 rounded-full text-neon-blue border border-neon-blue/20">
                    <span className="w-1 h-1 bg-neon-blue rounded-full animate-pulse shadow-[0_0_5px_currentColor]"></span>
                    <span className="text-[8px] font-black uppercase tracking-widest">قيد التجهيز</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Assistant Floating Suggestion */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 glass-card p-5 rounded-[2rem] border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 to-transparent flex items-center gap-4 relative overflow-hidden group cursor-pointer"
      >
          <div className="w-12 h-12 rounded-2xl bg-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.4)]">
            <Sparkles className="w-6 h-6 text-dark" />
          </div>
          <div className="flex-1">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">تلميحات الذكاء الاصطناعي</h4>
            <p className="text-[10px] text-gray-400 mt-0.5">منتج "ورق العنب" هو الأكثر طلباً اليوم، هل تريد زيادة الكمية؟</p>
          </div>
          <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-neon-blue group-hover:-translate-x-1 transition-all" />
      </motion.div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerDashboard;
