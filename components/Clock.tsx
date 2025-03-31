"use client";

import { useEffect, useState } from "react";

export default function Clock() {
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
    <div className="rounded-full flex flex-col justify-center items-center w-full mb-1">
      <p className="text-xs font-medium">India</p>
      <p className="font-bold text-2xl">{currentTime}</p>
      <p className="font-semibold text-xs text-neutral-400">
        {new Date().toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </p>
    </div>
  );
}
