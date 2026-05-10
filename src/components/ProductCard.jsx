import { ShoppingCart, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/buyer/product/${product.id}`)}
      className="glass rounded-3xl overflow-hidden group border-white/5 hover:border-neon-blue/30 transition-all duration-500 cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image || `https://picsum.photos/seed/${product.id}/400/500`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 rounded-xl glass border-white/10 hover:bg-neon-pink/20 hover:border-neon-pink group/fav transition-all">
            <Heart className="w-4 h-4 text-white group-hover/fav:text-neon-pink transition-colors" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
           <div className="flex items-center gap-1 glass px-2 py-1 rounded-lg border-white/10">
            <Star className="w-3 h-3 fill-neon-blue text-neon-blue" />
            <span className="text-[10px] font-bold text-white">{product.rating || '4.8'}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2" dir="rtl">
        <h3 className="text-sm font-bold text-white group-hover:text-neon-blue transition-colors line-clamp-1">
          {product.name || 'اسم المنتج'}
        </h3>

        <p className="text-[10px] text-gray-500">
          {product.family || 'أسرة الخير'}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-black text-white">
            {product.price || '45'} <span className="text-[10px] text-neon-blue">ر.س</span>
          </span>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-blue hover:text-dark transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
