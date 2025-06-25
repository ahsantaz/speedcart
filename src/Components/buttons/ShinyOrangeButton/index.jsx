import { div } from "framer-motion/client";
import "./shine.css";

export default function ShinyOrangeButton({ text }) {
  return (
   <div class="box p-3 rounded-4xl text-white font-[600] cursor-pointer">{text}</div>

  );
}
