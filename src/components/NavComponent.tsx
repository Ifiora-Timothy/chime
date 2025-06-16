"use client";
import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const NavComponent = () => {
  const mobileNavTogleRef = useRef<SVGSVGElement>(null);

  return (
    <nav id="navmenu" className="flex justify-center  navmenu">
      <ul>
        <li className="">
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link href="/single-post" className="">
            Single Post
          </Link>
        </li>
        <li className="dropdown">
          <Link href="#">
            <span>Categories</span>{" "}
            <ChevronDown
              className="toggle-dropdown"
              strokeWidth={1}
              size={22}
            />
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
      <AlignJustify
        ref={mobileNavTogleRef}
        className="mobile-nav-toggle lg:hidden"
      />
    </nav>
  );
};

export default NavComponent;
