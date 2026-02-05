import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[60] flex items-center justify-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div id="circle-1" className="absolute h-[30vmin] w-[30vmin] max-h-[240px] max-w-[240px] rounded-full border border-[#C30010] animate-ping" />
      <div className="absolute h-[45vmin] w-[45vmin] max-h-[360px] max-w-[360px] rounded-full border border-[#D1001F]" />
      <div className="absolute h-[60vmin] w-[60vmin] max-h-[520px] max-w-[520px] rounded-full border border-[#DE0A26]" />
      <motion.div
        id="circle-4"
        className="absolute h-[75vmin] w-[75vmin] max-h-[650px] max-w-[650px] rounded-full border border-[#F01E2C]"
        animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute h-[90vmin] w-[90vmin] max-h-[820px] max-w-[820px] rounded-full border border-[#FF2C2C]" />
    </motion.div>
  );
}

