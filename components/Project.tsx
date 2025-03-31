import { ExternalLink, Github } from "lucide-react";
import Link from "./Link";
import Image from "next/image";
import Tag from "./Tag";

interface ProjectProps {
  title: string;
  url: string;
  github: string;
  description: string;
  image: string;
  favicon?: string;
  tags?: string[];
}

export default function Project(props: ProjectProps) {
  return (
    <div className="border border-neutral-700 p-2 rounded-md w-full space-y-2">
      <div className="group w-full h-52 rounded-md overflow-hidden">
        <a href={props.url} target="_blank">
          <Image
            src={props.image}
            alt="demo"
            width={200}
            height={200}
            className="group-hover:opacity-70 cursor-pointer w-full h-full rounded-md scale-125"
          />
        </a>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          {props.favicon && (
            <img src={`${props.favicon}`} alt="favicon" className="w-7 h-7" />
          )}
          <p className="text-md font-semibold">{props.title}</p>
        </div>
        <Link bgEffect={true} href={props.github}>
          <Github size={16} />
        </Link>
      </div>
      <div className="text-xs font-normal mb-2 text-neutral-300">
        {props.description}
      </div>

      <div className="flex justify-between items-baseline">
        <div className="flex justify-start items-center gap-2">
          {props.tags &&
            props.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
        </div>
        <Link bgEffect={true} href={props.url}>
          <div className="flex justify-center items-center gap-2 px-2">
            <p className="text-sm font-medium">Visit</p>
            <ExternalLink size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
}
