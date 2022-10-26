import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import Steps from "../components/Steps";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <main>
      {/* fixed element at top */}
      <DarkMode />
      <Head>
        <title>Setting up Next.js</title>
        <meta
          name="description"
          content="How to setup nextjs with tailwindcss and daisyUI."
        />
        <meta
          name="keywords"
          content="Nexjs, Setup Nextjs with tailwindcss and daisyUI, tailwindcss with daisyUI, how to setup nextjs, nextjs setup tutorial, "
        ></meta>
        <meta
          property="og:description"
          content="Setting up Next.js with tailwindcss and DaisyUI"
        />
        <meta property="og:image" content="/hero.webp" />
        <link
          rel="icon"
          href="https://cdn.dribbble.com/users/1303230/screenshots/10786710/1anime_avatar_4x.jpg"
        />
      </Head>
      <Hero
        heroHeading="Let's setup your Next.js!"
        heroDesc="Next.js with Tailwindcss and daisyUI makes your development fasteeer! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fugiat animi magni qui et hic esse, quae ipsa tempora dolorem?"
      />
      <Steps />
      <Footer />
    </main>
  );
};

export default Home;
