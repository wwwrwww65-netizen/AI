import { motion } from 'framer-motion';
import { Phone, Mail, Lock, ArrowRight, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark flex flex-col px-8 py-12" dir="rtl">
      <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
              <h1 className="text-4xl font-black text-white mb-4 leading-tight">مرحباً بك<br /><span className="text-neon-blue">مرة أخرى</span></h1>
              <p className="text-gray-500 font-medium">سجل دخولك للمتابعة في المنصة</p>
          </motion.div>

          <div className="space-y-6">
              <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 mr-2">رقم الجوال أو البريد</label>
                  <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input className="w-full glass border-white/10 rounded-2xl p-5 pr-12 text-white focus:border-neon-blue/50 outline-none" placeholder="05xxxxxxxx" />
                  </div>
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 mr-2">كلمة المرور</label>
                  <div className="relative">
                      <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input type="password" className="w-full glass border-white/10 rounded-2xl p-5 pr-12 text-white focus:border-neon-blue/50 outline-none" placeholder="••••••••" />
                  </div>
              </div>

              <div className="flex justify-between items-center px-2">
                  <button className="text-xs text-neon-blue font-bold">نسيت كلمة المرور؟</button>
                  <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded bg-white/5 border-white/10 text-neon-blue" />
                      <span className="text-xs text-gray-500">تذكرني</span>
                  </div>
              </div>

              <button
                onClick={() => navigate('/buyer/home')}
                className="w-full bg-neon-blue py-5 rounded-2xl font-black text-dark shadow-lg shadow-neon-blue/20 flex items-center justify-center gap-3 active:scale-95 transition-all mt-4"
              >
                  تسجيل الدخول
                  <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
          </div>
      </div>

      <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">أو الدخول بواسطة</p>
          <div className="flex justify-center gap-4 mt-6">
              <button className="w-16 h-16 glass border-white/10 rounded-2xl flex items-center justify-center text-white"><Fingerprint /></button>
              <button className="w-16 h-16 glass border-white/10 rounded-2xl flex items-center justify-center text-white font-black">G</button>
              <button className="w-16 h-16 glass border-white/10 rounded-2xl flex items-center justify-center text-white font-black"></button>
          </div>
      </div>
    </div>
  );
};

export default Login;
