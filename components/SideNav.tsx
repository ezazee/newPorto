"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faGraduationCap,
  faShareNodes,
  faPenRuler,
  faBuilding,
  faCode,
  faBezierCurve,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState<string>("home"); // Bagian awal yang aktif

  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  return (
    <>
      <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
        {/* Site Logo Start */}
        <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center">
          <a href="index.html">
            <h1 className="text-2xl text-theme">R</h1>
          </a>
        </div>
        {/* Site Logo Start */}
        {/* Main Menu/Navigation Start */}
        <div className="my-4 menu">
          <ul className="space-y-2 text-center">
            <li
              data-scroll-nav={0}
              className={`relative group ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              <a
                href="#home"
                onClick={() => navigateToSection("home")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Home"
              >
                <span
                  className={`text-black  group-hover:text-theme ${
                    activeSection === "home" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={1}
              className={`relative group ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <a
                href="#about"
                onClick={() => navigateToSection("about")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="About"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "about" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={2}
              className={`relative group ${
                activeSection === "skill" ? "active" : ""
              }`}
            >
              <a
                href="#skill"
                onClick={() => navigateToSection("skill")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Skills"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "about" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faPenRuler} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={3}
              className={`relative group ${
                activeSection === "service" ? "active" : ""
              }`}
            >
              <a
                href="#service"
                onClick={() => navigateToSection("service")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Services"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "service" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={4}
              className={`relative group ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              <a
                href="#experience"
                onClick={() => navigateToSection("experience")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Experiences"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "experience" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={5}
              className={`relative group ${
                activeSection === "education" ? "active" : ""
              }`}
            >
              <a
                href="#education"
                onClick={() => navigateToSection("education")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Educations"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "education" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={6}
              className={`relative group ${
                activeSection === "codeProject" ? "active" : ""
              }`}
            >
              <a
                href="#codeProject"
                onClick={() => navigateToSection("codeProject")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Code Project"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "codeProject" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faCode} />
                </span>
              </a>
            </li>
            <li
              data-scroll-nav={7}
              className={`relative group ${
                activeSection === "designProject" ? "active" : ""
              }`}
            >
              <a
                href="#designProject"
                onClick={() => navigateToSection("designProject")}
                className="menu-link w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title="Design Project"
              >
                <span
                  className={`text-black group-hover:text-theme ${
                    activeSection === "designProject" ? "text-theme" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faBezierCurve} />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* Main Menu/Navigation End */}
        {/* Share Button Wrapper Start */}
        <div className="relative share group">
          <button
            className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black"
            aria-label="Share"
          >
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          {/* Social Share Icon Start  */}
          <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1">
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with X"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          {/* Social Share Icon End  */}
        </div>
        {/* Share Button Wrapper End */}
      </div>
    </>
  );
};

export default SideNav;
