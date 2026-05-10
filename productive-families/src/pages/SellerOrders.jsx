import { motion } from 'framer-motion';
import { ClipboardList, ChevronRight, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerOrders = () => {
  const navigate = useNavigate();
  const orders = [
    { id: '12345', customer: 'فهد سليمان', status: 'جديد', price: '60', date: 'منذ 10 دقائق' },
    { id: '12344', customer: 'أمل أحمد', status: 'قيد التجهيز', price: '120', date: 'منذ ساعة' },
    { id: '12340', customer: 'خالد محمد', status: 'مكتمل', price: '45', date: 'أمس' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="seller" />
      <h1 className="text-2xl font-black mb-8">إدارة الطلبات</h1>

      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
          {['الكل', 'جديد', 'قيد التجهيز', 'مكتمل'].map((tab, i) => (
              <button key={i} className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-neon-purple text-white' : 'glass text-gray-500 border-white/5'}`}>
                  {tab}
              </button>
          ))}
      </div>

      <div className="space-y-4">
          {orders.map((order) => (
              <div key={order.id} className="glass p-6 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-4">
                      <div>
                          <h3 className="font-bold text-white text-sm">طلب #{order.id}</h3>
                          <p className="text-[10px] text-gray-500">{order.customer} • {order.date}</p>
                      </div>
                      <span className={`text-[10px] px-3 py-1 rounded-full ${order.status === 'مكتمل' ? 'bg-neon-green/10 text-neon-green' : 'bg-neon-purple/10 text-neon-purple'}`}>
                          {order.status}
                      </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <span className="font-black text-white">{order.price} ر.س</span>
                      <div className="flex gap-2">
                          <button className="p-2 glass rounded-lg border-white/10 text-neon-green"><CheckCircle className="w-4 h-4" /></button>
                          <button className="p-2 glass rounded-lg border-white/10 text-red-500"><XCircle className="w-4 h-4" /></button>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerOrders;
