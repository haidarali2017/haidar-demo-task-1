"use client";

import React from "react";
import Image from "next/image";

const Main = () => {
  return (
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
                  <div style={{ position: "relative", width: "100%", height: 400 }}>
                    <Image
                      src="/assets/images/bg/empower.png"
                      alt="Empower Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="empower-bottom">
              <div className="row g-5">
                {[1, 2, 3, 4].map((i) => {
                  const titles = [
                    "Blockchain Infrastructure",
                    "Ensure Accessibility",
                    "Bridge Finance & Comm-erce",
                    "Champion Decentralization",
                  ];
                  const descriptions = [
                    "MetaFusion Labs is a blockchain solutions company officially registered in Panama, serving as the parent organization behind the ECM Ecosystem.",
                    "Make Web3 tools and platforms easy to use and available to everyone—businesses and individuals alike.",
                    "Develop robust systems capable of supporting large-scale dece-ntralized applications.",
                    "Promote transparent, decentralized technologies that empower users and remove centralized control.",
                  ];
                  return (
                    <div key={i} className="col-md-6 col-xl-3">
                      <div className={`single-empower-card single-empower-card-${i}`}>
                        <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                          <div
                            className="empower-icon"
                            style={{ position: "relative", width: 64, height: 64 }}
                          >
                            <Image
                              src={`/assets/images/icon/power-${i}.png`}
                              alt={`Power ${i} Icon`}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                          <h3 className="p-0 pt-md-3 pb-md-3">{titles[i - 1]}</h3>
                        </div>
                        <p>{descriptions[i - 1]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
