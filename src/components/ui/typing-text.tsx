"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TypingText = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!textRef.current || !cursorRef.current) return;

    const el = textRef.current;

    const sentences: string[] = [
      "Discover, Buy, and Sell <br/> Digital Products",
      "Sell for Free, <br/> Pay Only When You Earn",
      "Instant Payouts, <br/> Full Control, No Limits",
      "Buy Once, Download <br/> Anytime, Keep Forever"
    ];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    sentences.forEach((sentence) => {
      const chars = sentence.match(/<br\s*\/?>|./g) || [];
      tl.to(
        {},
        {
          duration: chars.length * 0.08,
          onStart: () => {
            el.innerHTML = "";
          },
          onUpdate: function () {
            const progress = this.progress();
            const charCount = Math.floor(progress * chars.length);
            el.innerHTML = chars.slice(0, charCount).join("");
          },
        }
      )
        .to({}, { duration: 2 })
        .to(
          {},
          {
            duration: chars.length * 0.05,
            onUpdate: function () {
              const progress = this.progress();
              const remaining = Math.floor(progress * chars.length);
              el.innerHTML = chars.slice(0, chars.length - remaining).join("");
            },
          }
        );
    });

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  }, []);

  return (
    <h1 className="text-3xl md:text-[3em] font-semibold leading-[1.1] tracking-tight pb-6 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] min-h-[90px] md:min-h-[180px] whitespace-pre ease-in-out text-center">
      <span ref={textRef}></span>
      <span ref={cursorRef} className="inline-block">
        |
      </span>
    </h1>
  );
};

export default TypingText;
