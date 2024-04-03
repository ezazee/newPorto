import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div
      data-scroll-index={1}
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white  rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black  border lg:px-5 section-name border-platinum  rounded-4xl">
          <FontAwesomeIcon icon={faUser} className="text-theme" />
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black  leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is{" "}
            <span className="text-black ">
              Mohamad Reza Reziyanto
            </span>. I started to know about IT since I was in Vocational High
            School, when I first joined an organization called NINE STUDIO ...
            Nine Studio is a group for developing cinematography at my high
            school Then after graduating  I entered the world of industry since
            2020 right when I graduated from high school 
          </p>
        </div>
        <div className="mt-6 section-content">

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>2</span>+
              </div>
              <div className="text-sm">Years Of Experience</div>
            </li>
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>15</span>+
              </div>
              <div className="text-sm">Handled Projects</div>
            </li>
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>05</span>+
              </div>
              <div className="text-sm">Certificates</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About