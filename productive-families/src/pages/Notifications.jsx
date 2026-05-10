import { motion } from 'framer-motion';
import { Bell, Package, Tag, MessageCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const Notifications = () => {
  const navigate = useNavigate();
  const notifications = [
    { id: 1, title: 'تم قبول طلبك!', body: 'بدأ مطبخ أم نورة بتجهيز طلبك رقم #12345', time: 'منذ دقيقتين', icon: <Package className="text-neon-blue" />, type: 'order' },
    { id: 2, title: 'رسالة جديدة', body: 'وصلتك رسالة جديدة من البائع بخصوص التوصيل', time: 'منذ ساعة', icon: <MessageCircle className="text-neon-purple" />, type: 'chat' },
    { id: 3, title: 'خصم خاص لك', body: 'استخدم كود NEON للحصول على خصم 20% على طلبك القادم', time: 'أمس', icon: <Tag className="text-neon-green" />, type: 'promo' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="buyer" />

      <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black">الإشعارات</h1>
          <button className="text-[10px] text-gray-500 font-bold">تحديد الكل كمقروء</button>
      </div>

      <div className="space-y-4">
          {notifications.map((notif) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                key={notif.id}
                className="glass p-5 rounded-[2rem] border-white/5 flex gap-4 items-start relative group active:scale-95 transition-all"
              >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      {notif.icon}
                  </div>
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-sm text-white">{notif.title}</h3>
                          <span className="text-[10px] text-gray-500">{notif.time}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{notif.body}</p>
                  </div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                      <ChevronRight className="w-4 h-4 text-gray-600 rotate-180" />
                  </div>
              </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
