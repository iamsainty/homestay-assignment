"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-muted-foreground">
          <MdOutlineHomeWork className="text-xl md:text-2xl" />
          Welcome to <span className="font-bold">Chirag&apos;s Homestay </span>
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight tracking-tight">
          Your Home in the Heart of Nainital
        </h1>
        <p className="mt-5 text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Tired of searching for the perfect stay in Nainital? Relax —
          you&apos;ve just found it.
        </p>
        {/* when clicked on button scroll down to Auth component */}
        <Button
          className="mt-8 text-sm md:text-base px-6 py-3 md:px-8 md:py-4 cursor-pointer rounded-full"
          onClick={() => {
            const authSection = document.getElementById("auth");
            if (authSection) {
              authSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book Your Stay Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
