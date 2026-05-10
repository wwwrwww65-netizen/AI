import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dark">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]"></div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-6 rounded-[2rem] glass flex items-center justify-center border-neon-blue/30 shadow-neon-blue/20 shadow-2xl">
          <span className="text-4xl">🏡</span>
        </div>
        <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
          الأسر <span className="text-neon-blue drop-shadow-[0_0_10px_#00f3ff]">المنتجة</span>
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Premium Marketplace</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-16 w-full px-8 max-w-sm"
      >
        <button
          onClick={() => navigate('/login')}
          className="w-full py-4 rounded-2xl bg-white text-dark font-black text-lg hover:shadow-neon-blue/50 transition-all active:scale-95"
        >
          ابدأ الآن
        </button>
      </motion.div>
    </div>
  );
};

export default Splash;
