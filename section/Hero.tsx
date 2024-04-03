"use client"
import { faCheckDouble, faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";



const Hero = () => {
  return (
    <>
      <div
        data-scroll-index={0}
        id="home"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="px-5 py-8 bg-white bg-nightBlack rounded-2xl hero-section md:p-8 lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black border lg:px-5 section-name border-platinum border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon icon={faHome} className="text-theme" />
            INTRODUCE
          </div>
          <div className="items-center gap-6 hero-content md:flex xl:gap-10">
            <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
              <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
                I Craft The <br />
                <span className="text-theme">Digital Landscape</span>
              </h1>
              <p>
                I am a{" "}
                <span className="font-medium text-black text-white/90">
                  Frontend Developer
                </span>{" "}
                at heart and, i create features that are best suited for the job
                at hand.
              </p>
              <ul className="flex items-center mt-4 -mx-3 lg:mt-5">
                <li className="flex items-center mx-3 text-regular">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="mr-2 text-theme"
                  />
                  Available for work
                </li>
                <li className="flex items-center mx-3 text-regular">
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className="mr-2 text-theme"
                  />
                  Full Time Job
                </li>
              </ul>
              <ul className="mt-7 buttons">
                <li data-scroll-nav={8}>
                  <a
                    href="#contact"
                    className="btn-theme inline-flex items-center gap-2 bg-theme text-power__black py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    HIRE ME
                  </a>
                </li>
              </ul>
            </div>
            <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
              <Image
                width={400}
                height={400}
                src="/img/hero.png"
                className="hidden"
                alt="Hero Image - Light Mode"
              />
              <Image
                width={400}
                height={400}
                src="/img/hero.png"
                className="block"
                alt="Hero Image - Dark Mode"
              />
            </div>
          </div>
          <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
            <div className="items-center grid-cols-12 overflow-hidden md:grid">
              <div className="hidden col-span-2 md:inline-block">
                <h6 className="font-medium text-black text-white/80 text-sm md:max-w-[8rem] border-l border-theme pl-4">
                  Experience Company
                </h6>
              </div>
              <div className="col-span-10 logo-slider">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop={true}
                >
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={50}
                        height={50}
                        src="/img/partners/1.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={50}
                        height={50}
                        src="/img/partners/2.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={70}
                        height={70}
                        src="/img/partners/3.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={150}
                        height={150}
                        src="/img/partners/4.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={150}
                        height={150}
                        src="/img/partners/5.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="transition duration-200 flex-center">
                      <Image
                        width={140}
                        height={140}
                        src="/img/partners/6.png"
                        alt="Partner Name"
                      />
                    </a>
                  </SwiperSlide>

                  {/* Add more SwiperSlides as needed */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
