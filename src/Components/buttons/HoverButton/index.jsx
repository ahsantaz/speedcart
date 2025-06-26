import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

export default function HoverButton({ text, color, width, border , link}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={link}>
    <div  onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
         className={` rounded-4xl px-2 py-3 flex justify-center  cursor-pointer ${border}` }>
      <button
       
        className={`relative overflow-hidden ${color} py-3 rounded-4xl font-[600] cursor-pointer ${width}`}
     
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
    </Link>
  );
}
