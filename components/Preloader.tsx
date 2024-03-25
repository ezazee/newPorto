"use client"
import Image from "next/image";
import { useEffect } from "react";

const Preloader: React.FC = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );
    const preloader = document.getElementById("preloader");

    if (!isMobile) {
      setTimeout(() => {
        if (preloader) preloader.classList.add("preloaded");
      }, 1000);

      setTimeout(() => {
        if (preloader && preloader.parentNode)
          preloader.parentNode.removeChild(preloader);
      }, 2000);
    } else {
      if (preloader && preloader.parentNode)
        preloader.parentNode.removeChild(preloader);
    }
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
      <div className="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
        <h1 className="text-2xl text-white">R</h1>
      </div>
    </div>
  );
};

export default Preloader;
