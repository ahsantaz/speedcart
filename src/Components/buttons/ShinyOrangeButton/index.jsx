import { div } from "framer-motion/client";
import "./shine.css";
import { Link } from "react-router";

export default function ShinyOrangeButton({ text, link }) {
  return (
    <Link to={link}>
   <div class="box p-3 rounded-4xl text-white font-[600] cursor-pointer">{text}</div>
   </Link>

  );
}
