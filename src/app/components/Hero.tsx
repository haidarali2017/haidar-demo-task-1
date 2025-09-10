
"use client"; // required if you plan to use client-side interactivity

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-area section-link" id="home-section">
      <div className="ecosystem-icon-animation">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`ecosystem-icon ecosystem-icon-${i}`}>
            <Image
              src={`/assets/images/icon/${i}.png`}
              alt={`Icon ${i}`}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="toplight">
        <span className="small-shadow"></span>
      </div>

      <div className="hero-line hero-line1">
        <div style={{ position: "relative", width: "100%", height: 20 }}>
          <Image
            src="/assets/images/bg/line.png"
            alt="line"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="hero-line hero-line2">
        <div style={{ position: "relative", width: "100%", height: 20 }}>
          <Image
            src="/assets/images/bg/line.png"
            alt="line"
            fill
            style={{ objectFit: "contain" }}
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
  );
};

export default Hero;
