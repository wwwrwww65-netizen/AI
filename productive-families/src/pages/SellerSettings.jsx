import { motion } from 'framer-motion';
import { ChevronRight, Bell, Calendar, HelpCircle, Shield, LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';
import BottomNav from '../layout/BottomNav';

const SellerSettings = () => {
  const navigate = useNavigate();
  const settings = [
    { icon: <Calendar className="text-neon-blue" />, label: 'أوقات العمل', desc: 'تعديل ساعات استقبال الطلبات' },
    { icon: <Settings className="text-neon-purple" />, label: 'إعدادات المتجر', desc: 'الشعار، الوصف، ورسوم التوصيل' },
    { icon: <Bell className="text-yellow-500" />, label: 'الإشعارات', desc: 'تنبيهات الطلبات والرسائل' },
    { icon: <LifeBuoy className="text-neon-green" />, label: 'الدعم الفني', desc: 'المساعدة وتذاكر الشكاوى' },
    { icon: <Shield className="text-gray-500" />, label: 'الخصوصية', desc: 'شروط الاستخدام والسياسات' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-24 px-6" dir="rtl">
      <TopBar type="seller" />
      <h1 className="text-2xl font-black mb-8">الإعدادات</h1>

      <div className="space-y-4">
          {settings.map((item, i) => (
              <div key={i} className="glass p-5 rounded-3xl border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-all">
                  <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-white/5">
                          {item.icon}
                      </div>
                      <div>
                          <h4 className="font-bold text-white text-sm">{item.label}</h4>
                          <p className="text-[10px] text-gray-500 mt-1">{item.desc}</p>
                      </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
              </div>
          ))}
      </div>

      <BottomNav type="seller" />
    </div>
  );
};

export default SellerSettings;
