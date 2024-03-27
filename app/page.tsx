import SideProfile from "@/components/SideProfile";
import About from "@/section/About";
import CodeProject from "@/section/CodeProject";
import Education from "@/section/Education";
import Experience from "@/section/Experience";
import Hero from "@/section/Hero";
import Service from "@/section/Service";
import Skills from "@/section/Skills";

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
            {/* Blog Section Start */}
            <div
              data-scroll-index={6}
              id="blog"
              className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
            >
              <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                  <i className="fal fa-blog text-theme" />
                  BLOG
                </div>
                <div className="mt-5 mb-8 md:my-10 section-title">
                  <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                    Latest{" "}
                    <span className="font-semibold text-theme">Insights</span>
                  </h2>
                  <p className="max-w-xl mt-4 md:mt-6 subtitle">
                    I design products that are more than pretty. I make them
                    shippable and usable, tempor non mollit dolor et do aute
                  </p>
                </div>
                {/*./section-title*/}
                <div className="blog-list md:space-y-7.5 space-y-5">
                  <div className="grid md:gap-2 grid-cols-12 overflow-hidden article group bg-flashWhite dark:bg-metalBlack items-center rounded-2xl p-3.5">
                    <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                      <a
                        className="block w-full overflow-hidden rounded-xl"
                        href="article-details.html"
                      >
                        <img
                          src="assets/img/blog/article1.png"
                          className="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105"
                          alt="Post Title"
                        />
                      </a>
                    </div>
                    <div className="relative flex flex-col col-span-12 px-3 pt-6 pb-2 md:p-5 post-content sm:col-span-6 md:col-span-7">
                      <div className="flex items-center gap-5">
                        <div className="text-sm font-medium tags">
                          <a
                            href="#"
                            className="transition-colors hover:text-theme"
                          >
                            UI Design
                          </a>
                          ,<span className="post_date">03 May 2023</span>
                        </div>
                      </div>
                      <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                        <a
                          className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                          href="article-details.html"
                        >
                          Elevate your mornings with perfectly brewed coffee
                        </a>
                      </div>
                      <div className="read-details">
                        <a
                          className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                          href="article-details.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:gap-2 grid-cols-12 overflow-hidden article group bg-flashWhite dark:bg-metalBlack items-center rounded-2xl p-3.5">
                    <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                      <a
                        className="block w-full overflow-hidden rounded-xl"
                        href="article-details.html"
                      >
                        <img
                          src="assets/img/blog/article2.png"
                          className="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105"
                          alt="Post Title"
                        />
                      </a>
                    </div>
                    <div className="relative flex flex-col col-span-12 px-3 pt-6 pb-2 md:p-5 post-content sm:col-span-6 md:col-span-7">
                      <div className="flex items-center gap-5">
                        <div className="text-sm font-medium tags">
                          <a
                            href="#"
                            className="transition-colors hover:text-theme"
                          >
                            UI Design
                          </a>
                          ,<span className="post_date">03 May 2023</span>
                        </div>
                      </div>
                      <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                        <a
                          className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                          href="article-details.html"
                        >
                          Mastering the clock: A guide to time management
                        </a>
                      </div>
                      <div className="read-details">
                        <a
                          className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                          href="article-details.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:gap-2 grid-cols-12 overflow-hidden article group bg-flashWhite dark:bg-metalBlack items-center rounded-2xl p-3.5">
                    <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                      <a
                        className="block w-full overflow-hidden rounded-xl"
                        href="article-details.html"
                      >
                        <img
                          src="assets/img/blog/article3.png"
                          className="object-cover object-center w-full h-full min-h-[288px] transition-all duration-300 ease-in-out max-h-60 md:min-h-60 group-hover:scale-105"
                          alt="Post Title"
                        />
                      </a>
                    </div>
                    <div className="relative flex flex-col col-span-12 px-3 pt-6 pb-2 md:p-5 post-content sm:col-span-6 md:col-span-7">
                      <div className="flex items-center gap-5">
                        <div className="text-sm font-medium tags">
                          <a
                            href="#"
                            className="transition-colors hover:text-theme"
                          >
                            UI Design
                          </a>
                          ,<span className="post_date">03 May 2023</span>
                        </div>
                      </div>
                      <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                        <a
                          className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                          href="article-details.html"
                        >
                          Homeward bound: Crafting a productive home pffice
                        </a>
                      </div>
                      <div className="read-details">
                        <a
                          className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                          href="article-details.html"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center more-blogs md:mt-13">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                  >
                    More Post
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Section End */}
            {/* Testimonial Section Start */}
            <div
              data-scroll-index={7}
              id="testimonial"
              className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
            >
              <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                  <i className="fal fa-comment-alt-check text-theme" />
                  TESTIMONIAL
                </div>
                <div className="mt-5 mb-8 md:my-10 section-title">
                  <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                    What{" "}
                    <span className="font-semibold text-theme">People Say</span>
                  </h2>
                  <p className="max-w-xl mt-4 md:mt-6 subtitle">
                    I design products that are more than pretty. I make them
                    shippable and usable, tempor non mollit dolor et do aute
                  </p>
                </div>
                {/*./section-title*/}
                <div className="mt-12 testimonial-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="text-center slider-inner md:px-5">
                          <div className="image flex-center">
                            <img
                              src="assets/img/testimonial/author1.png"
                              alt=""
                            />
                          </div>
                          <div className="mt-6 mb-3 text-center rating text-lightOrange">
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                          </div>
                          <div className="text-sm md:text-[15px] leading-loose content">
                            Working with{" "}
                            <span className="font-semibold text-theme">
                              Reddick
                            </span>{" "}
                            is a game-changer. Their coding expertise and
                            commitment to quality make every project a success.
                          </div>
                          <div className="mt-5 text-center author">
                            <h6 className="text-lg font-medium text-black dark:text-white">
                              Alex Johnson
                            </h6>
                            <p className="text-sm">Developer</p>
                          </div>
                        </div>
                      </div>
                      {/*./testimonial-card*/}
                      <div className="swiper-slide">
                        <div className="text-center slider-inner md:px-5">
                          <div className="image flex-center">
                            <img
                              src="assets/img/testimonial/author2.png"
                              alt=""
                            />
                          </div>
                          <div className="mt-6 mb-3 text-center rating text-lightOrange">
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                          </div>
                          <div className="text-sm md:text-[15px] leading-loose content">
                            <span className="font-semibold text-theme">
                              Reddick
                            </span>{" "}
                            exceeds expectations with top-tier coding skills.
                            Reliable, collaborative, and a true asset to any
                            project. Highly recommended
                          </div>
                          <div className="mt-5 text-center author">
                            <h6 className="text-lg font-medium text-black dark:text-white">
                              Mily Martin
                            </h6>
                            <p className="text-sm">CEO-itTheme</p>
                          </div>
                        </div>
                      </div>
                      {/*./testimonial-card*/}
                      <div className="swiper-slide">
                        <div className="text-center slider-inner md:px-5">
                          <div className="image flex-center">
                            <img
                              src="assets/img/testimonial/author2.png"
                              alt=""
                            />
                          </div>
                          <div className="mt-6 mb-3 text-center rating text-lightOrange">
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                            <svg
                              width={15}
                              height={15}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.4391 5.35656L10.1019 4.65667C10.0073 4.64115 9.92204 4.58373 9.87552 4.49217L7.86898 0.579903C7.69686 0.241595 7.21151 0.241595 7.03784 0.579903L5.0313 4.49217C4.98788 4.57753 4.9057 4.64115 4.80491 4.65667L0.467749 5.35656C0.0878407 5.41864 -0.0563694 5.87799 0.211892 6.14802L3.31008 9.26728C3.37521 9.33556 3.41088 9.43178 3.39537 9.53265L2.72239 13.8763C2.66346 14.2581 3.05113 14.539 3.39382 14.3667L7.31385 12.3819C7.39914 12.3384 7.50148 12.3353 7.59297 12.3819L11.513 14.3667C11.8572 14.5405 12.2434 14.2566 12.186 13.8763L11.5146 9.54662C11.4944 9.44885 11.5223 9.34332 11.5983 9.26728L14.6949 6.14802C14.9632 5.87799 14.8159 5.41709 14.4391 5.35656Z"
                                fill="#FFB657"
                              />
                            </svg>
                          </div>
                          <div className="text-sm md:text-[15px] leading-loose content">
                            <span className="font-semibold text-theme">
                              Reddick
                            </span>{" "}
                            delivers excellence in every line of code.
                            Dependable, innovative, and a key player in project
                            success. Outstanding performance.
                          </div>
                          <div className="mt-5 text-center author">
                            <h6 className="text-lg font-medium text-black dark:text-white">
                              Alex Johnson
                            </h6>
                            <p className="text-sm">Developer</p>
                          </div>
                        </div>
                      </div>
                      {/*./testimonial-card*/}
                    </div>
                    {/* Slider Controls Start */}
                    <div className="testimonial-slider-navigation flex justify-center items-center gap-2.5 mt-10 lg:mt-12">
                      <button
                        className="transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                        aria-label="Previous"
                      >
                        <svg
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 5.08006C18 4.77812 17.7121 4.5334 17.3571 4.5334L2.19486 4.5334L6.07553 0.933214C6.32659 0.719715 6.32659 0.373628 6.07553 0.160126C5.82448 -0.0533767 5.41745 -0.0533766 5.1664 0.160126L0.188289 4.69352C-0.0627618 4.90702 -0.0627618 5.2531 0.188289 5.4666L5.33115 9.83986C5.5822 10.0534 5.98923 10.0534 6.24028 9.83986C6.49134 9.62637 6.49134 9.28028 6.24028 9.06678L2.19486 5.62672L17.3571 5.62671C17.7121 5.62671 18 5.38199 18 5.08006Z"
                            className="fill-[#A0A0A0] group-hover:fill-white"
                          />
                        </svg>
                      </button>
                      <div className="text-sm font-light text-center text-black dark:text-white counter w-7" />
                      <button
                        className="transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
                        aria-label="Next"
                      >
                        <svg
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.44113e-07 4.91994C4.17717e-07 5.22187 0.287871 5.4666 0.642857 5.4666L15.8051 5.4666L11.9245 9.06678C11.6734 9.28028 11.6734 9.62637 11.9245 9.83987C12.1755 10.0534 12.5826 10.0534 12.8336 9.83987L17.8117 5.30648C18.0628 5.09298 18.0628 4.7469 17.8117 4.5334L12.6688 0.160134C12.4178 -0.0533766 12.0108 -0.0533766 11.7597 0.160134C11.5087 0.373633 11.5087 0.719718 11.7597 0.933218L15.8051 4.37328L0.642857 4.37328C0.287872 4.37328 4.70509e-07 4.61801 4.44113e-07 4.91994Z"
                            className="fill-[#A0A0A0] group-hover:fill-white"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Slider Controls End */}
                  </div>
                </div>
                {/*./testimonial-slider*/}
              </div>
            </div>
            {/* Testimonial Section End */}
            {/* Contact Section Start */}
            <div
              data-scroll-index={8}
              id="contact"
              className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
            >
              <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                  <i className="fal fa-envelope-open text-theme" />
                  CONTACT
                </div>
                <div className="mb-10 mt-7 section-title">
                  <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                    Contact{" "}
                    <span className="font-semibold text-theme">Me.</span>
                  </h2>
                  <p className="mt-3.5 md:mt-5 subtitle max-w-sectionTitle">
                    I design products that are more than pretty. I make them
                    shippable and usable, ttempor non mollit dolor et do aute
                  </p>
                </div>
                {/*./section-title*/}
                <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
                      <li className="flex flex-wrap items-center gap-5 ">
                        <div className="flex justify-center w-12 icon">
                          <svg
                            width={29}
                            height={42}
                            viewBox="0 0 29 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9647 14.6023C21.9647 13.1428 21.5323 11.7161 20.7221 10.5026C19.9119 9.28904 18.7603 8.34321 17.4129 7.78469C16.0656 7.22617 14.5831 7.08003 13.1527 7.36476C11.7224 7.6495 10.4086 8.35231 9.3774 9.38432C8.3462 10.4163 7.64394 11.7312 7.35943 13.1627C7.07492 14.5941 7.22095 16.0778 7.77903 17.4262C8.33711 18.7746 9.28219 19.9271 10.4947 20.738C11.7073 21.5488 13.1329 21.9816 14.5912 21.9816C16.5461 21.9793 18.4203 21.2011 19.8026 19.8177C21.1849 18.4343 21.9624 16.5587 21.9647 14.6023ZM8.19081 14.6023C8.19081 13.3354 8.56618 12.097 9.26947 11.0436C9.97276 9.99021 10.9724 9.1692 12.1419 8.68439C13.3114 8.19957 14.5983 8.07272 15.8399 8.31988C17.0815 8.56703 18.2219 9.1771 19.117 10.0729C20.0121 10.9687 20.6217 12.1101 20.8687 13.3526C21.1156 14.5952 20.9889 15.8831 20.5045 17.0536C20.02 18.224 19.1997 19.2244 18.1471 19.9283C17.0946 20.6321 15.8571 21.0078 14.5912 21.0078C12.8943 21.0059 11.2674 20.3304 10.0675 19.1296C8.86764 17.9287 8.1927 16.3005 8.19081 14.6023ZM24.2873 33.543C22.5204 32.783 20.65 32.2913 18.738 32.0842C20.9575 29.4709 23.0322 26.7378 24.9528 23.8972C27.4103 20.1273 28.6053 17.0871 28.6053 14.6013C28.6053 10.8818 27.1289 7.31453 24.5008 4.68439C21.8728 2.05426 18.3084 0.57666 14.5917 0.57666C10.8751 0.57666 7.31067 2.05426 4.68261 4.68439C2.05455 7.31453 0.578125 10.8818 0.578125 14.6013C0.578125 17.0871 1.77411 20.1273 4.23066 23.8967C6.15138 26.7371 8.22592 29.4701 10.445 32.0837C8.54054 32.2902 6.67728 32.7786 4.9162 33.5329C2.63665 34.5891 2.15778 35.7693 2.15778 36.5736C2.15778 37.9338 3.51546 39.1671 5.98063 40.0466C8.76145 40.9426 11.6708 41.374 14.5917 41.3235C17.5127 41.3739 20.422 40.9425 23.2028 40.0466C25.6675 39.1671 27.0252 37.9338 27.0252 36.5736C27.0252 35.7741 26.5511 34.5963 24.2873 33.543ZM1.5507 14.6023C1.5507 11.141 2.92461 7.82145 5.37018 5.37394C7.81576 2.92644 11.1327 1.55144 14.5912 1.55144C18.0498 1.55144 21.3667 2.92644 23.8123 5.37394C26.2579 7.82145 27.6318 11.141 27.6318 14.6023C27.6318 19.8104 21.5983 27.1016 17.1932 32.4255C16.2503 33.5655 15.3514 34.6518 14.5912 35.6209C13.8311 34.6518 12.9322 33.5655 11.9893 32.4255C7.5842 27.1016 1.5507 19.8104 1.5507 14.6023ZM14.5912 40.3506C7.83727 40.3506 3.13083 38.3609 3.13083 36.5751C3.13083 35.8397 3.91014 35.0736 5.32475 34.4206C7.19133 33.6402 9.16768 33.1547 11.1832 32.9814L11.2396 33.0494C12.3399 34.3813 13.3833 35.64 14.2057 36.7134C14.2511 36.7728 14.3095 36.8209 14.3765 36.854C14.4435 36.8871 14.5172 36.9043 14.592 36.9043C14.6667 36.9043 14.7404 36.8871 14.8074 36.854C14.8744 36.8209 14.9328 36.7728 14.9783 36.7134C15.7997 35.64 16.8411 34.3818 17.9443 33.0494L18.0007 32.9814C20.0231 33.1548 22.0061 33.6433 23.8778 34.4292C25.2805 35.0827 26.0531 35.8454 26.0531 36.5774C26.0516 38.3609 21.3452 40.3506 14.5912 40.3506Z"
                              fill="#19376D"
                            />
                            <circle
                              cx="14.5889"
                              cy="14.6548"
                              r="3.69277"
                              stroke="white"
                              strokeWidth="0.7"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h6 className="text-lg text-black dark:text-white">
                            Location
                          </h6>
                          <p className="text-sm">Melbourne Street. No 20</p>
                        </div>
                      </li>
                      <li className="flex flex-wrap items-center gap-5">
                        <div className="flex justify-center w-12 icon">
                          <svg
                            width={41}
                            height={42}
                            viewBox="0 0 41 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M31.6257 9.60099V6.29746H27.5763L20.6254 0.64209L13.6843 6.29746H9.62601V9.57337L0.300781 17.1443V40.133C0.300781 40.7549 0.806087 41.261 1.42707 41.261H39.7609C40.3819 41.261 40.8872 40.7549 40.8872 40.133V17.1447L31.6257 9.60099ZM40.2455 40.2187L26.9416 28.7431L40.2536 17.9864V40.1326C40.2536 40.1622 40.2504 40.1907 40.2455 40.2187ZM40.0832 17.308L31.6257 24.1422V10.4195L40.0832 17.308ZM20.6258 1.46056L26.5706 6.29746H14.6888L20.6258 1.46056ZM30.9913 6.93233V24.6548L26.4529 28.3214L20.6262 23.2957L14.7643 28.3186L10.26 24.6791V6.93233H30.9913ZM0.936777 40.1663C0.935965 40.1553 0.935153 40.1444 0.935153 40.133V17.96L14.274 28.7386L0.936777 40.1663ZM9.62601 24.1665L1.12185 17.295L9.62601 10.3906V24.1665ZM1.37877 40.6237L20.625 24.1328L39.7463 40.6257H1.42707C1.41083 40.6261 1.3946 40.6253 1.37877 40.6237ZM26.1534 13.8802H15.0979V13.2453H26.1534V13.8802ZM26.1534 20.2789H15.0979V19.6436H26.1534V20.2789Z"
                              fill="#19376D"
                            />
                            <path
                              d="M30.9531 7.00537L31.0128 24.7123L31.6389 24.2046L31.6389 7.00537L30.9531 7.00537Z"
                              fill="white"
                            />
                            <rect
                              x="15.1133"
                              y="13.2266"
                              width="11.0781"
                              height="0.685791"
                              fill="white"
                            />
                            <rect
                              x="9.625"
                              y="6.3042"
                              width="22.0156"
                              height="0.700928"
                              fill="white"
                            />
                            <path
                              d="M10.3125 7.00488L10.2528 24.7118L9.62671 24.2041L9.62671 7.00488L10.3125 7.00488Z"
                              fill="white"
                            />
                            <path
                              d="M15.0547 19.6567H26.1328V20.27H15.0547V19.6567Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h6 className="text-lg text-black dark:text-white">
                            E-mail
                          </h6>
                          <p className="text-sm">smith@gmail.com</p>
                        </div>
                      </li>
                      <li className="flex flex-wrap items-center gap-5">
                        <div className="flex justify-center w-12 icon">
                          <svg
                            width={41}
                            height={42}
                            viewBox="0 0 41 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7321 41.2896C28.9475 41.3359 29.1625 41.3587 29.3795 41.3587C31.885 41.3583 34.5278 38.3392 37.6673 34.4367C38.2236 33.7461 38.1415 32.7236 37.4767 32.0582L31.1742 25.7508C30.4817 25.0581 29.4031 25.0065 28.7163 25.6328C25.6475 28.4315 24.916 28.2488 23.6753 27.6103C19.528 25.4754 16.0691 22.0138 13.9367 17.864C13.2987 16.6231 13.1162 15.8902 15.9126 12.819C16.5381 12.1317 16.4865 11.0514 15.7948 10.3592L9.4919 4.05133C8.82743 3.38593 7.80574 3.30459 7.11608 3.86017C2.87895 7.27501 -0.315768 10.1013 0.26823 12.8032C2.72899 24.1841 17.3602 38.8269 28.7321 41.2896ZM29.2771 26.2486C29.6286 25.9289 30.2155 25.9692 30.5857 26.3397L36.8882 32.6471C37.2454 33.0051 37.3031 33.5614 37.019 33.9141C36.4137 34.6666 35.8221 35.3909 35.2449 36.0686L27.1619 27.9789C27.7588 27.5708 28.4449 27.0077 29.2771 26.2486ZM7.6379 4.5093C7.78827 4.38809 7.97562 4.32912 8.16907 4.32912C8.42876 4.32912 8.69861 4.43527 8.90343 4.64026L15.2063 10.9481C15.5765 11.3186 15.6176 11.9063 15.2973 12.2578C14.5389 13.0908 13.9762 13.7775 13.5686 14.3748L5.4852 6.28504C6.16231 5.7073 6.88601 5.11521 7.6379 4.5093ZM4.85451 6.83173L13.1231 15.1069C12.4931 16.3176 12.6377 17.1583 13.1962 18.2447C15.4075 22.5482 18.994 26.1371 23.2949 28.3513C24.38 28.9106 25.2204 29.0554 26.4304 28.4247L34.6986 36.6998C32.5226 39.1709 30.5677 40.8352 28.9085 40.4753C17.791 38.0675 3.48774 23.7529 1.08184 12.6267C0.722586 10.9658 2.38527 9.00967 4.85451 6.83173Z"
                              fill="#19376D"
                            />
                            <path
                              d="M23.3107 1.37642C32.5978 1.37642 40.1532 8.93738 40.1532 18.231C40.1532 18.4612 40.3393 18.6475 40.5693 18.6475C40.7993 18.6475 40.9855 18.4612 40.9855 18.231C40.9855 8.4782 33.0566 0.543457 23.3107 0.543457C23.0807 0.543457 22.8945 0.729736 22.8945 0.95994C22.8945 1.19014 23.0807 1.37642 23.3107 1.37642Z"
                              fill="white"
                            />
                            <path
                              d="M23.3107 8.02633C28.9336 8.02633 33.5081 12.604 33.5081 18.231C33.5081 18.4612 33.6942 18.6475 33.9242 18.6475C34.1543 18.6475 34.3404 18.4612 34.3404 18.231C34.3404 12.1448 29.3925 7.19336 23.3107 7.19336C23.0807 7.19336 22.8945 7.37964 22.8945 7.60984C22.8945 7.84005 23.0807 8.02633 23.3107 8.02633Z"
                              fill="white"
                            />
                            <path
                              d="M22.8945 14.2597C22.8945 14.4899 23.0807 14.6762 23.3107 14.6762C25.2691 14.6762 26.8626 16.271 26.8626 18.2314C26.8626 18.4616 27.0488 18.6479 27.2788 18.6479C27.5088 18.6479 27.6949 18.4616 27.6949 18.2314C27.6949 15.8118 25.7284 13.8433 23.3107 13.8433C23.0807 13.8433 22.8945 14.0295 22.8945 14.2597Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h6 className="text-lg text-black dark:text-white">
                            Phone
                          </h6>
                          <p className="text-sm">+976 34 99 99</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Contact info end */}
                  <div className="md:col-span-7">
                    <form
                      id="contactForm"
                      action="https://minfotailwind.netlify.app/contact-form.php"
                      method="POST"
                      className="space-y-4"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="client__name"
                          id="client__name"
                          placeholder="Name"
                          className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="client_email"
                          id="client_email"
                          placeholder="E-Mail"
                          className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="contact__message"
                          placeholder="Message"
                          rows={5}
                          className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                          defaultValue={""}
                        />
                      </div>
                      <div className=" form-group">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                          aria-label="Send Message"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                    {/* Contact form end */}
                  </div>
                </div>
                <iframe
                  className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25908.703277839155!2d-74.18208878159237!3d40.640176526919696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1699271377092!5m2!1sen!2sbd"
                  aria-label="Contact Map"
                ></iframe>
              </div>
            </div>
            {/* Contact Section End */}
            {/* Footer Start */}
            <footer className="py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem">
              <p className="">
                Copyright by
                <a href="#" className="transition-colors">
                  @domain.com
                </a>
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
