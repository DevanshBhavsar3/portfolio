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
  maximized: boolean;
}

export default function Project(props: ProjectProps) {
  return (
    <div
      className={`border border-zinc-800 p-2 rounded-md w-full space-y-4 space-x-2 ${
        props.maximized && "flex justify-start items-start h-1/2 w-full"
      }`}
    >
      <a href={props.url} target="_blank" className="w-1/2 h-full">
        <Image
          src={props.image}
          alt="demo"
          width={200}
          height={200}
          className="group-hover:opacity-70 cursor-pointer h-full w-full rounded-md aspect-video"
        />
      </a>
      <div className="w-full h-full flex justify-center items-start flex-col space-y-2">
        <div className="flex justify-center items-center gap-3">
          {props.favicon && (
            <img src={`${props.favicon}`} alt="favicon" className="w-7 h-7" />
          )}
          <p className="text-md font-semibold">{props.title}</p>
        </div>
        {props.maximized ? (
          <div className="flex-1 text-sm font-medium mb-2 text-neutral-300">
            {props.description}
          </div>
        ) : (
          <div className="flex-1 text-xs font-normal mb-2 text-neutral-300 max-w-md truncate">
            {props.description}
          </div>
        )}

        <div
          className={`w-full flex justify-between items-baseline ${
            props.maximized && "flex-col gap-2"
          }`}
        >
          <div className="flex justify-start items-center gap-2">
            {props.tags &&
              props.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
          </div>
          <div className="flex justify-center items-center">
            <Link bgEffect={true} href={props.github}>
              <div className="flex justify-center items-center gap-2 px-2">
                <p className="text-sm font-medium">Github</p>
                <Github size={16} />
              </div>
            </Link>
            <Link bgEffect={true} href={props.url}>
              <div className="flex justify-center items-center gap-2 px-2">
                <p className="text-sm font-medium">Visit</p>
                <ExternalLink size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
