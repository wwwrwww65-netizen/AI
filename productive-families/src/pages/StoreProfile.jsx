import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageCircle, Star, MapPin, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const StoreProfile = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'ورق عنب بالليمون', price: '45', rating: '4.9' },
    { id: 3, name: 'بوكس كوكيز منوع', price: '65', rating: '4.7' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32" dir="rtl">
      {/* Cover Image */}
      <div className="relative h-48 w-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20">
          <div className="absolute top-6 left-0 right-0 px-4 flex justify-between items-center">
              <button onClick={() => navigate(-1)} className="p-3 glass rounded-2xl border-white/10">
                  <ChevronRight className="w-6 h-6" />
              </button>
              <button className="p-3 glass rounded-2xl border-white/10"><Share2 className="w-5 h-5" /></button>
          </div>
      </div>

      {/* Store Info */}
      <div className="px-6 -mt-16 relative z-10">
          <div className="glass p-8 rounded-[2.5rem] border-white/5 text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-[2rem] glass p-1 border-2 border-neon-blue/30 -mt-20 bg-dark">
                  <img src="https://via.placeholder.com/100" className="w-full h-full object-cover rounded-[1.8rem]" alt="" />
              </div>
              <h1 className="text-2xl font-black mt-4">مطبخ سارة المنزلي</h1>
              <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">
                  نقدم لكم أشهى المأكولات المنزلية والحلويات الشعبية بأيدي سعودية ماهرة وجودة عالية.
              </p>

              <div className="flex gap-4 mt-6 w-full">
                  <button onClick={() => navigate('/buyer/chat')} className="flex-1 py-4 rounded-2xl glass border-neon-blue/30 text-neon-blue font-bold flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" /> مراسلة
                  </button>
                  <button className="flex-1 py-4 rounded-2xl bg-neon-blue text-dark font-black flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" /> اتصل بنا
                  </button>
              </div>

              <div className="flex justify-around w-full mt-8 pt-8 border-t border-white/5">
                  <div>
                      <div className="flex items-center gap-1 text-yellow-500 justify-center">
                          <Star className="w-4 h-4 fill-yellow-500" />
                          <span className="font-bold text-white">4.9</span>
                      </div>
                      <span className="text-[10px] text-gray-500">تقييم المتجر</span>
                  </div>
                  <div>
                      <span className="block font-bold text-white">1.2K</span>
                      <span className="text-[10px] text-gray-500">طلب مكتمل</span>
                  </div>
                  <div>
                      <span className="block font-bold text-white">45 د</span>
                      <span className="text-[10px] text-gray-500">متوسط التجهيز</span>
                  </div>
              </div>
          </div>
      </div>

      {/* Store Products */}
      <div className="px-6 mt-10">
          <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">منتجات الأسرة</h2>
              <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 rounded-full glass border-neon-blue text-neon-blue">الكل</span>
                  <span className="text-xs px-3 py-1 rounded-full glass border-white/5 text-gray-500">مأكولات</span>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
              {products.map(p => <ProductCard key={p.id} product={{...p, family: 'مطبخ سارة'}} />)}
          </div>
      </div>
    </div>
  );
};

export default StoreProfile;
