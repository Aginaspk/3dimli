"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { TbChevronRight } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const shineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Shine animation for the button
    if (shineRef.current) {
      gsap.fromTo(
        shineRef.current,
        { x: "-100%" },
        {
          x: "100%",
          duration: 3,
          repeat: -1,
          ease: "power2.inOut",
        }
      );
    }

    // Slide in animation for the section content
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // triggers when section top hits 80% of viewport
        },
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-0 md:h-[26vh] z-100"
    >
      <div className="container h-fit md:h-[85vh] sm:px-6 z-40 5xl:h-[80vh] overflow-hidden md:top-0 grid place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-4 w-full">
          <div className="flex gap-6 flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[15px] md:text-2xl">Meet 3DIMLI</h2>
            <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-medium">
              <span className="inline-block mr-2">Your</span>
              <span className="inline-block mr-2">All-in-one</span>
              <span className="inline-block mr-2">Digital</span>
              <span className="inline-block mr-2">Commerce</span>
              <span className="inline-block mr-2">Platform</span>
            </h2>
            <p className="text-[11.25px] md:text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                Sell 3D Models, E-books, and digital products
              </span>{" "}
              effortlessly. Manage your store, deliver products seamlessly, and
              reach a global audience.
            </p>
            <Link
              href="/"
              className="relative overflow-hidden flex items-center justify-center rounded-full text-[8.7px] md:text-base font-medium py-[0.53rem] px-[0.94rem] md:py-3 md:px-6 bg-[rgb(2,132,199)] text-neutral-50 hover:bg-[hsl(201,96.3%,32.2%)] dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[150px] md:w-[15rem]"
            >
              Start Selling Now
              <TbChevronRight className="ml-2" />
              <div
                ref={shineRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none transform -skew-x-12 opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)",
                }}
              />
            </Link>
          </div>
          <div className="">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Meet-3DIMLI/3DIMLI-Creators.webm"
              className="w-full rounded-l-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
