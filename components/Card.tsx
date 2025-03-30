import Image from "next/image";

interface Props {
  border?: "none";
  children: React.ReactNode;
  className?: string;
  radius?: "full" | "md" | "none";
  backgroundImage?: string;
}

export default function Card(props: Props) {
  const radiusClasses = {
    full: "rounded-full",
    md: "rounded-md",
    none: "",
  };

  const borderClasses = props.border === "none" ? "" : "border ";

  const radiusClass = props.radius ? radiusClasses[props.radius] : "rounded-md";

  return (
    <div
      className={`p-2 h-full w-full relative flex justify-center items-center border-neutral-700 font-sans text-neutral-300 overflow-hidden ${borderClasses} ${radiusClass} ${
        props.className || ""
      }`}
    >
      {props.children}

      {props.backgroundImage && (
        <Image
          src={props.backgroundImage}
          alt="bg"
          width={100}
          height={100}
          className={`z-0 h-full w-full absolute top-0 left-0 opacity-45 ${radiusClass}`}
        />
      )}
    </div>
  );
}
