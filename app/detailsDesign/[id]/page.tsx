import React from "react";
import Data from "../../../data.json";
import { ProjectsData } from "../../../type";
import Image from "next/image";
const projectsData: ProjectsData = Data;
const Page = (props: any) => {
  const project =
    props.params.id &&
    projectsData.designProjects.find(
      (match) => match.id === parseInt(props.params.id, 10)
    );
  return (
    <div className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
      {project ? (
        <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
          <div className="px-5 py-8 md:p-8 bg-white rounded-2xl lg:p-10 2xl:p-13">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black border lg:px-5 section-name border-platinum rounded-4xl">
              <i className="fal fa-tasks-alt text-theme" />
              Project Details
            </div>
            <h2 className="text-2xl font-semibold leading-normal text-black mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
              {project.title}
            </h2>
            <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
              <img
                src="assets/img/portfolio/portfolio-img1-xl.png"
                className="w-full"
                alt="Project Thumbnail Image"
              />
            </div>
            <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
              <div>
                <h6 className="text-black">CLIENT</h6>
                <p className="text-regular">Envato Theme</p>
              </div>
              <div>
                <h6 className="text-black">SERVICES:</h6>
                <p className="text-regular">Tips &amp; Tricks, Design</p>
              </div>
              <div>
                <h6 className="text-black">DURATION</h6>
                <p className="text-regular">108 hrs</p>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-black xl:text-2xl">
                Project Description
              </h3>
              <p className="text-regular !leading-[2]">
                {project.description}
              </p>
              <ul className="text-regular !leading-[2] list-disc ml-6 my-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </li>
              </ul>
              <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
                <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                  <img
                    src="assets/img/portfolio/portfolio-img1-2.png"
                    className="w-full"
                    alt="Project Inner Colum Image"
                  />
                </div>
                <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                  <img
                    src="assets/img/portfolio/portfolio-img1-1.png"
                    className="w-full"
                    alt="Project Inner Colum Image"
                  />
                </div>
              </div>
              <h3 className="mt-12 mb-10 text-2xl font-medium text-black">
                Technologies
              </h3>
              <div className="progressbar-wrap space-y-7">
                <div className="flex flex-wrap items-center gap-5 progressbar">
                  <div className="w-8 icon">
                    <img src="assets/img/skill/html.svg" alt="HTML5" />
                  </div>
                  <div className="flex-1 bar" data-percentage="90%">
                    <h5 className="mb-2 text-black progress-title-holder text-regular">
                      <span className="progress-title">HTML5</span>
                    </h5>
                    <div className="progress-outer bg-platinum h-1.5 rounded-2xl">
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 progressbar">
                  <div className="w-8 icon">
                    <img src="assets/img/skill/css.svg" alt="CSS3" />
                  </div>
                  <div className="flex-1 bar" data-percentage="80%">
                    <h5 className="mb-2 text-black progress-title-holder text-regular">
                      <span className="progress-title">CSS3</span>
                    </h5>
                    <div className="progress-outer bg-platinum h-1.5 rounded-2xl">
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 progressbar">
                  <div className="w-8 icon">
                    <img src="assets/img/skill/js.svg" alt="javascript" />
                  </div>
                  <div className="flex-1 bar" data-percentage="60%">
                    <h5 className="mb-2 text-black progress-title-holder text-regular">
                      <span className="progress-title">javascript</span>
                    </h5>
                    <div className="progress-outer bg-platinum h-1.5 rounded-2xl">
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 progressbar">
                  <div className="w-8 icon">
                    <img
                      src="assets/img/skill/tailwind.svg"
                      alt="TailwindCSS"
                    />
                  </div>
                  <div className="flex-1 bar" data-percentage="90%">
                    <h5 className="mb-2 text-black progress-title-holder text-regular">
                      <span className="progress-title">TailwindCSS</span>
                    </h5>
                    <div className="progress-outer bg-platinum h-1.5 rounded-2xl">
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 progressbar">
                  <div className="w-8 icon">
                    <img src="assets/img/skill/figma.svg" alt="TailwindCSS" />
                  </div>
                  <div className="flex-1 bar" data-percentage="80%">
                    <h5 className="mb-2 text-black progress-title-holder text-regular">
                      <span className="progress-title">Figma</span>
                    </h5>
                    <div className="progress-outer bg-platinum h-1.5 rounded-2xl">
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Proyek tidak ditemukan</p>
      )}
    </div>
  );
};
export default Page;
