import React from "react";
import Data from "../../../data.json";
import { ProjectsData } from "../../../type";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon className="text-theme" icon={faCircleInfo} />
              Project Details
            </div>
            <h2 className="text-2xl font-semibold leading-normal text-black mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
              {project.title}
            </h2>
            <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
              <Image
                width={1000}
                height={1000}
                src={project.image}
                className="w-full"
                alt="Project Thumbnail Image"
              />
            </div>
            <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
              <div>
                <h6 className="text-black">CLIENT</h6>
                <p className="text-regular">{project.client}</p>
              </div>
              <div>
                <h6 className="text-black">Category:</h6>
                <p className="text-regular">{project.category}</p>
              </div>
              <div>
                <h6 className="text-black">Duration Project</h6>
                <p className="text-regular">{project.duration}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-black xl:text-2xl">
                Project Description
              </h3>
              <p className="text-regular !leading-[2]">{project.description}</p>
              {project.embedCode && (
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: project.embedCode }} />
              )}
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
