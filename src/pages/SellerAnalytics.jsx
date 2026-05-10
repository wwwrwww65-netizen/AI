import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowLeft, Calendar, BarChart3, PieChart, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerAnalytics = () => {
  const navigate = useNavigate();

  const mainStats = [
    { label: 'إجمالي الأرباح', value: '١٢,٤٥٠ ر.س', icon: <DollarSign className="w-5 h-5" />, color: 'text-neon-green', trend: '+١٥٪' },
    { label: 'عدد الطلبات', value: '١٥٨', icon: <ShoppingBag className="w-5 h-5" />, color: 'text-neon-blue', trend: '+٨٪' },
    { label: 'الزوار الفريدون', value: '١,٢٤٠', icon: <Users className="w-5 h-5" />, color: 'text-neon-purple', trend: '+٢٢٪' },
  ];

  const topProducts = [
    { name: 'ورق عنب حامض', sales: '٤٥', growth: 85 },
    { name: 'كبة مقلية', sales: '٣٢', growth: 65 },
    { name: 'كبسة دجاج', sales: '٢٨', growth: 45 },
  ];

  return (
    <div className="min-h-screen bg-dark pb-36 pt-28 px-6 selection:bg-neon-blue selection:text-white" dir="rtl">
      <TopBar type="seller" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-black text-white tracking-tighter">التحليلات</h1>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">نظرة شاملة على أداء متجرك</p>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </motion.div>

      {/* Date Range Selector */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['اليوم', 'أسبوع', 'شهر', 'سنة'].map((range, i) => (
          <button 
            key={i}
            className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
              i === 1 ? 'bg-neon-blue text-dark' : 'glass border-white/5 text-gray-400'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {mainStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-[2rem] border-white/5 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{stat.label}</p>
                  <h3 className="text-2xl font-black text-white mt-0.5">{stat.value}</h3>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-neon-green bg-neon-green/10 px-2 py-1 rounded-lg">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </div>
            </div>
            {/* Simple Sparkline Mockup */}
            <div className="mt-4 h-12 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (idx * 0.05), duration: 0.8 }}
                  className={`flex-1 rounded-t-sm ${i === 0 ? 'bg-neon-green' : i === 1 ? 'bg-neon-blue' : 'bg-neon-purple'} opacity-40`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sales Chart Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-6 rounded-[2.5rem] border-white/5 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-neon-blue" />
            <h3 className="font-black text-white">منحنى المبيعات</h3>
          </div>
          <BarChart3 className="w-5 h-5 text-gray-500" />
        </div>
        
        <div className="h-48 flex items-end justify-between gap-2 px-2 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
            </div>
            
            {[65, 45, 75, 55, 85, 40, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 z-10">
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="w-full max-w-[20px] bg-gradient-to-t from-neon-blue/20 to-neon-blue rounded-t-lg relative group"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-dark text-[8px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {h * 10} ر.س
                        </div>
                    </motion.div>
                    <span className="text-[8px] font-bold text-gray-500">
                        {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'][i]}
                    </span>
                </div>
            ))}
        </div>
      </motion.div>

      {/* Top Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-[2.5rem] border-white/5"
      >
        <div className="flex items-center gap-3 mb-6">
          <PieChart className="w-5 h-5 text-neon-purple" />
          <h3 className="font-black text-white">المنتجات الأكثر مبيعاً</h3>
        </div>
        
        <div className="space-y-6">
          {topProducts.map((product, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-black text-white">{product.name}</span>
                <span className="text-gray-500 font-bold">{product.sales} طلب</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${product.growth}%` }}
                  transition={{ delay: 0.8 + (i * 0.2), duration: 1 }}
                  className={`h-full rounded-full ${i === 0 ? 'bg-neon-purple' : i === 1 ? 'bg-neon-blue' : 'bg-neon-green'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerAnalytics;
