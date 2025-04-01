interface EducationProps {
  institute: string;
  startYear: string | number;
  endYear: string | number;
  active: boolean;
}

export default function Education(props: EducationProps) {
  const activeEducationStyle = props.active
    ? "bg-green-400 "
    : "bg-neutral-500";

  return (
    <div className="flex justify-start items-center gap-3 relative">
      <div
        className={`z-10 h-3 w-3 rounded-full flex justify-center items-center ${
          props.active ? "bg-green-700" : "bg-neutral-700"
        }`}
      >
        <p className={`h-1.5 w-1.5 rounded-full ${activeEducationStyle}`} />
      </div>

      <hr className="absolute top-5 left-1.5 -translate-x-1/2 border h-10 border-zinc-700" />

      <div>
        <p className="text-sm font-semibold">{props.institute}</p>
        <p className="text-xs font-medium text-neutral-400">
          {props.startYear} - {props.endYear}
        </p>
      </div>
    </div>
  );
}
