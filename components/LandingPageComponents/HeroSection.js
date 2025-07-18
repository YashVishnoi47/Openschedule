"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import DummyMeetingCard from "./DummyMeetingcard";
import StartButton from "../StartButton";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();

  const handleClick = () => {
    router.push("/sign-up");
  };

  return (
    <div className="w-full flex flex-col justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 border-black items-center h-[30%]">
      <div className="w-full h-full flex flex-col justify-center border-black items-center">
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 flex flex-col justify-center items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[95%] sm:w-[92%] md:w-[90%] leading-tight sm:leading-tight md:leading-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Scheduling, the way it should be - simple, elegant, and free
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[92%] md:w-[90%] font-medium leading-relaxed sm:leading-relaxed md:leading-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <span className="font-bold border-b border-white hover:border-black transition-all duration-200 ease-in-out cursor-default">
              wecanmeet
            </span>{" "}
            makes booking meetings simple — no fees, no friction, just clean
            scheduling.
          </motion.p>

          {/* Call to Action Button */}
          <div className="w-[95%] sm:w-[92%] md:w-[90%] flex justify-center items-center pt-2 sm:pt-3 md:pt-4">
            <StartButton handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
