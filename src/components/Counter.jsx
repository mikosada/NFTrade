import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Counter = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.fromTo(
      ".counter-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
      }
    );

    tl.to(
      ".counter-item",
      {
        y: 10,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.2,
      },
      "+=1"
    );
  });

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32 md:mt-60">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-purple-800 rounded-lg p-6 md:p-10 flex flex-col justify-center counter-item">
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} delay={5} />
            </div>
            <div className="text-white-50 font-semibold text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
