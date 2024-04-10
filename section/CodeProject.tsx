import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Data from "../data.json";
import { ProjectsData } from "../type";
import CardCode from "@/components/CardCode";
import Link from "next/link";

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
              <span className="font-semibold text-theme">Code Projects</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              Some of my superior project codes that I have worked on at several
              previous companies
            </p>
          </div>
          {/*./section-title*/}
          <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
            <CardCode />
          </div>
          <div className="mt-10 text-center more-blogs md:mt-13">
            <Link
              href="https://github.com/ezazee"
              className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
              target="_blank"
            >
              Browse My Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeProject;
