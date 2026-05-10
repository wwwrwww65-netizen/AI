import { motion } from 'framer-motion';

const SectionHeader = ({ title, actionLabel }) => {
  return (
    <div className="flex justify-between items-center mb-4 px-1" dir="rtl">
      <h2 className="text-xl font-black text-white flex items-center gap-2">
        <span className="w-1.5 h-6 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"></span>
        {title}
      </h2>
      {actionLabel && (
        <button className="text-xs font-bold text-neon-blue hover:underline">
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
