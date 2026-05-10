import { motion } from 'framer-motion';
import { Camera, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-32 pt-20 px-6" dir="rtl">
      <div className="fixed top-0 left-0 right-0 glass z-40 p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl border-white/10">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold">إضافة منتج جديد</h1>
        <div className="w-10"></div>
      </div>

      <form className="space-y-6">
        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video rounded-3xl glass border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-neon-blue transition-colors cursor-pointer">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-neon-blue/10">
              <Camera className="w-8 h-8 text-gray-500 group-hover:text-neon-blue" />
            </div>
            <span className="text-xs text-gray-500">ارفع صور المنتج</span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 mr-2">اسم المنتج</label>
            <input
              type="text"
              placeholder="مثال: ورق عنب سبايسي"
              className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 mr-2">السعر (ر.س)</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 mr-2">الكمية</label>
              <input
                type="number"
                placeholder="1"
                className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 mr-2">التصنيف</label>
            <select className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue transition-colors appearance-none">
              <option className="bg-dark">مأكولات</option>
              <option className="bg-dark">حلويات</option>
              <option className="bg-dark">عطور</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 mr-2">وصف المنتج</label>
            <textarea
              rows="4"
              placeholder="اكتب تفاصيل المنتج هنا..."
              className="w-full glass bg-opacity-20 border-white/10 rounded-2xl p-4 text-white outline-none focus:border-neon-blue transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/seller/dashboard')}
          className="w-full py-4 rounded-2xl bg-neon-purple text-white font-black text-lg shadow-neon-purple/30 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Check className="w-6 h-6" />
          حفظ المنتج
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
