import Image from "next/image";

interface Props {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function Card(props: Props) {
  return (
    <div
      className={`p-2 flex w-full h-full justify-center items-center border-zinc-800 font-sans text-neutral-200  ${
        props.className || ""
      } overflow-hidden`}
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
