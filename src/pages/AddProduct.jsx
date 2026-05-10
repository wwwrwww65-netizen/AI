import { motion } from 'framer-motion';
import { Camera, ChevronRight, Check, Image as ImageIcon, Sparkles, AlertCircle, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-40 pt-28 px-6 selection:bg-neon-purple selection:text-white" dir="rtl">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 glass-card z-50 p-5 flex items-center justify-between border-b border-white/5 shadow-2xl">
        <button 
            onClick={() => navigate(-1)} 
            className="p-3 glass rounded-2xl border-white/10 hover:border-neon-purple/50 transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-black text-white tracking-tighter">إضافة منتج</h1>
            <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-neon-purple" />
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">New Product Entry</span>
            </div>
        </div>
        <div className="w-12"></div> {/* Spacer */}
      </div>

      <form className="space-y-8">
        {/* Image Upload Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
        >
          <div className="w-full aspect-video rounded-[2.5rem] glass-card border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group hover:border-neon-purple transition-all cursor-pointer relative overflow-hidden bg-white/[0.01]">
            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-neon-purple/10 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-neon-purple/30">
              <Camera className="w-10 h-10 text-gray-500 group-hover:text-neon-purple" />
            </div>
            <div className="text-center">
                <span className="block text-sm font-black text-white group-hover:text-neon-purple transition-colors">ارفع صور المنتج</span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">PNG, JPG up to 10MB</span>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 2px, transparent 0)', backgroundSize: '30px 30px'}}></div>
          </div>
        </motion.div>

        {/* Input Form Fields */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                اسم المنتج
            </label>
            <input
              type="text"
              placeholder="مثال: ورق عنب بالليمون حامض"
              className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-5 text-white outline-none focus:border-neon-purple/50 focus:bg-white/[0.04] transition-all font-bold text-sm shadow-inner"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                السعر (ر.س)
              </label>
              <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-5 text-white outline-none focus:border-neon-purple/50 transition-all font-black text-lg text-center"
                  />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                الكمية المتوفرة
              </label>
              <input
                type="number"
                placeholder="1"
                className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-5 text-white outline-none focus:border-neon-purple/50 transition-all font-black text-lg text-center"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                تصنيف المنتج
            </label>
            <div className="relative">
                <select className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-5 text-white outline-none focus:border-neon-purple/50 transition-all font-bold text-sm appearance-none cursor-pointer">
                  <option className="bg-dark">مأكولات منزلية</option>
                  <option className="bg-dark">حلويات ومخبوزات</option>
                  <option className="bg-dark">عطور وبخور</option>
                  <option className="bg-dark">خياطة وتطريز</option>
                </select>
                <ChevronRight className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 rotate-90 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
                وصف المنتج التفصيلي
            </label>
            <textarea
              rows="4"
              placeholder="صف منتجك بأفضل الكلمات لجذب المشترين..."
              className="w-full glass-card bg-white/[0.02] border-white/5 rounded-2xl p-5 text-white outline-none focus:border-neon-purple/50 transition-all font-bold text-sm resize-none shadow-inner leading-relaxed"
            ></textarea>
          </div>
        </div>

        {/* AI Suggestion Box */}
        <div className="bg-neon-purple/5 border border-neon-purple/10 p-5 rounded-3xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-neon-purple" />
            </div>
            <div>
                <h4 className="text-[11px] font-black text-white uppercase tracking-widest">تحسين الصور تلقائياً</h4>
                <p className="text-[9px] text-gray-500 mt-1 leading-relaxed">سنقوم بتحسين صور منتجاتك وإزالة الخلفية باستخدام الذكاء الاصطناعي لتبدو أكثر احترافية.</p>
            </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/seller/dashboard')}
          className="w-full py-5 rounded-[2rem] bg-neon-purple text-white font-black text-lg shadow-[0_10px_40px_rgba(188,19,254,0.3)] hover:shadow-neon-purple/50 active:scale-95 transition-all flex items-center justify-center gap-3 btn-premium"
        >
          <Check className="w-6 h-6" />
          حفظ ونشر المنتج
        </motion.button>
      </form>
    </div>
  );
};

export default AddProduct;
