import { ICategory } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {
  category1Items: ICategory[],
  categoryName:string
};


const Category1 = ({category1Items,categoryName}: Props) => {
  return (
    <section id="culture-category" className="py-16 section culture-category">
      <div className="section-title container" data-aos="fade-up">
        <div className="flex section-title-container  flex-row items-center justify-between">
          <h2 className="text-[40px] font-semibold">{categoryName}</h2>
          <p className="text-sm text-blue-600">
            <a href="categories">See All {categoryName}</a>
          </p>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid   col-span-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-9">
            <div className="flex flex-col bs-lg:flex-row   post-entry gap-x-1">
              <a
                href="blog-details"
                className="thumbnail md:me-4 inline-block mb-4 lg:mb-0"
              >
                <Image
                  width={900}
                  height={571}
                  src={category1Items[0].image}
                  alt=""
                  className="object-cover img-flud rounded w-full h-auto lg:w-[540] lg:h-[340]    max-w-full"
                />
              </a>
              <div>
                <div className=" post-meta ">
                  <span>{category1Items[0].category}</span> <span className="mx-1">&bull;</span>
                  <span>{category1Items[0].date}</span>
                </div>
                <h3 className="">
                  <a href="blog-details">
                 {category1Items[0].title}
                  </a>
                </h3>
                <p className="mt-3 text-gray-700">
                 {category1Items[0].description}
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      width={453}
                      height={453}
                      src="/img/person-2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{category1Items[0].author}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid   grid-cols-1 bs-lg:grid-cols-3  md:gap-6">
              <div className="col-span-1">
                <div className="border-b pb-4">
                  <a href="blog-details">
                    <Image
                      width={900}
                      height={571}
                      src={category1Items[2].image}
                      alt=""
                      className="object-cover rounded w-full h-auto lg:w-[262] lg:h-[162]    max-w-full"
                    />
                  </a>
                  <div className="post-meta mt-2">
                    <span>{category1Items[2].category}</span> <span className="mx-1">&bull;</span>
                    <span>{category1Items[2].date}</span>
                  </div>
                  <h2 className="text-lg font-semibold mt-2">
                    <a href="blog-details">
                     {category1Items[2].title}
                    </a>
                  </h2>
                  <span className="author mb-3 block">{category1Items[2].author}</span>
                  <p className="mb-4 block">
                  {category1Items[2].description}
                  </p>
                </div>

                <div className="post-list mt-4">
                  <div className="post-meta">
                    <span className="date">{category1Items[3].category}</span>{" "}
                    <span className="mx-1">•</span>{" "}
                    <span>{category1Items[3].date}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href="blog-details">
                     {category1Items[3].title}
                    </a>
                  </h2>
                  <span className="author mb-3 d-block">{category1Items[3].description}</span>
                </div>
              </div>

              <div className="col-span-2">
                <div>
                  <a href="blog-details">
                    <Image
                      width={900}
                      height={571}
                      src={category1Items[1].image}
                      alt=""
                      className="object-cover img-fluid rounded w-full h-auto lg:w-[550] lg:h-[350]    max-w-full"
                    />
                  </a>
                  <div className="post-meta mt-2">
                    <span>{category1Items[1].category}</span> <span className="mx-1">&bull;</span>
                    <span>{category1Items[1].date}</span>
                  </div>
                  <h2 className="text-lg font-semibold mt-2">
                    <a href="blog-details">
                   {category1Items[1].title}
                    </a>
                  </h2>
                  <span className="text-sm text-gray-600">{category1Items[1].author}</span>
                  <p className="text-gray-700 mt-2">
                 {category1Items[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-3 pl-2 space-y-6">
            {category1Items.slice(4,10).map((i, index) => (
              <div className="border-b post-list " key={index}>
                <div className="post-meta">
                  <span>{i.category}</span> <span className="mx-1">&bull;</span>
                  <span>{i.date}</span>
                </div>
                <h2 className="">
                  <a href="blog-details">{i.title}</a>
                </h2>
                <span className="author mb-3 block">{i.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category1;
