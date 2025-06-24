import { div } from "framer-motion/client"
import "./shine.css"
export default function ShinyOrangeButton({text}) {
  return (

    <button className="rotating-shadow-btn  text-white font-bold py-3 px-4 rounded-full bg-sec-orange cursor-pointer shadow-[inset_0_-2px_15px_0_rgba(199,199,199,0.25),inset_0_4px_15px_0_rgba(199,199,199,0.25)">
{text}    </button>
  );
}

