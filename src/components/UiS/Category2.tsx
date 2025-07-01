import { ICategory } from "@/data";
import Image from "next/image";
import React from "react";
type Props = {
  category2Items: ICategory[];
  categoryName: string;
};

const Category2 = ({ category2Items, categoryName }: Props) => {
  return (
    <section id="business-category" className="business-category section">
      <div className=" section-title container" data-aos="fade-up">
        <div className="section-title-container flex flex-row items-center justify-between">
          <h2 className="text-[40px] font-semibold">{categoryName}</h2>
          <p className="text-sm text-blue-600">
            <a href="categories">See All {categoryName}</a>
          </p>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main content */}
          <div className="md:col-span-9 md:order-2  space-y-12">
            {/* Main large post */}
            <div className="bs-lg:flex bs-lg:flex-row post-entry gap-6">
              <a
                href="blog-details"
                className="thumbnail mb-4 lg:mb-0 block flex-shrink-0 w-full lg:w-1/2"
              >
                <Image
                  width={900}
                  height={571}
                  src={category2Items[0].image}
                  alt=""
                  className="object-cover  rounded w-full h-auto lg:w-[540] lg:h-[340]    max-w-full"
                />
              </a>
              <div className="flex h-fit flex-col justify-between">
                <div className="post-meta text-sm text-gray-500">
                  <span className="date">{category2Items[0].category}</span>{" "}
                  <span className="mx-1">•</span>{" "}
                  <span>{category2Items[0].date}</span>
                </div>
                <h3 className="">
                  <a href="blog-details">{category2Items[0].title}</a>
                </h3>
                <p className="text-gray-700 mt-2">
                  {category2Items[0].description}
                </p>
                <div className="flex items-center mt-4 author gap-3">
                  <div className="photo">
                    <Image
                      width={453}
                      height={453}
                      src="/img/person-4.jpg"
                      alt=""
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0 text-sm font-medium">Wade Warren</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary posts grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                <div className="post-list border-b pb-4">
                  <a href="blog-details">
                    <Image
                      width={900}
                      height={571}
                      src={category2Items[2].image}
                      alt=""
                      className="object-cover  rounded w-full h-auto lg:w-[260] lg:h-[160]  max-w-full"
                    />
                  </a>
                  <div className="post-meta">
                    <span>{category2Items[2].category}</span> <span className="mx-1">•</span>{" "}
                    <span>{category2Items[2].date}</span>
                  </div>
                  <h2 className="text-lg ">
                    <a href="blog-details">
                     {category2Items[2].title}
                    </a>
                  </h2>
                  <span className="author">
                    {category2Items[2].author}
                  </span>
                  <p className="text-gray-600">
                  {category2Items[2].description}
                  </p>
                </div>
                <div className="post-list">
                  <div className="post-meta text-sm text-gray-500">
                    <span>{category2Items[3].category}</span> <span className="mx-1">•</span>{" "}
                    <span>{category2Items[3].date}</span>
                  </div>
                  <h2 className="text-lg ">
                    <a href="blog-details">
                     {category2Items[3].title}
                    </a>
                  </h2>
                  <span className="author">
                    {category2Items[3].author}
                  </span>
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-2 post-list">
                <a href="blog-details">
                  <Image
                    width={900}
                    height={571}
                    src={category2Items[1].image}
                    alt=""
                    className="object-cover rounded w-full h-auto lg:w-[540] lg:h-[350]    max-w-full"
                  />
                </a>
                <div className="post-meta text-sm text-gray-500 mt-2">
                  <span>{category2Items[1].category}</span> <span className="mx-1">•</span>{" "}
                  <span>{category2Items[1].date}</span>
                </div>
                <h2 className="text-lg  font-semibold mt-2">
                  <a href="blog-details">
                 {category2Items[1].title}
                  </a>
                </h2>
                <div className="author">
                {category2Items[1].author}
                </div>
                <p className="text-gray-700 mt-1">
                {category2Items[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3 space-y-6">
            {category2Items.slice(4,10).map((i, index) => (
              <div key={index} className="post-list border-b pb-2">
                <div className="post-meta text-sm text-gray-500">
                  <span>{i.category}</span> <span className="mx-1">•</span>{" "}
                  <span>{i.date}</span>
                </div>
                <h2 className="text-base font-medium mt-2">
                  <a href="blog-details">{i.title}</a>
                </h2>
                <span className="author text-sm block">{i.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category2;
