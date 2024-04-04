"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <>
      <div
        data-scroll-index={2}
        id="skill"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon className="text-theme" icon={faPenRuler} />
            SKILLS
          </div>
          <div className="mb-8 mt-7 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black leading-1.27">
              My <span className="font-semibold text-theme">Tools</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              I do website design and development. also make it shippable and
              usable using my best tools
            </p>
          </div>
          <div className="mt-12 skills-slider xl:mt-16">
            <div className="swiper">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="space-y-5 text-center"
                >
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/figma.svg"
                          alt="Figma"
                        />
                      </div>
                      <div className="text-black name">
                        Figma
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/html.svg"
                          alt="HTML"
                        />
                      </div>
                      <div className="text-black name">
                        HTML
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/css.svg"
                          alt="CSS"
                        />
                      </div>
                      <div className="text-black name">CSS</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/js.svg"
                          alt="JS"
                        />
                      </div>
                      <div className="text-black name">JS</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/tailwind.svg"
                          alt="Tailwind"
                        />
                      </div>
                      <div className="text-black name">
                        Tailwind
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/react.svg"
                          alt="React"
                        />
                      </div>
                      <div className="text-black name">
                        React
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/adobePS.svg"
                          alt="Adobe PS"
                        />
                      </div>
                      <div className="text-black name">
                        Adobe PS
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/cdr.svg"
                          alt="CorelDraw"
                        />
                      </div>
                      <div className="text-black name">
                        CorelDraw
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="space-y-5">
                      <div className="text-center icon">
                        <Image
                          width={50}
                          height={50}
                          src="/img/skill/laravel.svg"
                          alt="Laravel"
                        />
                      </div>
                      <div className="text-black name">
                        Laravel
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Add more SwiperSlides for other skills */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills