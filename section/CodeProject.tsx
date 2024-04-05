import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Data from "../data.json";
import { ProjectsData } from "../type";

const projectsData: ProjectsData = Data;


const CodeProject: React.FC = () => {
  return (
    <>
      <div
        data-scroll-index={6}
        id="codeProject"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="px-5 py-8 md:p-8 bg-white bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black border lg:px-5 section-name border-platinum border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon icon={faCode} className="text-theme" />
            Code Project
          </div>
          <div className="mt-5 mb-8 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black leading-1.27">
              Featured{" "}
              <span className="font-semibold text-theme">Projects</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              I design products that are more than pretty. I make them shippable
              and usable, ttempor non mollit dolor et do aute
            </p>
          </div>
          {/*./section-title*/}
          <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
            {projectsData.codeProjects.map((project) => (
              <div
                key={project.id}
                className="relative item md:col-span-1 z-1 group"
              >
                <a
                  className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum border-greyBlack"
                  href="/"
                >
                  <div className="img-wrapper">
                    <Image
                      width={600}
                      height={600}
                      src={project.image}
                      className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white to-transparent rounded-xl group-hover:opacity-100"></div>
                  </div>
                  <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black  leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                    {project.title}
                    {"   "}
                    <span>Project</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center more-blogs md:mt-13">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
            >
              Browse My Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeProject;
