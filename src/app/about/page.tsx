import { aboutInfo } from "@/data";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const AboutPage = () => {
  return (
    <main className="main">
      <div className="page-title">
        <div className="container mx-auto px-4  max-w-screen-xl lg:flex lg:justify-between lg:items-center">
          <h1 className="mb-2 lg:mb-0">About</h1>
          <nav className="breadcrumbs">
            <ol className="">
              <li>
                   <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="current ">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="about" className="about section py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              <p className="who-we-are text-sm uppercase tracking-wide text-gray-600 mb-2">
                Who We Are
              </p>
              <h3 className="text-2xl font-bold mb-4">
                Unleashing Potential with Creative Strategy
              </h3>
              <p className="italic text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="bi bi-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="about-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="lg:col-span-1">
                  <Image
                    src="/img/about-company-1.jpg"
                    height={600}
                    width={600}
                    className="w-full h-auto rounded-lg"
                    alt=""
                  />
                </div>
                <div className="lg:col-span-1">
                  <div className="grid grid-rows-2 gap-4">
                    <div>
                      <Image
                        src="/img/about-company-2.jpg"
                        height={600}
                        width={600}
                        className="w-full h-auto rounded-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <Image
                        src="/img/about-company-3.jpg"
                        height={600}
                        width={600}
                        className="w-full h-auto rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team section py-16 bg-gray-50">
        <div
          className="container section-title mx-auto px-4 mb-12"
          data-aos="fade-up"
        >
          <div className="section-title-container flex  md:flex-row flex-col items-start md:items-center gap-3 justify-between">
            <h2 className="text-3xl font-bold">Team</h2>
            <p className="">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {aboutInfo.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="team-member flex items-start  p-6 rounded-lg shadow-sm">
                  <div className="pic ">
                    <Image
                      src={member.image}
                      height={600}
                      width={600}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h4>
                    <span className="text-sm text-gray-500 mb-3 block">
                      {member.position}
                    </span>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <div className="social flex space-x-3">
                      <a href="" className="text-gray-400 hover:text-blue-500">
                        <SiX size={16} />
                      </a>
                      <a href="" className="text-gray-400 hover:text-blue-500">
                        <SiFacebook size={16} />
                      </a>
                      <a href="" className="text-gray-400 hover:text-pink-500">
                        <SiInstagram size={16} />
                      </a>
                      <a href="" className="text-gray-400 hover:text-blue-500">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
