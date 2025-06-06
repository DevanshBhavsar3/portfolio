"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import Project from "./Project";
import { useState } from "react";

export default function Projects() {
  const [maximized, setMaximized] = useState(false);

  return (
    <div
      className={`w-full h-full overflow-hidden flex flex-col duration-300 ${
        maximized ? "absolute inset-0 z-30 p-4 bg-black" : "lg:max-h-150"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-xl font-bold">Projects</h2>
        <button
          onClick={() => setMaximized(!maximized)}
          className="hidden md:block cursor-pointer p-2 hover:bg-neutral-800 rounded-full"
        >
          {maximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Projects container */}
      <div className="overflow-y-auto flex-1 space-y-3 scrollbar rounded-md ">
        <Project
          title="Drawify"
          github="https://github.com/DevanshBhavsar3/excalidraw"
          url="http://drawify.devanshbhavsar.tech"
          image="/homepages/drawify_homepage.png"
          favicon="/favicons/drawify_favicon.ico"
          description="A collaborative drawing space where imagination meets innovation. Draw, shape, and co-create with friends. Utilize powerful AI tools to generate shapes and enhance your artistic workflow. From simple sketches to complex designs, your creativity knows no bounds."
          tags={["AI", "Canvas", "Graphics"]}
          maximized={maximized}
        />
        <Project
          title="Brainly"
          github="https://github.com/DevanshBhavsar3/Brainly"
          url="https://brainly-sigma.vercel.app"
          image="/homepages/brainly_homepage.png"
          favicon="/favicons/brainly_favicon.svg"
          description="Transform the chaos of the internet into organized knowledge. Save links from anywhere, watch YouTube videos directly, tag your content for easy retrieval, and share your curated collections with friends. Your second brain, simplified."
          tags={["Productivity"]}
          maximized={maximized}
        />
        <Project
          title="Coursify"
          github="https://github.com/DevanshBhavsar3/Coursify"
          url="https://coursify-sage.vercel.app"
          image="/homepages/coursify_homepage.png"
          description="Browse Courses & Find Your Fit."
          tags={["Frontend"]}
          maximized={maximized}
        />
      </div>
    </div>
  );
}
