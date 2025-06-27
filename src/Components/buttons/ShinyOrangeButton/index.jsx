import { div } from "framer-motion/client";
import "./shine.css";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";


export default function ShinyOrangeButton({ text, link }) {
    const [hovered, setHovered] = useState(false);

  return (
    <Link to={link}>
   <div class="box p-3 rounded-4xl text-white font-[600] cursor-pointer" 
     onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <button

          className={`relative overflow-hidden text-white py-3 rounded-4xl font-[600] cursor-pointer w-26`}

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
