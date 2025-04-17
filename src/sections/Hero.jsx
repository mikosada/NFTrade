import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/heromodels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Counter from "../components/Counter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      { y: 0, opacity: 1, stagger: 1.5, duration: 4, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".hero-image",
      {
        y: 50,
        opacity: 0,
      },
      { y: 0, opacity: 1, stagger: 1.5, duration: 4, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="bg.png" alt="background" className="" />
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Where{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Meets Blockchain:</h1>
              <h1>Own the Future of Creativity</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Your Gateway to Exclusive Digital Art, Collectibles, and Metaverse
              Assets.<br /> Built on a Secure, Decentralized Platform.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Explore"
            />
          </div>
        </header>
        {/* Right: Hero Content */}
        <figure className="hidden md:block">
          <div className="hero-d-layout hero-image">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <Counter />
    </section>
  );
};

export default Hero;
