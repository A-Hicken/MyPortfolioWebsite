"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="block text-primary-400 text-2xl sm:text-3xl lg:text-4xl mt-2 tracking-tight">
              Hello, I&apos;m
            </span>
            <span className="block">Amberlie</span>
            <span className="block text-primary-400 text-2xl sm:text-3xl lg:text-4xl mt-2">
              Full Stack Developer (React / .NET)
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-3xl">
            I build clean, scalable, and API-driven applications using React,
            .NET, and modern web technologies. I focus on thoughtful UI,
            performance, and creating seamless user experiences backed by
            reliable backend systems.
          </p>

          <div className="mt-8 mb-8 flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">
              Tech Stack
            </span>

            <div className="flex flex-wrap gap-3">
              {["React", "JavaScript", "C#", ".NET", "REST APIs", "SQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary-400/50 bg-primary-400/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-0 sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>

            <a
              href="/Amberlie_Hicken_Resume2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden ring-2 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Image
              src="/images/resume_photo.jpeg"
              alt="Amberlie Hicken"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
