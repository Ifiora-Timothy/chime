"use client";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NavComponent = () => {
  const mobileNavTogleRef = useRef<HTMLDivElement>(null);
  const [mobileNavTogle, setMobileNavTogle] =   useState(false);

  function mobileNavToogle() {
    const body = document.querySelector("body");
    if (!mobileNavTogleRef.current || !body) return;

    body.classList.toggle("mobile-nav-active");
    setMobileNavTogle((prev) => !prev);
  }

  useEffect(() => {
    const toggleEl = mobileNavTogleRef.current;
    toggleEl?.addEventListener("click", mobileNavToogle);
  

    const navLinks = document.querySelectorAll("#navmenu a");
    const linkHandler = () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    };
    navLinks.forEach((link) => link.addEventListener("click", linkHandler));

    const dropdownToggles = document.querySelectorAll(
      ".navmenu .toggle-dropdown"
    );
    const dropdownHandler = function (e: Event) {
      e.preventDefault();
      const parent = (e.currentTarget as HTMLElement).parentElement;
      const next = parent?.nextElementSibling;

      parent?.classList.toggle("active");
      next?.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    };

    dropdownToggles.forEach((el) =>
      el.addEventListener("click", dropdownHandler)
    );

    // ✅ Clean up
    return () => {
      toggleEl?.removeEventListener("click", mobileNavToogle);
      navLinks.forEach((link) =>
        link.removeEventListener("click", linkHandler)
      );
      dropdownToggles.forEach((el) =>
        el.removeEventListener("click", dropdownHandler)
      );
    };
  }, []);

  return (
    <nav id="navmenu" className="flex justify-center  navmenu">
      <ul>
        <li>
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/single-post">Single Post</Link>
        </li>
        <li className="dropdown">
          <Link href="#">
            <span>Categories</span>{" "}
            <ChevronDown className="toggle-dropdown" strokeWidth={1} size={22} />
          </Link>
          <ul>
            <li>
              <Link href="/category">Category 1</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>Deep Dropdown</span>{" "}
                <ChevronDown
                  strokeWidth={1}
                  size={22}
                  className="toggle-dropdown"
                />
              </Link>
              <ul>
                <li>
                  <Link href="#">Deep Dropdown 1</Link>
                </li>
                <li>
                  <Link href="#">Deep Dropdown 2</Link>
                </li>
                <li>
                  <Link href="#">Deep Dropdown 3</Link>
                </li>
                <li>
                  <Link href="#">Deep Dropdown 4</Link>
                </li>
                <li>
                  <Link href="#">Deep Dropdown 5</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/category">Category 2</Link>
            </li>
            <li>
              <Link href="/category">Category 3</Link>
            </li>
            <li>
              <Link href="/category">Category 4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div ref={mobileNavTogleRef} className="mobile-nav-toggle lg:hidden">
        {mobileNavTogle ? (
          <X/>
        ) : (
          <AlignJustify />
        )}
        
      </div>
    </nav>
  );
};

export default NavComponent;
