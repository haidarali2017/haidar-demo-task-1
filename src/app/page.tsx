// app/page.tsx
'use client'; // required for client-side JS (like scroll events)

import { useEffect } from 'react';
import lottie from 'lottie-web'; 
import Hero from "./components/Hero";
import Main from "./components/Main";


export default function HomePage() {
   useEffect(() => {
    // --- Scroll Section Highlight ---
    const sections = document.querySelectorAll(".section-link");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
      let current = "";
     sections.forEach((section) => {
        const htmlSection = section as HTMLElement; // cast to HTMLElement
        const sectionTop = htmlSection.offsetTop - 200;
        if (window.pageYOffset >= sectionTop) {
          current = htmlSection.getAttribute("id")!;
        }
      });


      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // --- Lottie Animation ---
    const animation = lottie.loadAnimation({
      container: document.getElementById("lottie-empower")!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "/assets/js/empower.json", // use public folder path
    });

    const handleLottieScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY >= 700) animation.play();
    };

    window.addEventListener("scroll", handleLottieScroll);

    // --- Video Playback Rate ---
    const video = document.getElementById("bg-video") as HTMLVideoElement;
    if (video) video.playbackRate = 0.7;

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleLottieScroll);
    };
  }, []);

  return (
    <>
    <Hero />
    <Main />
     
    </>
  );
}
