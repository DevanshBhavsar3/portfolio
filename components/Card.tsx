interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card(props: Props) {
  return (
    <div
      className={`px-4 py-2 flex w-full h-full justify-center items-center border-zinc-800 font-sans text-neutral-200  ${
        props.className || ""
      } overflow-hidden`}
    >
      {props.children}
    </div>
  );
}
