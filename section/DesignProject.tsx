import CardDesign from "../components/cardDesign";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const DesignProject: React.FC = () => {
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
              <span className="font-semibold text-theme">Design Projects</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              Some of my featured project codes are for UI & UX and basic design
              projects that I have worked on
            </p>
          </div>
          <div className="mt-6 mb-8">
            <div
              className="text-center text-sm flex items-center justify-center gap-2 text-black rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold"
            >
              Click to View Project Details
              <span className="animate-bounce">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 384 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" 
                  fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/*./section-title*/}
          <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
            <CardDesign />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignProject;
