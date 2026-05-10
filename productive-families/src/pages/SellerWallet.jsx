import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock, DollarSign } from 'lucide-react';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerWallet = () => {
  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="seller" />

      <h1 className="text-2xl font-black mb-8 text-white">المحفظة المالية</h1>

      {/* Balance Card */}
      <div className="glass p-8 rounded-[2.5rem] border-neon-purple/20 bg-neon-purple/5 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-neon-purple/10 blur-[50px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 text-center">
              <p className="text-gray-400 text-sm mb-2">الرصيد المتاح</p>
              <h2 className="text-4xl font-black text-white mb-6">1,850.50 <span className="text-sm text-neon-purple">ر.س</span></h2>
              <button className="w-full py-4 rounded-2xl bg-white text-dark font-black hover:shadow-xl transition-all active:scale-95">
                  طلب سحب رصيد
              </button>
          </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass p-4 rounded-3xl border-white/5">
              <span className="text-[10px] text-gray-500 block mb-1">الرصيد المعلق</span>
              <span className="font-bold text-white">420.00 ر.س</span>
          </div>
          <div className="glass p-4 rounded-3xl border-white/5">
              <span className="text-[10px] text-gray-500 block mb-1">إجمالي الأرباح</span>
              <span className="font-bold text-neon-green">12,450 ر.س</span>
          </div>
      </div>

      {/* Transactions */}
      <section>
          <h3 className="text-lg font-bold mb-4">آخر العمليات</h3>
          <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                  <div key={i} className="glass p-4 rounded-3xl border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${i === 2 ? 'bg-red-500/10 text-red-500' : 'bg-neon-green/10 text-neon-green'}`}>
                              {i === 2 ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-sm">{i === 2 ? 'سحب رصيد' : 'مبيعات طلب #1234'}</h4>
                              <p className="text-[10px] text-gray-500">12 مايو 2024</p>
                          </div>
                      </div>
                      <span className={`font-bold ${i === 2 ? 'text-white' : 'text-neon-green'}`}>
                          {i === 2 ? '-500' : '+85'} ر.س
                      </span>
                  </div>
              ))}
          </div>
      </section>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerWallet;
