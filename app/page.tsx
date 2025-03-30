"use client";

import Card from "@/components/Card";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Linkedin,
  LinkIcon,
  Mail,
  Twitter,
  X,
} from "lucide-react";
import Link from "@/components/Link";
import { useEffect, useState } from "react";
import Project from "@/components/Project";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>("00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toTimeString().split(" ")[0]);
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="w-screen min-h-screen flex justify-center items-center py-10 px-4 bg-neutral-950">
      <div className="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 grid-rows-auto md:grid-rows-6 gap-3">
        {/* Greetings Card */}
        <Card
          border="none"
          className="row-span-1 col-span-4 flex justify-start items-end"
        >
          <p className="px-10 text-3xl font-bold font-serif">
            {/* TODO: Add dynamic greetings */}
            Good Afternoon, Hi
          </p>
        </Card>

        {/* Time Card */}
        <Card
          radius="md"
          className="row-span-3 col-span-full md:col-span-2 flex-col gap-3 relative"
        >
          {/* Globe */}
          <div className="text-center w-full h-44 rounded-md border border-neutral-800 bg-neutral-900 relative overflow-hidden">
            {/* TODO: Highlight india on the map when hovered */}
            <div className="absolute -bottom-10 hover:-bottom-5 hover:-right-7 -right-10 h-52 w-52 rounded-full hover:scale-200 transition-all duration-400 bg-radial-[at_25%_25%] from-neutral-200 to-zinc-900 to-75%">
              <Image
                src="/globe.png"
                alt="Earth globe"
                width={200}
                height={200}
                className="cursor-pointer w-full h-full scale-125 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Day and Time */}
          <div className="bg-neutral-950 rounded-full flex flex-col justify-center items-center mb-3">
            <p className="text-sm">India</p>
            <p className="font-bold text-4xl">{currentTime}</p>
            <p className="font-medium text-sm">
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="row-span-5 col-span-full md:col-span-4 flex-col justify-start items-start gap-3 max-h-full overflow-y-auto">
          <h2 className="text-3xl font-bold m-2">Projects</h2>
          <Project
            title="Drawify"
            github="https://github.com/DevanshBhavsar3/excalidraw"
            url="http://drawify.devanshbhavsar.tech"
            image="/homepages/drawify_homepage.png"
            favicon="/favicons/drawify_favicon.ico"
            description="From real-time collaboration and powerful customization to
              intuitive tools and seamless workflows."
          ></Project>
          <Project
            title="Brainly"
            github="https://github.com/DevanshBhavsar3/Brainly"
            url="https://brainly-sigma.vercel.app"
            image="/homepages/brainly_homepage.png"
            favicon="/favicons/brainly_favicon.svg"
            description="Organize your thoughts, fuel your creativity, and achieve your goals. Start building your knowledge base today."
          ></Project>
          <Project
            title="Coursify"
            github="https://github.com/DevanshBhavsar3/Coursify"
            url="https://coursify-sage.vercel.app"
            image="/homepages/coursify_homepage.png"
            description="Browse Courses & Find Your Fit."
          ></Project>
        </Card>

        {/* Profile Card */}
        <Card
          className="row-span-1 col-span-full md:col-span-4 flex justify-center items-center relative overflow-hidden"
          radius="full"
        >
          <div className="flex items-center justify-center gap-3 z-10">
            <img
              src="https://avatars.githubusercontent.com/u/129303370?s=400&u=e9c54f80d3e6c6baf41ac093b748e1e25852420c&v=4"
              className="rounded-full"
              width={50}
              height={50}
              alt="Profile picture of Devansh Bhavsar"
            />
            <span className="font-bold text-2xl md:text-3xl tracking-tight">
              Devansh Bhavsar
            </span>
          </div>
        </Card>

        {/* Experience Card */}
        <Card
          className="row-span-4 col-span-full md:col-span-3"
          backgroundImage="/abstract.png"
        >
          <h2 className="text-xl font-bold mb-3">Experience</h2>
          <p>Your relevant work or project experience</p>
        </Card>

        {/* Education Card */}
        <Card className="row-span-2 col-span-full md:col-span-3">
          <h2 className="text-xl font-bold mb-3">Education</h2>
          <p>GLS University, Computer Science</p>
          <p className="text-sm text-neutral-400">2024 - Present</p>
        </Card>

        {/* Contact Card */}
        <Card className="col-span-full md:col-span-5">Hi</Card>

        {/* Socials Card */}
        <Card className="col-span-full md:col-span-2 justify-evenly">
          <Link href="https://x.com/CluxOP">
            <Twitter />
          </Link>
          <Link href="https://github.com/DevanshBhavsar3">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/devansh-bhavsar-446337327/">
            <Linkedin />
          </Link>
        </Card>
      </div>
    </main>
  );
}
