import React from "react";
import IconCloud from "./Globe";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "nextjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "postman",
  "mongodb",
  "cloudflare",
  "cloudflareworkers",
  "postgresql"
];

export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="grid grid-cols-3 w-full h-full p-8 gap-8">
        <div className="ml-4 flex flex-col col-span-2 justify-center items-start p-8">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Ayush Vekariya
          </p>
          <p className="text-center text-4xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Coming Soon ...
          </p>
        </div>
        <div className="flex items-center justify-center p-8">
          <div className="relative flex h-80 w-80 items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-700 p-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}
