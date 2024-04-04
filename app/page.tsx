import SideProfile from "@/components/SideProfile";
import About from "@/section/About";
import CodeProject from "@/section/CodeProject";
import DesignProject from "@/section/DesignProject";
import Education from "@/section/Education";
import Experience from "@/section/Experience";
import Hero from "@/section/Hero";
import Service from "@/section/Service";
import Skills from "@/section/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative pt-10 minfo__app max-xl:pt-20">
        <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100"></div>
        <div className="max-lg:px-4">
          {/* Side Profile */}
          <SideProfile />
          {/* End SideProfile */}
          <div className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
            {/* Hero/Introduction Section Start */}
            <Hero />
            {/* Hero/Introduction Section End */}
            {/* About Me Section Start */}
            <About />
            {/* About Me Section End */}
            {/* Skills Section Start */}
            <Skills />
            {/* Skills Section End */}
            {/* My Services Section Start */}
            <Service />
            {/* My Services Section End */}
            {/* My Experience Section Start */}
            <Experience />
            {/* My Experience Section End */}
            {/* My Education Section Start */}
            <Education />
            {/* My Education Section End */}
            {/* Code Project Section Start */}
            <CodeProject />
            {/* Code Project Section End */}
            {/* Design Project Section Start */}
            <DesignProject />
            {/* Design Project Section End */}
            {/* Footer Start */}
            <footer className="py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem">
              <p className="">
                Copyright by {" "}
                <Link
                  href="https://www.instagram.com/mrzsaa/?hl=id"
                  className="transition-colors text-theme font-bold"
                >
                  Mrzsaa
                </Link>
              </p>
            </footer>
            {/* Footer End */}
          </div>
          {/* Main Content End */}
        </div>
      </div>
    </>
  );
}
