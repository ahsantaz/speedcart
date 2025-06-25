import { motion } from "framer-motion";
import { useState } from "react";

export default function OrangeHover({ text, width }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
         className={`bg-sec-orange rounded-4xl px-2 py-3 flex justify-center shadow-[inset_0_-2px_15px_0_rgba(199,199,199,0.25),inset_0_4px_15px_0_rgba(199,199,199,0.25)] cursor-pointer` }>
      <button
       
        className={`relative overflow-hidden text-white py-3 rounded-4xl font-[600] cursor-pointer ${width}`}
     
      >
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: hovered ? -30 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          {text}
        </motion.span>

        <motion.span
          initial={{ y: 30 }}
          animate={{ y: hovered ? 0 : 30 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          {text}
        </motion.span>
      </button>
    </div>
  );
}
