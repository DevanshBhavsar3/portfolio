import Card from "@/components/Card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "@/components/Link";
import Clock from "@/components/Clock";
import Education from "@/components/Education";
import Computer from "@/public/Computer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex justify-center items-center py-10 px-4 bg-linear-to-b from-[#1E1E1E] to-[#121212]">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 grid-rows-auto md:grid-rows-6 divide-x divide-y border border-neutral-700 relative">
        {/* Profile Card */}
        <Card className="row-span-1 col-span-full md:col-span-3 gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/129303370?s=400&u=e9c54f80d3e6c6baf41ac093b748e1e25852420c&v=4"
            className="rounded-full"
            width={50}
            height={50}
            alt="Profile picture"
          />
          <div className="tracking-tight">
            <p className="font-bold text-2xl">Devansh Bhavsar</p>
            <p className="font-semibold text-sm">Full-Stack Developer</p>
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="col-span-4 row-span-6 flex-col justify-start items-start p-4 overflow-hidden">
          <Projects />
        </Card>

        {/* Time Card */}
        <Card className="row-span-1 col-span-full md:col-span-3">
          {/* Globe
          <div className="text-center w-full rounded-md border border-neutral-800 bg-neutral-900 relative overflow-hidden h-full">
            TODO: Highlight india on the map when hovered
            <div className="absolute -bottom-10 hover:-bottom-5 hover:-right-7 -right-10 h-52 w-52 rounded-full hover:scale-200 transition-all duration-400 bg-radial-[at_25%_25%] from-neutral-200 to-zinc-900 to-75%">
              <Image
                src="/globe.png"
                alt="Earth globe"
                width={200}
                height={200}
                className="cursor-pointer w-full h-full scale-125 rounded-full object-cover"
              />
            </div>
          </div> */}

          <Clock />
        </Card>

        {/* About Card */}
        <Card className="row-span-1 col-span-3 text-sm font-medium text-center">
          Hi, I'm Devansh Bhavsar 1'st year computer science student from GLS
          University, Ahmedabad, Gujarat.
        </Card>

        <Card className="row-span-4 col-span-2 md:col-span-3">
          <Computer />
        </Card>

        {/* Education Card */}
        <Card className="row-span-4 col-span-3 md:col-span-3 flex-col justify-start items-start gap-3 border-b-0 p-4">
          <h2 className="text-xl font-bold text-[#EEEEEE]">Education</h2>
          <Education
            institute="GLS University, Computer Science"
            startYear={2024}
            endYear={"Present"}
            active={true}
          />
          <Education
            institute="7"
            startYear={2022}
            endYear={2024}
            active={false}
          />
          <Education
            institute="6"
            startYear={"..."}
            endYear={2022}
            active={false}
          />
          <Education
            institute="5"
            startYear={"..."}
            endYear={2022}
            active={false}
          />
          <Education
            institute="3"
            startYear={"..."}
            endYear={2022}
            active={false}
          />
          <Education
            institute="1"
            startYear={"..."}
            endYear={2022}
            active={false}
          />
          <Education
            institute="1"
            startYear={"..."}
            endYear={2022}
            active={false}
          />
        </Card>

        <Card>Cat</Card>

        {/* Socials Card */}
        <Card className="col-span-full md:col-span-2 justify-evenly relative">
          <Link bgEffect={true} href="https://x.com/CluxOP">
            <Twitter size={24} />
            <div className="group-hover:visible invisible absolute text-4xl font-bold -bottom-1 -right-100 group-hover:right-1 text-neutral-800 transition-all duration-300">
              Twitter
            </div>
          </Link>
          <Link bgEffect={true} href="https://github.com/DevanshBhavsar3">
            <Github size={24} />
            <div className="group-hover:visible invisible absolute text-4xl font-bold -bottom-1 -right-100 group-hover:right-1 text-neutral-800 transition-all duration-300">
              Github
            </div>
          </Link>
          <Link
            bgEffect={true}
            href="https://www.linkedin.com/in/devansh3bhavsar"
          >
            <Linkedin size={24} />
            <div className="group-hover:visible invisible absolute text-4xl font-bold -bottom-1 -right-100 group-hover:right-1 text-neutral-800 transition-all duration-300">
              LinkedIn
            </div>
          </Link>
        </Card>
      </div>
    </main>
  );
}
