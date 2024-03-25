"use client"
import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const cursor = document.querySelector(
      ".custom_cursor_one"
    ) as HTMLDivElement;
    const cursorInner = document.querySelector(
      ".custom_cursor_two"
    ) as HTMLDivElement;
    const anchors = document.querySelectorAll("a");

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = x + "px";
      cursorInner.style.top = y + "px";
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      cursor.classList.add("click");
      cursorInner.classList.add("custom_cursor_hover");
    };

    const handleMouseUp = () => {
      setIsClicked(false);
      cursor.classList.remove("click");
      cursorInner.classList.remove("custom_cursor_hover");
    };

    const handleAnchorHover = () => {
      cursor.classList.add("custom_cursor_hover");
    };

    const handleAnchorLeave = () => {
      cursor.classList.remove("custom_cursor_hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    anchors.forEach((item) => {
      item.addEventListener("mouseover", handleAnchorHover);
      item.addEventListener("mouseleave", handleAnchorLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      anchors.forEach((item) => {
        item.removeEventListener("mouseover", handleAnchorHover);
        item.removeEventListener("mouseleave", handleAnchorLeave);
      });
    };
  }, [isClicked]);

  return (
    <>
      <div className="custom_cursor_one fixed top-0 left-0 w-8 h-8 border border-gray-400 rounded-full pointer-events-none"></div>
      <div className="custom_cursor_two w-1 h-1 rounded-full border border-gray-400 bg-metborder-gray-400 fixed pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};

export default CustomCursor;
