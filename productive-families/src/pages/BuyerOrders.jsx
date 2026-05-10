import { motion } from 'framer-motion';
import { ChevronRight, Filter, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../layout/BottomNav';

const BuyerOrders = () => {
  const navigate = useNavigate();
  const orders = [
    { id: '12345', store: 'مطبخ سارة', status: 'قيد التجهيز', price: '60', items: 2, date: 'اليوم، 10:30 ص' },
    { id: '12340', store: 'سويت هوم', status: 'مكتمل', price: '85', items: 1, date: 'أمس، 08:15 م' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-20 px-6" dir="rtl">
        <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center justify-between border-b border-white/5">
            <h1 className="text-xl font-bold">طلباتي</h1>
            <button className="p-2 glass rounded-xl border-white/10 text-neon-blue"><Filter className="w-5 h-5" /></button>
        </div>

        <div className="space-y-4 mt-6">
            {orders.map((order) => (
                <div key={order.id} className="glass p-6 rounded-[2.5rem] border-white/5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">{order.store}</h3>
                                <p className="text-[10px] text-gray-500">طلب #{order.id} • {order.date}</p>
                            </div>
                        </div>
                        <span className={`text-[10px] px-3 py-1 rounded-full ${order.status === 'مكتمل' ? 'bg-neon-green/10 text-neon-green border border-neon-green/20' : 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20 animate-pulse'}`}>
                            {order.status}
                        </span>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                        <div>
                            <span className="text-xs text-gray-500">الإجمالي: </span>
                            <span className="font-bold text-white">{order.price} ر.س</span>
                        </div>
                        <button
                            onClick={() => navigate('/buyer/order-tracking')}
                            className="text-xs font-bold text-neon-blue hover:underline"
                        >
                            تتبع الطلب
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <BottomNav type="buyer" />
    </div>
  );
};

export default BuyerOrders;
