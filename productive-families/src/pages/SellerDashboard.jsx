import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, CheckCircle, Clock, Wallet, Plus, Sparkles } from 'lucide-react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'إجمالي المبيعات', value: '4,250 ر.س', icon: <TrendingUp />, color: 'text-neon-green' },
    { label: 'طلبات اليوم', value: '12', icon: <ShoppingBag />, color: 'text-neon-blue' },
    { label: 'رصيد متاح', value: '1,800 ر.س', icon: <Wallet />, color: 'text-neon-purple' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-4" dir="rtl">
      <TopBar type="seller" />

      <header className="mb-8 text-right">
        <h1 className="text-3xl font-black text-white">مرحباً، مطبخ سارة 👨‍🍳</h1>
        <p className="text-gray-400 text-sm">إليك ملخص أداء متجرك اليوم</p>
      </header>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => navigate('/seller/add-product')}
            className="glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center gap-3 active:scale-95 transition-all"
          >
              <div className="w-12 h-12 rounded-2xl bg-neon-purple/20 flex items-center justify-center border border-neon-purple/40">
                  <Plus className="w-6 h-6 text-neon-purple" />
              </div>
              <span className="text-xs font-bold text-white">إضافة منتج</span>
          </button>
          <button
            onClick={() => navigate('/seller/ai-assistant')}
            className="glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center gap-3 active:scale-95 transition-all"
          >
              <div className="w-12 h-12 rounded-2xl bg-neon-blue/20 flex items-center justify-center border border-neon-blue/40">
                  <Sparkles className="w-6 h-6 text-neon-blue" />
              </div>
              <span className="text-xs font-bold text-white">المساعد الذكي</span>
          </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-white">{stat.value}</h3>
            </div>
            <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">آخر الطلبات</h2>
          <button className="text-neon-blue text-xs">عرض الكل</button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((order) => (
            <div key={order} className="glass p-4 rounded-3xl border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">طلب #1234{order}</h4>
                  <p className="text-xs text-gray-500">منذ 10 دقائق • 3 قطع</p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">85 ر.س</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30">جديد</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerDashboard;
