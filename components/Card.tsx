import Image from "next/image";

interface Props {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function Card(props: Props) {
  return (
    <div
      className={`p-2 h-full w-full relative flex justify-center items-center border-neutral-700 font-sans text-neutral-300 overflow-hidden ${
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
          className="z-0 h-full w-full absolute top-0 left-0 opacity-45"
        />
      )}
    </div>
  );
}
