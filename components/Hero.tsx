import React from "react";
import Image from "next/image";
import { useDarkMode } from "../lib/DarkModeContext";

interface HeroProps {
  heroHeading: string;
  heroDesc: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  const [isEnabled] = useDarkMode();
  const bgColor = isEnabled ? "bg-primary" : "bg-secondary";
  const textColor = isEnabled ? "text-secondary" : "text-primary";

  return (
    <>
      <article className={`hero min-h-screen ${bgColor}`}>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          {/* hero */}
          <section className="relative h-72 w-full lg:max-w-lg">
            <Image
              src="/hero.webp"
              layout="fill"
              priority
              alt="Girl character holding a Laptop and a Book."
              className=" rounded-lg shadow-2xl object-cover"
            />
          </section>
          <div className={`${textColor}`}>
            <h1 className="text-5xl font-bold">{props.heroHeading}</h1>
            <p className="py-6">{props.heroDesc}</p>
            <button className="btn btn-primary bg-accent border-accent">
              Get Started&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Hero;
