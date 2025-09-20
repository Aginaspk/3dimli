"use client";
import Link from "next/link";
import TypingText from "./ui/typing-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bubbles from "./bubbles/bubbles";
import { useRef } from "react";
import SectionTwo from "./SectionTwo";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const shineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    tl.to(".b1", { x: 0, y: 0, scale: 0, ease: "none" })
      .to(".b2", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b3", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b4", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b5", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b6", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b7", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b8", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b9", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b10", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%")
      .to(".b11", { x: 0, y: 0, scale: 0, ease: "none" }, "-=50%");

    tl.to(".hero-content1", { y: -80, opacity: 0, duration: 1 }, "-=40%")
      .to(".hero-content2", { y: -80, opacity: 0, duration: 1 }, "-=60%")
      .to(".hero-content3", { y: -80, opacity: 0, duration: 1 }, "-=80%");

    if (shineRef.current) {
      gsap.fromTo(
        shineRef.current,
        { x: "-100%" },
        {
          x: "100%",
          duration: 3,
          repeat: 1,
          ease: "power2.inOut",
        }
      );
    }
  }, []);

  return (
    <section className="hero-section relative h-screen w-full">
      <Bubbles />
      <div className=" w-full h-full flex flex-col justify-center items-center z-[100] relative">
        <div className="hero-content1 w-full flex justify-center items-center">
          <TypingText />
        </div>

        <div className="hero-content2 flex justify-center items-center">
          <p className="text-[10px] md:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16 text-center">
            Your one-stop digital platform for 3D models and digital creations.
            <br className="hidden md:block" />
            Join our community of creators and collectors today.
          </p>
        </div>

        <div className="hero-content3 w-full flex justify-center items-center">
          <Link
            href="/"
            className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors
      text-[10px] z-[200] md:text-base font-medium py-[0.514rem] px-[0.9375rem] md:py-3.5 md:px-6
      bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.3%,32.2%)] text-neutral-50 dark:bg-transparent dark:border
      dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[156px] md:w-[15rem]
      overflow-hidden"
          >
            Explore all products
            <div
              ref={shineRef}
              className="absolute top-0 left-0 w-full h-full pointer-events-none transform -skew-x-12 opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)",
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
