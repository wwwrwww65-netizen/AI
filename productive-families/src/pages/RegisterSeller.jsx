import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageCircle, MapPin, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterSeller = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-32 pt-20 px-6" dir="rtl">
        <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-xl font-bold">تسجيل أسرة منتجة</h1>
            <div className="w-10"></div>
        </div>

        <div className="space-y-6 mt-4">
            <div className="text-center mb-8">
                <div className="w-20 h-20 bg-neon-purple/10 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-neon-purple/20">
                    <Store className="w-10 h-10 text-neon-purple" />
                </div>
                <h2 className="text-xl font-black">أنشئ متجرك الخاص</h2>
                <p className="text-xs text-gray-500 mt-1">ابدأ ببيع منتجاتك والوصول لآلاف العملاء</p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 mr-2">اسم المتجر</label>
                    <input type="text" placeholder="مثال: مطبخ الجودة" className="w-full glass bg-opacity-10 border-white/5 rounded-2xl p-4 text-white outline-none focus:border-neon-purple transition-all" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 mr-2">نبذة عن المتجر</label>
                    <textarea rows="3" placeholder="وصف قصير لما تقدمه..." className="w-full glass bg-opacity-10 border-white/5 rounded-2xl p-4 text-white outline-none focus:border-neon-purple transition-all resize-none"></textarea>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 mr-2">نوع المنتجات</label>
                    <select className="w-full glass bg-opacity-10 border-white/5 rounded-2xl p-4 text-white outline-none focus:border-neon-purple transition-all appearance-none">
                        <option className="bg-dark">مأكولات ومشروبات</option>
                        <option className="bg-dark">حرف يدوية</option>
                        <option className="bg-dark">عطور وتجميل</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 mr-2">الموقع الجغرافي</label>
                    <div className="glass p-4 rounded-2xl border-white/5 flex items-center justify-between group cursor-pointer hover:border-neon-blue/30">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-neon-blue" />
                            <span className="text-sm text-gray-400">حدد موقعك على الخريطة</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-600 rotate-180" />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="button"
                        onClick={() => navigate('/seller/dashboard')}
                        className="w-full py-4 rounded-2xl bg-neon-purple text-white font-black text-lg shadow-neon-purple/30 shadow-lg active:scale-95 transition-all"
                    >
                        إرسال الطلب للمراجعة
                    </button>
                    <p className="text-[10px] text-gray-500 text-center mt-4 px-6">
                        بالنقر على "إرسال"، فإنك توافق على شروط وأحكام المنصة وسياسة الخصوصية.
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default RegisterSeller;
