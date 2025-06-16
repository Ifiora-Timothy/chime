"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useRef } from "react";

const ScrollTop = () => {
  const scrollTopRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollTop = scrollTopRef.current;

    function toggleScrollTop() {
      if (scrollTop) {
        if (window.scrollY > 100) {
          scrollTop.classList.add("active");
        } else {
          scrollTop.classList.remove("active");
        }
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }, []);
  return (
    <div
      ref={scrollTopRef}
      className="scroll-top flex items-center justify-center fixed bottom-4 right-4 z-50 w-10 h-10 bg-gray-800 rounded-full cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100"
    >
      <ArrowUp className="text-white" />
    </div>
  );
};

export default ScrollTop;
