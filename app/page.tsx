"use client";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex justify-center items-center py-10 px-4 bg-neutral-950">
      <div className="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 grid-rows-auto md:grid-rows-6 gap-3">
        {/* Profile Card with Animation */}
        <Card
          className="row-span-2 col-span-full md:col-span-4 font-manrope flex justify-center items-center relative overflow-hidden"
          radius="full"
        >
          <motion.div
            variants={{
              initial: {
                width: "50px",
                height: "50px",
                left: "20%",
                borderRadius: "100%",
              },
              hover: {
                left: "0%",
                width: "600px",
                height: "600px",
              },
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute  bg-white z-0"
          />

          {/* Profile Information */}
          <motion.div
            className="flex items-center justify-center gap-3 z-10"
            variants={{
              initial: { opacity: 1 },
              hover: { opacity: 0 },
            }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <Image
              src="/profile_pic.jpg"
              alt="Profile picture of Devansh Bhavsar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-bold text-2xl md:text-3xl tracking-tight">
              Devansh Bhavsar
            </span>
          </motion.div>

          {/* Bio Information */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6"
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="font-medium text-black text-center max-w-md">
              I'm Devansh, 1st year computer science student from GLS
              University, Ahmedabad, Gujarat. I am a passionate developer who
              loves to learn new technologies.
            </p>
          </motion.div>
        </Card>

        {/* Skills Card */}
        <Card className="row-span-2 col-span-full md:col-span-2">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "NextJS", "TypeScript", "TailwindCSS"].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-neutral-800 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="row-span-5 col-span-full md:col-span-4">
          <h2 className="text-xl font-bold mb-3">Featured Projects</h2>
          <p>Showcase your best work here with descriptions and links</p>
        </Card>

        {/* Experience Card */}
        <Card className="row-span-4 col-span-full md:col-span-3">
          <h2 className="text-xl font-bold mb-3">Experience</h2>
          <p>Your relevant work or project experience</p>
        </Card>

        {/* Education Card */}
        <Card className="row-span-3 col-span-full md:col-span-3">
          <h2 className="text-xl font-bold mb-3">Education</h2>
          <p>GLS University, Computer Science</p>
          <p className="text-sm text-neutral-400">2024 - Present</p>
        </Card>

        {/* Contact Card */}
        <Card className="col-span-full md:col-span-5">
          <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
          <div className="flex gap-4">
            <a
              href="mailto:your-email@example.com"
              className="hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </Card>

        {/* Last Card */}
        <Card className="col-span-full md:col-span-2">
          <p className="text-sm text-neutral-400">© 2025 Devansh Bhavsar</p>
        </Card>
      </div>
    </main>
  );
}
