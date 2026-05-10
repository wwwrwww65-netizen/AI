import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, price, family, rating, image }) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/buyer/product/${id}`)}
      className="glass-card group relative flex flex-col overflow-hidden rounded-[2.5rem] border-white/5 transition-all hover:border-neon-blue/30 hover:shadow-neon-blue/10 hover:shadow-2xl cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white/5">
        {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark/20 backdrop-blur-md">
                <Loader2 className="w-6 h-6 text-neon-blue/40 animate-spin" />
            </div>
        )}
        <img
          src={`${image}&w=400&q=75`} // Optimized URL for speed
          alt={name}
          onLoad={() => setIsImageLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="glass flex items-center gap-1 rounded-xl px-2 py-1 border-white/10 shadow-xl backdrop-blur-md">
                <Star className="h-3 w-3 fill-neon-blue text-neon-blue" />
                <span className="text-[10px] font-black text-white">{rating}</span>
            </div>
        </div>

        <button 
            onClick={(e) => { e.stopPropagation(); }}
            className="absolute top-4 left-4 p-2.5 glass rounded-xl border-white/10 text-white hover:text-neon-pink hover:border-neon-pink/50 transition-all active:scale-90"
        >
            <Heart className="h-4 w-4" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[9px] font-black bg-neon-blue/10 text-neon-blue px-2 py-0.5 rounded-lg border border-neon-blue/20 uppercase tracking-tighter">منتج منزلي</span>
        </div>
        
        <h3 className="mb-1 line-clamp-1 text-sm font-black text-white group-hover:text-neon-blue transition-colors">
          {name}
        </h3>
        
        <div className="mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">بواسطة {family}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">السعر</span>
            <p className="text-lg font-black text-white leading-none">
              {price} <span className="text-[10px] text-neon-blue">ر.س</span>
            </p>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigate('/buyer/cart'); }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-dark shadow-xl hover:bg-neon-blue hover:text-dark hover:shadow-neon-blue/30 transition-all active:scale-90"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
