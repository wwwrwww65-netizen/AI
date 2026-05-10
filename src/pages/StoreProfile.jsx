import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Phone, MessageCircle, Star, MapPin, 
  Share2, Sparkles, Clock, ShieldCheck, ArrowLeft, 
  Loader2, Info, Image as ImageIcon, ThumbsUp, ShoppingBag 
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const StoreProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    { id: 1, name: 'ورق عنب بالليمون حامض', price: '٤٥', rating: '٤.٩', family: 'مطبخ سارة', image: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'بوكس كوكيز منوع', price: '٦٥', rating: '٤.٧', family: 'مطبخ سارة', image: 'https://images.unsplash.com/photo-1558961312-393c833f48d2?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'كيكة العسل الفاخرة', price: '٨٥', rating: '٤.٨', family: 'مطبخ سارة', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'بسبوسة بالقشطة', price: '٤٠', rating: '٤.٩', family: 'مطبخ سارة', image: 'https://images.unsplash.com/photo-1542841791-192d99996b3c?auto=format&fit=crop&q=80&w=400' },
  ];

  const reviews = [
    { id: 1, user: 'نورة السبيعي', rating: 5, comment: 'أفضل ورق عنب ذقته في حياتي! حامض ولذيذ جداً والتغليف ممتاز.', date: 'منذ يومين' },
    { id: 2, user: 'سلطان القحطاني', rating: 4, comment: 'الكوكيز طري جداً ونكهته واضحة. التوصيل كان سريعاً.', date: 'منذ أسبوع' },
  ];

  return (
    <div className="min-h-screen bg-dark pb-32 selection:bg-neon-blue selection:text-dark" dir="rtl">
      {/* Cover Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-dark to-neon-purple/30"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/80"></div>
          
          <div className="absolute top-8 left-0 right-0 px-6 flex justify-between items-center z-20">
              <button 
                onClick={() => navigate(-1)} 
                className="p-3.5 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90"
              >
                  <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex gap-3">
                  {id === 'featured' && (
                    <div className="glass px-4 py-2 rounded-2xl border-white/20 flex items-center gap-2 bg-neon-blue/10 backdrop-blur-xl">
                        <Sparkles className="w-4 h-4 text-neon-blue animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Featured Store</span>
                    </div>
                  )}
                  <button className="p-3.5 glass rounded-2xl border-white/10 hover:border-neon-blue/50 transition-all active:scale-90">
                      <Share2 className="w-5 h-5 text-white" />
                  </button>
              </div>
          </div>
      </div>

      {/* Store Info Profile Card */}
      <div className="px-6 -mt-28 relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card p-8 rounded-[3.5rem] border-white/5 text-center flex flex-col items-center shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
          >
              <div className="relative group">
                <div className="w-36 h-36 rounded-[3rem] glass p-1.5 border-4 border-neon-blue/30 -mt-24 bg-dark shadow-2xl relative overflow-hidden">
                    {!isLogoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-dark/20 backdrop-blur-sm">
                            <Loader2 className="w-8 h-8 text-neon-blue/40 animate-spin" />
                        </div>
                    )}
                    <img 
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=300" 
                        onLoad={() => setIsLogoLoaded(true)}
                        className={`w-full h-full object-cover rounded-[2.6rem] transition-opacity duration-700 ${isLogoLoaded ? 'opacity-100' : 'opacity-0'}`} 
                        alt="Store Logo" 
                    />
                </div>
                <div className="absolute -bottom-1 -right-1 w-11 h-11 bg-neon-green rounded-2xl flex items-center justify-center border-4 border-dark shadow-lg">
                    <ShieldCheck className="w-6 h-6 text-dark" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <h1 className="text-4xl font-black text-white tracking-tighter leading-none">مطبخ سارة المنزلي</h1>
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#00ff00]"></div>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mb-6">Premium Family Kitchen</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['مأكولات نجدية', 'حلويات', 'تجهيز حفلات', 'أسر منتجة'].map((tag, i) => (
                        <span key={i} className="text-[9px] font-black px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400">
                            #{tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed opacity-80 mb-8 italic">
                    "نقدم لكم أشهى المأكولات المنزلية والحلويات الشعبية بأيدي سعودية ماهرة وجودة عالية تذكرك بطبخ الوالدة والزمن الجميل."
                </p>

                <div className="flex gap-4 w-full max-w-sm mx-auto">
                    <button onClick={() => navigate('/buyer/chat')} className="flex-1 py-4 rounded-[1.8rem] glass border-neon-blue/30 text-neon-blue font-black flex items-center justify-center gap-3 hover:bg-neon-blue/5 transition-all active:scale-95 shadow-lg shadow-neon-blue/5">
                        <MessageCircle className="w-5 h-5" /> مراسلة
                    </button>
                    <button className="flex-1 py-4 rounded-[1.8rem] bg-neon-blue text-dark font-black flex items-center justify-center gap-3 shadow-xl shadow-neon-blue/20 btn-premium transition-all active:scale-95">
                        <Phone className="w-5 h-5" /> اتصل بنا
                    </button>
                </div>
              </div>

              {/* Advanced Stats */}
              <div className="grid grid-cols-3 w-full mt-12 pt-8 border-t border-white/5 gap-4">
                  <div className="text-center group">
                      <div className="flex items-center gap-1.5 text-neon-blue justify-center mb-1 group-hover:scale-110 transition-transform">
                          <Star className="w-4 h-4 fill-neon-blue" />
                          <span className="font-black text-xl text-white">٤.٩</span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">تقييم المتجر</span>
                  </div>
                  <div className="text-center border-x border-white/5 group">
                      <div className="flex flex-col items-center mb-1 group-hover:scale-110 transition-transform">
                          <span className="font-black text-xl text-white leading-none">١.٢ألف</span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">طلب مكتمل</span>
                  </div>
                  <div className="text-center group">
                      <div className="flex items-center gap-1.5 text-neon-purple justify-center mb-1 group-hover:scale-110 transition-transform">
                          <Clock className="w-4 h-4" />
                          <span className="font-black text-xl text-white">٤٥ د</span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">تجهيز الطلب</span>
                  </div>
              </div>
          </motion.div>
      </div>

      {/* Tabs Switcher */}
      <div className="px-6 mt-12 mb-8">
          <div className="flex bg-white/5 p-1.5 rounded-[1.8rem] border border-white/5">
              {[
                { id: 'products', label: 'المنتجات', icon: <ShoppingBag className="w-4 h-4" /> },
                { id: 'reviews', label: 'التقييمات', icon: <Star className="w-4 h-4" /> },
                { id: 'info', label: 'عن المتجر', icon: <Info className="w-4 h-4" /> }
              ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3.5 rounded-[1.4rem] flex items-center justify-center gap-3 text-xs font-black transition-all duration-500
                        ${activeTab === tab.id ? 'bg-neon-blue text-dark shadow-xl shadow-neon-blue/20' : 'text-gray-500 hover:text-white'}`}
                  >
                      {tab.icon}
                      {tab.label}
                  </button>
              ))}
          </div>
      </div>

      {/* Dynamic Content Based on Tab */}
      <div className="px-6">
          <AnimatePresence mode="wait">
              {activeTab === 'products' && (
                <motion.div 
                    key="products"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-2 gap-6"
                >
                    {products.map(p => <ProductCard key={p.id} {...p} />)}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div 
                    key="reviews"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                >
                    <div className="glass-card p-6 rounded-3xl border-neon-blue/20 bg-neon-blue/5 mb-6 flex items-center justify-between">
                        <div>
                            <span className="block text-3xl font-black text-white">٤.٩</span>
                            <div className="flex gap-1 mt-1">
                                {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-neon-blue text-neon-blue" />)}
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 font-bold max-w-[140px] text-left">متوسط التقييم بناءً على ١,٢٤٠ عميل</p>
                    </div>

                    {reviews.map(rev => (
                        <div key={rev.id} className="glass-card p-6 rounded-3xl border-white/5 space-y-3 relative overflow-hidden group">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xs font-black text-white">{rev.user.charAt(0)}</div>
                                    <div>
                                        <h4 className="text-sm font-black text-white">{rev.user}</h4>
                                        <span className="text-[9px] text-gray-500 font-bold uppercase">{rev.date}</span>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-neon-blue text-neon-blue" />)}
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">{rev.comment}</p>
                            <div className="flex items-center gap-2 pt-2">
                                <button className="flex items-center gap-1.5 text-[9px] font-black text-gray-500 hover:text-neon-blue transition-colors">
                                    <ThumbsUp className="w-3 h-3" /> مفيد (٤)
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
              )}

              {activeTab === 'info' && (
                <motion.div 
                    key="info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                >
                    <div className="glass-card p-8 rounded-[2.5rem] border-white/5 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-blue">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-white">الموقع</h4>
                                <p className="text-xs text-gray-500">الرياض، حي النرجس (متاح التوصيل لجميع الأحياء)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-purple">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-white">ساعات العمل</h4>
                                <p className="text-xs text-gray-500">يومياً من الساعة ١ ظهراً حتى ١١ مساءً</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-green">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-white">شهادات الجودة</h4>
                                <p className="text-xs text-gray-500">حاصل على رخصة "عمل حر" وشهادة سلامة الأغذية.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
              )}
          </AnimatePresence>
      </div>
    </div>
  );
};

export default StoreProfile;
