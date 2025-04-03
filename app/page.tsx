import Card from "@/components/Card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "@/components/Link";
import Clock from "@/components/Clock";
import Education from "@/components/Education";
import Computer from "@/public/Computer";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex justify-center items-center py-10 px-4 bg-black">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 grid-rows-auto bg-black md:grid-rows-6 divide-x divide-y border border-zinc-800 relative">
        {/* Profile Card */}
        <Card className="row-span-1 col-span-full md:col-span-3 gap-3">
          <Image
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
          <Clock />
        </Card>

        {/* About Card */}
        <Card className="row-span-1 col-span-3 text-sm font-medium text-center">
          {
            "Hi, I'm Devansh Bhavsar 1'st year computer science student from GLS University, Ahmedabad, Gujarat."
          }
        </Card>

        {/* Computer Card */}
        <Card className="row-span-4 col-span-2 md:col-span-3">
          <Computer />
        </Card>

        {/* Education Card */}
        <Card className="row-span-3 col-span-3 md:col-span-3 flex-col justify-start items-start gap-4">
          <h2 className="text-xl font-bold">Education & Courses</h2>

          <Education
            institute="100xDevs Cohort 3"
            startYear={2025}
            endYear={"Present"}
            active={true}
          />
          <Education
            institute="GLS University, Computer Science"
            startYear={2024}
            endYear={"Present"}
            active={true}
          />
          <Education
            institute="HSC"
            startYear={2022}
            endYear={2024}
            active={false}
          />
          <Education
            institute="Harvard's CS50P (Python)"
            startYear={2022}
            endYear={2024}
            active={false}
          />
          <Education
            institute="SSC"
            startYear={2020}
            endYear={2022}
            active={false}
          />
        </Card>

        {/* Certificates Card */}
        <Card className="row-span-1 col-span-3 md:col-span-3 flex-col justify-start items-start gap-3 border-b-0 ">
          <h2 className="text-xl font-bold">Certificates</h2>
          <ul className="h-full w-full list-inside list-disc">
            <Certificate
              title="CVMU Hackathon"
              url="https://3kzwnzp8m3.ufs.sh/f/RUEHGMs1XJU6OKNOzAhicA0gzmWZ4XrJYxLvjh6EMBKU8e5k"
            />
            <Certificate
              title="Harvad's CS50P (Python)"
              url="https://3kzwnzp8m3.ufs.sh/f/RUEHGMs1XJU6GLCd2no3lwCaO54YvS1m6yuMEhfF0IqZ7Ni9"
            />
          </ul>
        </Card>

        {/* Tech Stack Card */}
        <Card className="p-0 flex-col relative">
          <div className="absolute z-10 top-0 left-0 bg-linear-to-b from-black to-black blur-md w-full h-[45%]"></div>
          <div className="absolute z-10 bottom-0 left-0 bg-linear-to-b from-black to-black blur-md w-full h-[45%]"></div>
          {/* @ts-expect-error marqee_error */}
          <marquee
            behavior="scroll"
            direction="up"
            scrollamount="1"
            className="relative z-0 h-16 overflow-hidden *:text-xs *:font-medium *:text-neutral-200"
          >
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>VITE</p>
            <p>React</p>
            <p>TailwindCSS</p>
            <p>Typescript</p>
            <p>Postgres</p>
            <p>Prisma</p>
            <p>NextJS</p>
            <p>NextAuth</p>
            <p>NVIM</p>
            <p>Bun</p>
            <p>Zig</p>
            <p>Figma</p>
            <p>AWS</p>
            <p>GCP</p>
            <p>Docker</p>
            <p>Python</p>
            {/* @ts-expect-error marqee_error */}
          </marquee>
        </Card>

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
