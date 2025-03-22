import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  radius?: "full" | "md" | "none";
}

export default function Card(props: Props) {
  // Use a proper mapping for radius values
  const radiusClasses = {
    full: "rounded-full",
    md: "rounded-md",
    none: "",
  };

  const radiusClass = props.radius ? radiusClasses[props.radius] : "rounded-md";

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`p-4 border border-neutral-800 text-neutral-300 ${radiusClass} ${
        props.className || ""
      }`}
    >
      {props.children}
    </motion.div>
  );
}
