import Link from 'next/link';
import React from 'react'
import Data from "../data.json";
import { ProjectsData } from "../type";
import Image from 'next/image';

const projectsData: ProjectsData = Data;


const CardCode = () => {
  return (
    <>
      {projectsData.codeProjects.map((project) => (
        <div key={project.id} className="relative item md:col-span-1 z-1 group">
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
    </>
  );
}

export default CardCode