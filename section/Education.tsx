import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const Education = () => {
  return (
    <>
      <div
        data-scroll-index={5}
        id="education"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon className="text-theme" icon={faGraduationCap} />
            Education
          </div>
          <div className="mb-8 mt-7 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
              My <span className="font-semibold text-theme">Education</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              I design products that are more than pretty. I make them shippable
              and usable, tempor non mollit dolor et do aute
            </p>
          </div>
          {/*./section-title*/}
          <div className="experience">
            <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    SDN Sukajaya 5
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    2008 - 2014
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <p>
                    Like elementary schools in general...dont have any expertise
                    in the world of IT and dont have any interest in IT
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    SMPN 3 Tarogong Kidul
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    2014 - 2017
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <p>
                    Like junior high schools in general...dont have any
                    expertise in the world of IT and dont have any interest in
                    IT
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    SMKN 12 Garut
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    2017 - 2020
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <p>
                    attended high school by entering the Multimedia major,
                    learning JavaScript logic, styling WordPress websites, etc.
                    and joined the Cinematography club by making short films.
                  </p>
                </div>
              </li>
            </ul>
            <br />
            <br />
            <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
              {/*./portfolio-card*/}
              <div className="relative item md:col-span-1 z-1 group">
                <div
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                >
                  <div className="img-wrapper">
                    <Image
                      width={400}
                      height={400}
                      src="/img/certification/legal1.jpg"
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    3D Blender Course
                    <span>Certification</span>
                  </div>
                </div>
              </div>
              {/*./portfolio-card*/}
              <div className="relative item md:col-span-1 z-1 group">
                <div
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                >
                  <div className="img-wrapper">
                    <Image
                      width={400}
                      height={400}
                      src="/img/certification/legal2.jpg"
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    Presence Dicoding
                    <span>Certification</span>
                  </div>
                </div>
              </div>
              {/*./portfolio-card*/}
              <div className="relative item md:col-span-1 z-1 group">
                <div
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                >
                  <div className="img-wrapper">
                    <Image
                      width={400}
                      height={400}
                      src="/img/certification/legal3.jpg"
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    React Course
                    <span>Certification</span>
                  </div>
                </div>
              </div>
              {/*./portfolio-card*/}
              <div className="relative item md:col-span-1 z-1 group">
                <div
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                >
                  <div className="img-wrapper">
                    <Image
                      width={400}
                      height={400}
                      src="/img/certification/legal4.jpg"
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    Presence Dicoding
                    <span>Certification</span>
                  </div>
                </div>
              </div>
              {/*./portfolio-card*/}
              <div className="relative item md:col-span-2 z-1 group">
                <a
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                >
                  <div className="img-wrapper">
                    <Image
                      width={550}
                      height={550}
                      src="/img/certification/legal5.jpg"
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    Motion Graphic
                    <span>Certification</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education