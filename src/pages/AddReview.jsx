import { motion } from 'framer-motion';
import { Star, Camera, Send, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';

const AddReview = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen bg-dark pb-10 pt-24 px-6" dir="rtl">
      <TopBar type="buyer" />
      <div className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate(-1)} className="p-2 glass rounded-lg border-white/10"><ChevronRight className="w-5 h-5 text-white" /></button>
          <h1 className="text-xl font-black">تقييم الطلب</h1>
      </div>

      <div className="glass p-8 rounded-[2.5rem] border-white/5 text-center mb-6">
          <p className="text-gray-400 text-sm mb-6">كيف كانت تجربتك مع "مطبخ أم نورة"؟</p>
          <div className="flex justify-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                  <button key={s} onClick={() => setRating(s)}>
                      <Star className={`w-10 h-10 ${s <= rating ? 'text-neon-blue fill-neon-blue' : 'text-gray-700'}`} />
                  </button>
              ))}
          </div>
          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-neon-blue/50 h-32 resize-none"
            placeholder="اكتب رأيك هنا..."
          ></textarea>
      </div>

      <div className="glass p-6 rounded-[2.5rem] border-white/5 mb-8">
          <h3 className="text-xs font-bold text-gray-400 mb-4 text-right">أضف صوراً (اختياري)</h3>
          <div className="flex gap-4">
              <button className="w-20 h-20 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-neon-blue/50 hover:text-neon-blue transition-all">
                  <Camera className="w-6 h-6" />
                  <span className="text-[10px] mt-1 font-bold">إضافة</span>
              </button>
          </div>
      </div>

      <button className="w-full bg-neon-blue py-5 rounded-2xl font-black shadow-lg shadow-neon-blue/20 flex items-center justify-center gap-3 active:scale-95 transition-all">
          <Send className="w-5 h-5" />
          نشر التقييم
      </button>
    </div>
  );
};

export default AddReview;
