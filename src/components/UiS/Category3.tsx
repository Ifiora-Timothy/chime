import { ICategory } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  category3Items: ICategory[];
  categoryName: string;
};


const Category3 = ({
  category3Items,categoryName
}: Props) => {
  return (
    <section
      id="lifestyle-category"
      className="py-16 section business-category"
    >
      <div className=" section-title container" data-aos="fade-up">
        <div className="flex section-title-container items-center justify-between">
          <h2 className="text-[40px] font-semibold capitalize">{categoryName}</h2>
          <p className="text-sm text-blue-600">
            <a href="categories">See All {categoryName}</a>
          </p>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid  bs-lg:grid-cols-12 gap-5">
          <div className="bs-lg:col-span-4">
            <div className="post-list lg">
              <a href="blog-details">
                <Image
                  width={900}
                  height={571}
                  src={category3Items[0].image}
                  alt=""
                  className="object-cover  rounded w-full h-auto lg:w-[360] lg:h-[230]    max-w-full"
                />
              </a>
              <div className="text-sm text-gray-500 mt-2 post-meta">
                <span>{category3Items[0].category}</span> <span className="mx-1">•</span>{" "}
                <span>{category3Items[0].date}</span>
              </div>
              <h2 className="text-lg font-semibold mt-2 pr-3">
                <a href="blog-details">
                 {category3Items[0].title}
                </a>
              </h2>
              <p className="text-gray-700 mt-2 mb-4 block">
               {category3Items[0].description}
              </p>

              <div className="flex items-center author">
                <div className="photo">
                  <Image
                    width={453}
                    height={453}
                    src="/img/person-7.jpg"
                    alt=""
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <div className="name">
                  <h3 className="text-sm font-medium m-0 p-0">{category3Items[0].author}</h3>
                </div>
              </div>
            </div>
            {category3Items.slice(1,3).map((i, index) => (
              <div key={index} className="post-list border-b pb-4">
                <div className="text-sm text-gray-500 post-meta">
                  <span>{i.category}</span> <span className="mx-1">•</span>{" "}
                  <span>{i.date}</span>
                </div>
                <h2 className="text-lg font-semibold mt-2 mb-2">
                  <a href="blog-details">{i.title}</a>
                </h2>
                <span className="text-sm text-gray-600 author mb-3 block">
                  {i.author}
                </span>
              </div>
            ))}
          </div>

          <div className="bs-lg:col-span-8">
            <div className="grid rw  grid-cols-1 bs-lg:grid-cols-3 gap-5">
              <div className="md:border-l bs-lg:col-span-1 md:pl-4 custom-border">
                <div className="post-list space-y-4">
                  {category3Items.slice(3,6).map((i, index) => (
                    <div key={index}>
                      <a href="blog-details">
                        <Image
                          width={900}
                          height={571}
                          src={i.image}
                          alt=""
                          className="object-cover  rounded w-full h-auto lg:w-[220] lg:h-[140]    max-w-full"
                        />
                      </a>
                      <div className="text-sm text-gray-500 mt-2 post-meta">
                        <span>{i.category}</span> <span className="mx-1">•</span>{" "}
                        <span>{i.date}</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <Link   className="line-clamp-2 min-h-[3rem]" href="blog-details">{i.title}</Link>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:border-l  bs-lg:col-span-1 md:pl-4 custom-border">
            <div className="post-list space-y-4">
                  {category3Items.slice(6,9).map((i, index) => (
                    <div key={index}>
                      <a href="blog-details">
                        <Image
                          width={900}
                          height={571}
                          src={i.image}
                          alt=""
                          className="object-cover  rounded w-full h-auto lg:w-[220] lg:h-[140]    max-w-full"
                        />
                      </a>
                      <div className="text-sm text-gray-500 mt-2 post-meta">
                        <span>{i.category}</span> <span className="mx-1">•</span>{" "}
                        <span>{i.date}</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <Link   className="line-clamp-2 min-h-[3rem]" href="blog-details">{i.title}</Link>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4  bs-lg:col-span-1">
                {category3Items.slice(9,14).map((i, index) => (
                  <div key={index} className="post-list border-b pb-4">
                    <div className="text-sm text-gray-500 post-meta">
                      <span>{i.category}</span> <span className="mx-1">•</span>{" "}
                      <span>{i.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">
                      <a href="blog-details">{i.title}</a>
                    </h2>
                    <span className="  author mb-3 block">{i.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category3;
