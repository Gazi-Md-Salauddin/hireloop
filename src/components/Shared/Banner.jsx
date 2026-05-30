"use client";

import {
  Magnifier,
  Briefcase,
  MapPin,
} from "@gravity-ui/icons";

import { Button, Input, Chip } from "@heroui/react";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden bg-black/90 text-white"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-[70%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />

      {/* Stars Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#6d5dfc_1px,transparent_1px)] [background-size:30px_30px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center py-6">

        {/* Top Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
          <Briefcase width={18} height={18} />

          <p className="text-sm tracking-widest text-gray-300 uppercase">
            <span className="font-bold text-white">
              50,000+
            </span>{" "}
            New Jobs This Month
          </p>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* Search Box */}
        <div className="mt-14 flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl md:flex-row md:items-center">

          {/* Job Search */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <Magnifier width={22} height={22} className="text-gray-400" />

            <Input
              type="text"
              variant="underlined"
              placeholder="Job title, skill or company"
              className={{
                input:
                  "text-white placeholder:text-gray-500",
                inputWrapper:
                  "bg-transparent shadow-none border-none",
              }}
            />
          </div>

          {/* Location */}
          <div className="flex flex-1 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <MapPin width={22} height={22} className="text-gray-400" />

            <Input
              type="text"
              variant="underlined"
              placeholder="Location or Remote"
              className={{
                input:
                  "text-white placeholder:text-gray-500",
                inputWrapper:
                  "bg-transparent shadow-none border-none",
              }}
            />
          </div>

          {/* Search Button */}
          <Button
            isIconOnly
            radius="full"
            className="h-14 w-full md:w-20 bg-violet-600 text-white hover:bg-violet-500"
          > 
            <Magnifier width={26} height={26} />
          Search
          </Button>
        </div>

        {/* Trending Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <p className="text-gray-400">
            Trending Position
          </p>

          <Chip
            variant="flat"
            className="bg-white/10 px-4 py-5 text-gray-300"
          >
            Product Designer
          </Chip>

          <Chip
            variant="flat"
            className="bg-white/10 px-4 py-5 text-gray-300"
          >
            AI Engineering
          </Chip>

          <Chip
            variant="flat"
            className="bg-white/10 px-4 py-5 text-gray-300"
          >
            DevOps Engineer
          </Chip>
        </div>
      </div>
    </section>
  );
}
export default Banner