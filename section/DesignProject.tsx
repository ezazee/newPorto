import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const DesignProject = () => {
  return (
    <>
      <div
        data-scroll-index={7}
        id="designProject"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="px-5 py-8 md:p-8 bg-white bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black border lg:px-5 section-name border-platinum border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon icon={faBezierCurve} className="text-theme" />
            Design Project
          </div>
          <div className="mt-5 mb-8 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black leading-1.27">
              Featured{" "}
              <span className="font-semibold text-theme">Projects Design</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              I design products that are more than pretty. I make them shippable
              and usable, ttempor non mollit dolor et do aute
            </p>
          </div>
          {/*./section-title*/}
          <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/1.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/2.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/3.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/4.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/5.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-1 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={600}
                    height={600}
                    src="/img/design/7.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
            {/*./portfolio-card*/}
            <div className="relative item md:col-span-2 z-1 group">
              <a
                className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                href="project-single.html"
              >
                <div className="img-wrapper">
                  <Image
                    width={900}
                    height={900}
                    src="/img/design/6.webp"
                    className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                    alt="portfolio"
                  />
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                </div>
                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                  Design
                  <span>Specialization</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignProject