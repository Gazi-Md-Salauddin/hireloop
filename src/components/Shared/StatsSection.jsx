"use client";

import Image from "next/image";
import {
  Briefcase,
  Factory,
  Magnifier,
  Star,
} from "@gravity-ui/icons";

const StatsSection = () => {
  const stats = [
    {
      icon: <Briefcase width={24} height={24} />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      icon: <Factory width={24} height={24} />,
      value: "12K",
      label: "Companies",
    },
    {
      icon: <Magnifier width={24} height={24} />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: <Star width={24} height={24} />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-top" style={{backgroundImage: "url('/images/globe.png')"}}>
        

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Purple Glow */}
        <div className="absolute left-1/2 top-26 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">

        {/* Heading */}
        <div className="max-w-4xl mt-114">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Assisting over{" "}
            <span className="text-violet-400">
              15,000 job seekers
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-300 md:text-3xl">
            find their dream positions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-black/50 p-8 text-left backdrop-blur-xl transition duration-300 hover:border-violet-500/40 hover:bg-black/70"
            >
              <div className="mb-10 text-gray-300">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-4 text-lg text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection