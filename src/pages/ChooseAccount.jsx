import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Store } from 'lucide-react';

const ChooseAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-6" dir="rtl">
      <h1 className="text-3xl font-black text-white mb-2">اختر نوع الحساب</h1>
      <p className="text-gray-400 mb-10">من أجل تجربة مخصصة لك</p>

      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/auth/register/buyer')}
          className="glass p-8 rounded-[2.5rem] flex flex-col items-center gap-4 border-white/10 hover:border-neon-blue transition-all"
        >
          <div className="w-20 h-20 rounded-full bg-neon-blue/10 flex items-center justify-center">
            <User className="w-10 h-10 text-neon-blue" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">أنا مشتري</h2>
            <p className="text-xs text-gray-500 mt-1">أبحث عن منتجات الأسر المبدعة</p>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/auth/register/seller')}
          className="glass p-8 rounded-[2.5rem] flex flex-col items-center gap-4 border-white/10 hover:border-neon-purple transition-all"
        >
          <div className="w-20 h-20 rounded-full bg-neon-purple/10 flex items-center justify-center">
            <Store className="w-10 h-10 text-neon-purple" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">أنا أسرة منتجة</h2>
            <p className="text-xs text-gray-500 mt-1">أرغب في بيع منتجاتي وإدارة متجري</p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ChooseAccount;
