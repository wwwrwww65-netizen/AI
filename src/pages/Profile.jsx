import { motion } from 'framer-motion';
import { User, Package, MapPin, Heart, Bell, Shield, LogOut, ChevronLeft, Headset, Camera, Sparkles, Settings, Star, ArrowLeft, RefreshCw, Store } from 'lucide-react';
import BottomNav from '../layout/BottomNav';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: 'تعديل الملف الشخصي', color: 'text-neon-blue', desc: 'تحديث بياناتك الشخصية وصورة الحساب' },
    { icon: <Package className="w-5 h-5" />, label: 'سجل الطلبات', color: 'text-neon-purple', path: '/buyer/orders', desc: 'متابعة طلباتك السابقة والحالية' },
    { icon: <MapPin className="w-5 h-5" />, label: 'عناوين التوصيل', color: 'text-neon-green', desc: 'إدارة مواقع التوصيل المفضلة لديك' },
    { icon: <Heart className="w-5 h-5" />, label: 'المفضلة', color: 'text-neon-pink', desc: 'قائمة المنتجات والأسر التي تتابعها' },
    { icon: <Bell className="w-5 h-5" />, label: 'الإشعارات', color: 'text-yellow-500', path: '/buyer/notifications', desc: 'تنبيهات العروض وحالة الطلبات' },
    { icon: <Headset className="w-5 h-5" />, label: 'الدعم الفني', color: 'text-neon-blue', path: '/buyer/support', desc: 'تواصل معنا للمساعدة في أي استفسار' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-36 pt-16 px-6 selection:bg-neon-blue selection:text-dark" dir="rtl">
      {/* Premium Profile Header */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-neon-blue/10 rounded-full blur-[80px]"></div>
        
        <div className="relative group">
          <div className="w-32 h-32 rounded-[3rem] glass border-2 border-white/10 p-1.5 shadow-2xl group-hover:border-neon-blue/50 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=300"
              alt="Avatar"
              className="w-full h-full object-cover rounded-[2.6rem]"
            />
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -bottom-2 -right-2 w-11 h-11 bg-white text-dark rounded-2xl flex items-center justify-center border-4 border-dark shadow-xl cursor-pointer"
          >
            <Camera className="w-5 h-5" />
          </motion.div>
        </div>

        <div className="text-center mt-6 z-10">
            <div className="flex items-center justify-center gap-2 mb-1">
                <h2 className="text-2xl font-black text-white tracking-tight">فهد سليمان</h2>
                <div className="bg-neon-blue/10 px-2 py-0.5 rounded-lg border border-neon-blue/20">
                    <Sparkles className="w-3 h-3 text-neon-blue" />
                </div>
            </div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">عضو بلاتيني منذ ٢٠٢٤</p>
        </div>

        {/* User Stats Bar */}
        <div className="flex gap-4 mt-8 w-full max-w-sm">
            {[
                { label: 'طلب', val: '٢٤', color: 'text-neon-blue' },
                { label: 'تقييم', val: '١٨', color: 'text-neon-purple' },
                { label: 'متابَع', val: '١٢', color: 'text-neon-green' }
            ].map((stat, i) => (
                <div key={i} className="flex-1 glass-card py-3 rounded-2xl border-white/5 text-center">
                    <span className={`block text-lg font-black ${stat.color}`}>{stat.val}</span>
                    <span className="text-[8px] text-gray-500 font-bold uppercase">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Mode Switcher Button (Crucial Change) */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/seller/dashboard')}
        className="w-full glass-card p-6 rounded-[2.5rem] border-neon-purple/30 bg-gradient-to-r from-neon-purple/10 to-transparent flex items-center justify-between mb-8 group"
      >
        <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-neon-purple flex items-center justify-center shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                <Store className="w-7 h-7 text-white" />
            </div>
            <div className="text-right">
                <h3 className="text-sm font-black text-white">التبديل إلى وضع البائع</h3>
                <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">إدارة متجرك ومنتجاتك</p>
            </div>
        </div>
        <RefreshCw className="w-5 h-5 text-neon-purple group-hover:rotate-180 transition-transform duration-700" />
      </motion.button>

      {/* Interactive Menu List */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] px-2 mb-2">إعدادات الحساب</h3>
        {menuItems.map((item, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: 8, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => item.path && navigate(item.path)}
            className="w-full glass-card p-5 rounded-[2rem] border-white/5 flex items-center justify-between group hover:border-white/10 hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center gap-5">
              <div className={`w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="text-right">
                  <span className="block font-black text-white text-sm group-hover:text-neon-blue transition-colors">{item.label}</span>
                  <span className="text-[9px] text-gray-500 font-bold">{item.desc}</span>
              </div>
            </div>
            <div className="w-8 h-8 glass rounded-full flex items-center justify-center border-white/5 group-hover:border-white/20 transition-all">
                <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </div>
          </motion.button>
        ))}

        <div className="h-px bg-white/5 mx-2 my-6"></div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="w-full glass-card p-5 rounded-[2rem] border-red-500/10 flex items-center justify-between text-red-500 hover:bg-red-500/5 transition-all group shadow-lg"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LogOut className="w-5 h-5" />
            </div>
            <div className="text-right">
                <span className="block font-black text-sm">تسجيل الخروج</span>
                <span className="text-[9px] text-red-500/50 font-bold">نراك قريباً يا فهد!</span>
            </div>
          </div>
          <ArrowLeft className="w-4 h-4 text-red-500/50 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <BottomNav type="buyer" />
    </div>
  );
};

export default Profile;
