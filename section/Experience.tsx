import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {
  return (
    <>
      <div
        data-scroll-index={4}
        id="experience"
        className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
      >
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <FontAwesomeIcon className="text-theme" icon={faBuilding} />
            Experience
          </div>
          <div className="mb-8 mt-7 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
              Work <span className="font-semibold text-theme">Experience</span>
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
                    Fotohokkie
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    March 2019 - May 2019
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Photographer Studio
                  </h4>
                  <p>
                    Intern as a studio photographer. Serving customers who want
                    group photos, engagement, family, graduation, etc. for 3
                    months
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Graha Kara Digital
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    September 2020 - November 2020
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Graphic Design
                  </h4>
                  <p>
                    Become a Basic Designer. Like making poster designs, shirt
                    designs, logo designs, banner designs, etc
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Graha Kara Digital
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    November 2020 - Mei 2021
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    UI & UX Designer
                  </h4>
                  <p>Create UI & UX mobile app designs for company products</p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Graha Kara Digital
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    June 2021 - April 2022
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    IT Support Technician
                  </h4>
                  <p>
                    Become an IT Support for the company. Such as internet cable
                    installation, printer repair, laptop and office computers
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Graha Kara Digital
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    June 2021 - April 2022
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Junior Web Developer
                  </h4>
                  <p>
                    For the first time touching the world of coding, along with
                    being an IT support. I became a Junior Web Developer by
                    creating several product profile websites for companies
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Eka Mandiri Asa Sejati
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    April 2022 - January 2023
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Junior Web Developer
                  </h4>
                  <p>
                    Become a web developer for companies by creating several
                    website profiles, creating CMS for products, etc
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Hamengku Karya
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    August 2023 - September 2023
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Internship Design
                  </h4>
                  <p>
                    Create UI designs for company Applications, Create print
                    designs for promotions and others
                  </p>
                </div>
              </li>
              <li className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    PT. Akasata Cyber Technology
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    February 2024 - Current
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    Junior Security Operation Center
                  </h4>
                  <p>
                    responsible for monitoring and managing security operations
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience