import { ExternalLink, Github } from "lucide-react";
import Link from "./Link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  url: string;
  github: string;
  description: string;
  image: string;
  favicon?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div className="group bg-neutral-900 py-2 px-4 rounded-md w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-center items-center gap-3">
          {props.favicon && (
            <img src={`${props.favicon}`} alt="favicon" className="w-7 h-7" />
          )}
          <p className="text-lg font-medium">{props.title}</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link href={props.github}>
            <Github size={16} />
          </Link>
          <Link href={props.url}>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
      <div className="text-sm mb-2">{props.description}</div>

      <div className="group-hover:block hidden bg-neutral-800 w-full h-52 mb-2 rounded-md">
        <a href={props.url} target="_blank">
          <Image
            src={props.image}
            alt="demo"
            width={200}
            height={200}
            className="cursor-pointer w-full h-full rounded-md"
          />
        </a>
      </div>
    </div>
  );
}
