import { ICategory } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  recentCategories: ICategory[]
};


const TrendingCategory = ({recentCategories}: Props) => {




  return (
    <section id="trending-category" className="trending-category py-16">
      <div className="container " data-aos="fade-up" data-aos-delay="100">
        <div className="container" data-aos="fade-up">
          <div className="grid  bs-lg:grid-cols-12 gap-6  ">
            <div className=" bs-lg:col-span-4">
              <div className="post-entry lg">
                <a href="blog-details">
                  <Image
                    width={900}
                    height={571}
                    src={recentCategories[0].image}
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta ">
                  <span className="date">{recentCategories[0].date}</span>{" "}
                  <span className="mx-1">&bull;</span>{" "}
                  <span>{recentCategories[0].date}</span>
                </div>
                <h2 className="">
                  <Link href="blog-details">
                   {recentCategories[0].title}
                  </Link>
                </h2>
                <p className="mb-4 block">
                {recentCategories[0].description}
                </p>
                <div className="flex items-center author">
                  <div className="photo">
                    <Image
                      width={453}
                      height={453}
                      src="/img/person-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">{recentCategories[0].author}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bs-lg:col-span-8  ">
              <div className=" grid  grid-cols-1 md:grid-cols-12 gap-5">
                <div className="bs-lg:col-span-4 col-span-12  md:col-span-6  md:pl-5 md:border-l custom-border ">
                  {recentCategories.slice(1,4).map((i, index) => (
                    <div key={index} className="post-entry  b-red-400">
                      <Link href="blog-details">
                        <Image
                          width={900}
                          height={571}
                          src={i.image}
                          alt=""
                          className="object-cover img-fluid rounded w-full h-auto lg:w-[200] lg:h-[132]    max-w-full"
                        />
                      </Link>
                      <div className="post-meta">
                        <span>{i.category}</span>{" "}
                        <span className="mx-1">&bull;</span>{" "}
                        <span>{i.date}</span>
                      </div>
                      <h2 className="">
                        <Link className="line-clamp-2 min-h-[3rem]" href="blog-details">
                          {i.title}
                        </Link>
                      </h2>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="bs-lg:col-span-4 col-span-12  md:col-span-6  md:border-l border-gray-200 md:pl-5">
                  {recentCategories.slice(4,7).map((i, index) => (
                    <div key={index} className="post-entry   ">
                      <Link href="blog-details">
                        <Image
                          width={900}
                          height={571}
                          src={i.image}
                          alt=""
                          className="object-cover img-fluid rounded w-full h-auto lg:w-[200] lg:h-[132]    max-w-full"
                        />
                      </Link>
                      <div className="post-meta">
                        <span>{i.category}</span>{" "}
                        <span className="mx-1">&bull;</span>{" "}
                        <span>
                          {i.date}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <Link  className="line-clamp-2 min-h-[3rem]" href="blog-details">
                          {i.title}
                        </Link>
                      </h2>
                    </div>
                  ))}
                </div>

                {/* Trending List */}
                <div className="bs-lg:col-span-4  col-span-12 bs-lg:border-l border-transparent bs-lg:pl-5">
                  <div className="trending">
                    <h3 className="">Trending</h3>
                    <ul className="trending-post">
                      {recentCategories.slice(0, 5).map((i, index) => (
                        <li key={index} className="flex flex-col">
                          <a href="blog-details" className="flex flex-col">
                            <span className="number">{index + 1}</span>
                            <h3 className="text-md font-medium leading-snug">
                              {i.title}
                            </h3>
                            <span className="author">
                              {i.author }
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategory;
