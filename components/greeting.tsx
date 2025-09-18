import { motion } from 'framer-motion';
import { SparklesIcon } from './icons';

export const Greeting = () => {
  return (
    <div
      key="overview"
      className="mx-auto mt-4 flex w-full max-w-4xl px-2 md:mt-16 md:px-4"
    >
      <style jsx>{`
        @keyframes pulse-gradient {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 10px rgba(0, 99, 243, 0.4));
            transform: scale(1);
          }
          50% {
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(48, 127, 244, 0.6));
            transform: scale(1.08);
          }
        }
      `}</style>
      
      <div className="flex gap-3 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.4 }}
          className="text-[#0063F3]"
          style={{
            animation: 'pulse-gradient 4s ease-in-out infinite',
          }}
        >
          <SparklesIcon size={32} />
        </motion.div>
        
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            className="font-semibold text-xl md:text-2xl"
          >
            Olá!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-zinc-500 md:text-2xl"
          >
            Como posso ajudar você hoje?
          </motion.div>
        </div>
      </div>
    </div>
  );
};
