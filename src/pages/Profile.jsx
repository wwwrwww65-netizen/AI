import { motion } from 'framer-motion';
import { User, Package, MapPin, Heart, Bell, Shield, LogOut, ChevronLeft, Headset } from 'lucide-react';
import BottomNav from '../layout/BottomNav';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: 'تعديل الملف الشخصي', color: 'text-neon-blue' },
    { icon: <Package className="w-5 h-5" />, label: 'سجل الطلبات', color: 'text-neon-purple', path: '/buyer/orders' },
    { icon: <MapPin className="w-5 h-5" />, label: 'عناوين التوصيل', color: 'text-neon-green' },
    { icon: <Heart className="w-5 h-5" />, label: 'المفضلة', color: 'text-neon-pink' },
    { icon: <Bell className="w-5 h-5" />, label: 'الإشعارات', color: 'text-yellow-500', path: '/buyer/notifications' },
    { icon: <Headset className="w-5 h-5" />, label: 'الدعم الفني', color: 'text-neon-blue', path: '/buyer/support' },
    { icon: <Shield className="w-5 h-5" />, label: 'الخصوصية والأمان', color: 'text-gray-400' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 pt-16 px-6" dir="rtl">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <div className="w-28 h-28 rounded-[2.5rem] glass border-2 border-neon-blue/30 p-1">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-full h-full object-cover rounded-[2.2rem]"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-neon-blue rounded-2xl flex items-center justify-center border-4 border-dark">
            <Camera className="w-4 h-4 text-dark" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-white mt-4">فهد سليمان</h2>
        <p className="text-sm text-gray-500">fahad@example.com</p>
      </div>

      {/* Menu */}
      <div className="space-y-3">
        {menuItems.map((item, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.98 }}
            onClick={() => item.path && navigate(item.path)}
            className="w-full glass p-5 rounded-3xl border-white/5 flex items-center justify-between group hover:border-white/10 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-bold text-white text-sm">{item.label}</span>
            </div>
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
          </motion.button>
        ))}

        <button
          onClick={() => navigate('/')}
          className="w-full glass p-5 rounded-3xl border-red-500/10 flex items-center gap-4 mt-6 text-red-500 hover:bg-red-500/5 transition-all"
        >
          <div className="p-3 rounded-2xl bg-red-500/10">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-bold text-sm">تسجيل الخروج</span>
        </button>
      </div>

      <BottomNav type="buyer" />
    </div>
  );
};

// Mock camera icon as it wasn't imported correctly in previous thought
import { Camera } from 'lucide-react';

export default Profile;
