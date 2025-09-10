// app/page.tsx
'use client'; // required for client-side JS (like scroll events)

import { useEffect } from 'react';
import lottie from 'lottie-web';
import Image from 'next/image';


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
      <header className="header-area">
      <div className="container extra-container">
        <div className="d-flex align-items-center justify-content-between header">
          <div className="logo fade-in-left">
           
            <a href="">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={150}  // specify actual width
                height={50}  // specify actual height
              />
            </a> 
            <button className="mobile-bars d-lg-none d-block">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>

          <div className="nav">
            <ul className="d-flex flex-lg-row flex-column align-items-center gx-4">
              <li className="fade-in-left nav-item-1">
                <a className="nav-link active" href="#home-section">Home</a>
              </li>
              <li className="fade-in-left nav-item-2">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="fade-in-left nav-item-3">
                <a className="nav-link" href="#ecmcoin">ECM Coin</a>
              </li>
              <li className="fade-in-left nav-item-4">
                <a className="nav-link" href="#ecosystem">Ecosystem</a>
              </li>
              <li className="fade-in-left nav-item-5 d-block d-lg-none">
                <a href="#footer" className="btn-1 nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="header-btn d-lg-block d-none">
            <div className="d-flex align-items-center">
              <a href="#" className="btn-1 fade-in-right btn-animate">Contact Us</a>
              <div className="dropdown fade-in-right dropdown-item-animate">
                <div className="position-relative">
                  <span
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                     <Image
                      src="/assets/images/icon/world.svg"
                      alt="World Icon"
                      width={24}  // set the width you need
                      height={24} // set the height you need
                    />
                    EN
                  </span>
                  <ul className="dropdown-menu country-dropdown">
                    <li><a className="dropdown-item active" href="#">EN</a></li>
                    <li><a className="dropdown-item" href="#">BN</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="hero-area section-link" id="home-section">
      <div className="ecosystem-icon-animation">
        <div className="ecosystem-icon ecosystem-icon-1"> 
          <Image
            src="/assets/images/icon/1.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
        <div className="ecosystem-icon ecosystem-icon-2"> 
          <Image
            src="/assets/images/icon/2.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
        <div className="ecosystem-icon ecosystem-icon-3"> 
          <Image
            src="/assets/images/icon/3.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
        <div className="ecosystem-icon ecosystem-icon-4"> 
          <Image
            src="/assets/images/icon/4.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
        <div className="ecosystem-icon ecosystem-icon-5"> 
          <Image
            src="/assets/images/icon/5.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
        <div className="ecosystem-icon ecosystem-icon-6"> 
          <Image
            src="/assets/images/icon/6.png"
            alt="Icon 1"
            width={50}   // set the actual width
            height={50}  // set the actual height
          />
        </div>
      </div>
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="toplight">
        <span className="small-shadow"></span>
      </div>
      <div className="hero-line hero-line1"> 
     
        <div style={{ position: 'relative', width: '100%', height: 20 }}>
        <Image
          src="/assets/images/bg/line.png"
          alt="line"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      </div>
      <div className="hero-line hero-line2">
        {/* <Image src="assets/images/bg/line.png" alt="img" /> */}
        <div style={{ position: 'relative', width: '100%', height: 20 }}>
        <Image
          src="/assets/images/bg/line.png"
          alt="line"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      </div>
      <div className="dots-background dotsBackground"></div>
      <div className="hero-card hero-card1">
        <h3>ECM Holders</h3>
        <p>20,153</p>
      </div>
      <div className="hero-card hero-card2">
        <h3>Total ECM Sold</h3>
        <p>20,153</p>
      </div>
      <div className="container">
        <div className="hero-content"> 
          <div className="style-2">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-10 offset-lg-1">
                <div className="hero-title reveal-wrapper">
                  <h1>
                    Architecting the Future of Digital Commerce MetaFusion Labs
                  </h1>
                </div>
              </div>
            </div>
          </div> 
          <div className="style-3">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="hero-title reveal-wrapper">
                  <p className="text-center mt-5">
                    Powering ECM Coin and its ecosystem—delivering scalable,
                    low-cost, blockchain infrastructure for e-commerce, trading
                    and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-btn-wrapper position-relative mt-5">
              <a href="#" className="hero-btn">
                <div className="light-particle"></div>
                <div className="light-particle"></div>
                <div className="light-particle"></div>
                <span>
                  Start Exploring
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main>
      <section className="empower-area section-link" id="about">
        <div className="ellipse ellipse-3"></div>
        <div className="dots-background dotsBackground"></div>
       
        <div id="lottie-empower"></div> 

        <div className="container empower-container">
   
          <div className="empower-content">
            <div className="row empower-top"> 
              <div className="col-lg-6 col-xl-6">
                <div className="empower-head-text text-center text-lg-start">
                  <h2>Empowering the Future of Blockchain</h2>
                  <p>
                    MetaFusion Labs is a blockchain solutions company officially
                    registered in Panama, serving as the parent organization
                    behind the ECM Ecosystem. With a strong focus on developing
                    decentralized infrastructure, MetaFusion Labs partners
                    strategically with BlockVerse Solutions LLC—an industry
                    leader in token issuance and blockchain development—to
                    deliver scalable, innovative Web3 solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="logo-thumbnails">
                  <div className="logo-thumbnails-set" id="target-box"></div>
                </div>
                <div className="empower-image-flip d-block d-xl-none">
                  <div style={{ position: 'relative', width: '100%', height: 400 }}>
                    <Image
                      src="/assets/images/bg/empower.png"
                      alt="Empower Image"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                </div>
              </div> 
            </div>
            <div className="empower-bottom">
              <div className="row g-5"> 
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card single-empower-card-1">
                    <div
                      className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start"
                    >
                   <div className="empower-icon" style={{ position: 'relative', width: 64, height: 64 }}>
                      <Image
                        src="/assets/images/icon/power-1.png"
                        alt="Power 1 Icon"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Blockchain Infrastructure
                      </h3>
                    </div>
                    <p>
                      MetaFusion Labs is a blockchain solutions company
                      officially registered in Panama, serving as the parent
                      organization behind the ECM Ecosystem.
                    </p>
                  </div>
                </div> 
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card">
                    <div
                      className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start"
                    >
                     <div className="empower-icon" style={{ position: 'relative', width: 64, height: 64 }}>
                        <Image
                          src="/assets/images/icon/power-2.png"
                          alt="Power 2 Icon"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>

                      <h3 className="p-0 pt-md-3 pb-md-3">Ensure Accessibility</h3>
                    </div>
                    <p>
                      Make Web3 tools and platforms easy to use and available to
                      everyone—businesses and individuals alike.
                    </p>
                  </div>
                </div> 
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card single-empower-card-3">
                    <div
                      className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start"
                    >
                     
                      <div className="empower-icon" style={{ position: 'relative', width: 64, height: 64 }}>
                        <Image
                          src="/assets/images/icon/power-3.png"
                          alt="Power 2 Icon"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Bridge Finance & Comm-erce
                      </h3>
                    </div>

                    <p>
                      Develop robust systems capable of supporting large-scale
                      dece-ntralized applications.
                    </p>
                  </div>
                </div> 
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card">
                    <div
                      className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start"
                    >
                   
                      <div className="empower-icon" style={{ position: 'relative', width: 64, height: 64 }}>
                        <Image
                          src="/assets/images/icon/power-4.png"
                          alt="Power 2 Icon"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Champion Decentralization
                      </h3>
                    </div>
                    <p>
                      Promote transparent, decentralized technologies that
                      empower users and remove centralized control.
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
    </>
  );
}
