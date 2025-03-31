export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="border border-neutral-700 w-fit px-2 py-0.5 rounded-full text-[10px]">
      {tag}
    </div>
  );
}
