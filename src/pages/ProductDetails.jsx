import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, ShoppingBag, Heart, Share2, MapPin, Clock, ShieldCheck, Info, Plus, Minus, Sparkles, Loader2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [qty, setQty] = useState(1);

  // Mock data - in a real app this would come from an API
  const product = {
    name: 'ورق عنب حامض سبايسي',
    price: '45',
    family: 'مطبخ أم نورة',
    rating: '4.9',
    reviews: '128',
    distance: '2.5',
    prepTime: '45',
    stock: '8',
    description: 'استمتع بمذاق ورق العنب الأصيل المحضر يدوياً بكل حب. نستخدم أجود أنواع ورق العنب مع حشوة الأرز المتبلة بخلطتنا الخاصة من الليمون الطبيعي وزيت الزيتون البكر والبهارات السرية. يتم التحضير يومياً لضمان الطراوة والجودة العالية.',
    images: [
      'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=1200', // Increased width for detail but handled with loader
    ]
  };

  return (
    <div className="min-h-screen bg-dark pb-36 selection:bg-neon-blue selection:text-dark" dir="rtl">
      {/* Header Image Section */}
      <div className="relative h-[480px] w-full overflow-hidden bg-white/5">
        <AnimatePresence mode="wait">
            {!isImageLoaded && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-10 bg-dark/20 backdrop-blur-sm"
                >
                    <Loader2 className="w-10 h-10 text-neon-blue animate-spin" />
                </motion.div>
            )}
        </AnimatePresence>

        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ 
            scale: isImageLoaded ? 1 : 1.2, 
            opacity: isImageLoaded ? 1 : 0 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={product.images[0]}
          alt={product.name}
          onLoad={() => setIsImageLoaded(true)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-transparent"></div>

        {/* Top Floating Actions */}
        <div className="absolute top-8 left-0 right-0 px-6 flex justify-between items-center z-20">
          <button 
            onClick={() => navigate(-1)} 
            className="p-3.5 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-3">
            <button className="p-3.5 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90">
                <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="p-3.5 glass rounded-2xl border-white/10 hover:border-neon-pink/50 group transition-all active:scale-90">
                <Heart className="w-5 h-5 text-white group-hover:text-neon-pink group-hover:fill-neon-pink transition-all" />
            </button>
          </div>
        </div>

        {/* Badge Overlay */}
        <div className="absolute bottom-16 right-6 z-20">
            <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2"
            >
                <Sparkles className="w-4 h-4 text-neon-blue" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">الأكثر طلباً هذا الأسبوع</span>
            </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 -mt-12 relative z-30">
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card p-8 rounded-[3rem] border-white/5 space-y-8 shadow-2xl"
        >
          {/* Title and Price */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-white tracking-tight leading-tight">{product.name}</h1>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
                  <p className="text-neon-blue font-black text-xs">بواسطة {product.family}</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-[2rem] border border-white/10 text-center min-w-[80px]">
              <span className="block text-2xl font-black text-white">{product.price}</span>
              <span className="text-[9px] text-neon-blue font-bold uppercase tracking-widest">ر.س</span>
            </div>
          </div>

          {/* Key Stats */}
          <div className="flex items-center justify-between py-4 border-y border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-white/10">
                <Star className="w-5 h-5 fill-neon-blue text-neon-blue" />
              </div>
              <div>
                  <span className="block text-sm font-black text-white leading-none">{product.rating}</span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase">{product.reviews} تقييم</span>
              </div>
            </div>
            
            <div className="h-8 w-px bg-white/5"></div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-white/10">
                <MapPin className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                  <span className="block text-sm font-black text-white leading-none">{product.distance} كم</span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase">قريب منك</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/5"></div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border-white/10">
                <Clock className="w-5 h-5 text-neon-purple" />
              </div>
              <div>
                  <span className="block text-sm font-black text-white leading-none">{product.prepTime} د</span>
                  <span className="text-[9px] text-gray-500 font-bold uppercase">وقت التجهيز</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-neon-blue" />
                وصف المنتج
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed text-justify opacity-80">
              {product.description}
            </p>
          </div>

          {/* Trust Badge */}
          <div className="bg-neon-blue/5 border border-neon-blue/10 p-4 rounded-2xl flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-neon-blue" />
              <div>
                  <h4 className="text-xs font-black text-white">ضمان الجودة المنزلية</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5">هذا المنتج محضر منزلياً 100% وبأعلى معايير النظافة.</p>
              </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Footer Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-50">
        <div className="max-w-2xl mx-auto glass-card p-4 rounded-[2.5rem] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-4 items-center">
          <div className="flex items-center gap-4 glass px-5 py-2.5 rounded-[1.5rem] border-white/10 shadow-inner">
            <button 
                onClick={() => setQty(q => q + 1)}
                className="p-1 text-neon-blue hover:scale-125 transition-transform active:scale-90"
            >
                <Plus className="w-5 h-5" />
            </button>
            <span className="text-lg font-black text-white w-6 text-center">{qty}</span>
            <button 
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="p-1 text-gray-500 hover:text-white hover:scale-125 transition-transform active:scale-90"
            >
                <Minus className="w-5 h-5" />
            </button>
          </div>
          
          <button 
            onClick={() => navigate('/buyer/cart')}
            className="flex-1 bg-neon-blue text-dark font-black py-4 rounded-[1.5rem] flex items-center justify-center gap-3 btn-premium shadow-2xl shadow-neon-blue/20 group transition-all active:scale-95"
          >
            <div className="relative">
                <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-dark rounded-full"></span>
            </div>
            <span className="text-base">إضافة للسلة</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
