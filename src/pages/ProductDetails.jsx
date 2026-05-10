import { motion } from 'framer-motion';
import { ChevronRight, Star, ShoppingBag, Heart, Share2, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark pb-28" dir="rtl">
      {/* Header Image */}
      <div className="relative h-[400px] w-full">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40"></div>

        {/* Top Actions */}
        <div className="absolute top-6 left-0 right-0 px-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="p-3 glass rounded-2xl border-white/10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-3">
            <button className="p-3 glass rounded-2xl border-white/10"><Share2 className="w-5 h-5" /></button>
            <button className="p-3 glass rounded-2xl border-white/10"><Heart className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-10 relative z-10">
        <div className="glass p-6 rounded-[2.5rem] border-white/5 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-black text-white">ورق عنب بالليمون</h1>
              <p className="text-neon-blue font-bold mt-1">بواسطة مطبخ سارة</p>
            </div>
            <div className="text-left">
              <span className="text-3xl font-black text-white">45</span>
              <span className="text-xs text-gray-500 mr-1 font-bold">ر.س</span>
            </div>
          </div>

          <div className="flex items-center gap-4 py-2 border-y border-white/5">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-bold text-white">4.9</span>
              <span className="text-xs text-gray-500">(120 تقييم)</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-neon-blue" />
              <span className="text-xs text-gray-400">يبعد 2.5 كم عنك</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white">الوصف</h3>
            <p className="text-sm text-gray-400 leading-relaxed text-justify">
              ورق عنب منزلي طازج، محشو بالأرز المتبل والبهارات الخاصة، مع عصرة ليمون طبيعي وزيت زيتون بكر. يتم التحضير يومياً لضمان الجودة والطعم الأصيل.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass p-4 rounded-2xl text-center border-white/5">
              <span className="block text-xs text-gray-500 mb-1">وقت التحضير</span>
              <span className="font-bold text-white text-sm">45 دقيقة</span>
            </div>
            <div className="glass p-4 rounded-2xl text-center border-white/5">
              <span className="block text-xs text-gray-500 mb-1">الكمية المتوفرة</span>
              <span className="font-bold text-white text-sm">8 بوكسات</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 glass border-t border-white/10 z-50">
        <div className="max-w-md mx-auto flex gap-4">
          <div className="flex items-center gap-4 glass px-4 py-1 rounded-2xl border-white/10">
            <button className="text-xl font-bold text-neon-blue">+</button>
            <span className="text-lg font-bold">1</span>
            <button className="text-xl font-bold text-gray-500">-</button>
          </div>
          <button className="flex-1 bg-neon-blue text-dark font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-neon-blue/30 shadow-lg active:scale-95 transition-all">
            <ShoppingBag className="w-5 h-5" />
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
