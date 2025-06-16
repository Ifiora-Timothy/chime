"use client";
import { swiperData } from "@/data";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ScrollTop from "@/components/ScrollTop";
const Page = () => {
  return (
    <div>
      <main className="main">
        <section id="slider" className="slider section dark-background">
          <div
            className="mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="swiper-container"
            >
              {swiperData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="swiper-side min-h-[500px] w-full bg-cover bg-center flex items-end"
                    style={{
                      backgroundImage: slide.image,
                    }}
                  >
                    <div className="p-20 max-w-2xl relative z-10">
                      <h2 className="text-white text-3xl font-semibold mb-4">
                        <a
                          href="single-post.html"
                          className="text-white hover:text-gray-200"
                        >
                          {slide.header}
                        </a>
                      </h2>
                      <p className="text-white text-base">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation buttons */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </section>

        <section id="trending-category" className="trending-category py-16">
          <div
            className="mx-auto px-4 sm:px-6 l:px-8 max-w-screen-xl  "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left Column - Main Post */}
                <div className="lg:col-span-4">
                  <div className="post-entry lg">
                    <a href="blog-details.html">
                      <Image
                        width={900}
                        height={571}
                        src="/img/post-landscape-1.jpg"
                        alt=""
                        className="w-full h-auto object-cover rounded"
                      />
                    </a>
                    <div className=" post-meta text-gray-500 ">
                      <span>Culture</span> <span className="mx-1">&bull;</span>{" "}
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h2 className=" font-sembod t-2">
                      <Link href="blog-details.html">
                        11 Work From Home Part-Time Jobs You Can Do Now
                      </Link>
                    </h2>
                    <p className="my-4 text-gray-700">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero temporibus repudiandae, inventore pariatur numquam
                      cumque possimus exercitationem?
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          width={453}
                          height={453}
                          src="/img/person-1.jpg"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">
                          Cameron Williamson
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-12 gap-5">
                  {/* Middle Column */}
                  <div className="col-span-4 border-l border-gray-200 pl-5">
                    {[2, 5, 7].map((i, index) => (
                      <div key={i} className="post-entry  b-red-400">
                        <Link href="blog-details.html">
                          <Image
                            width={900}
                            height={571}
                            src={`/img/post-landscape-${i}.jpg`}
                            alt=""
                            className="w-full h-auto object-cover rounded"
                          />
                        </Link>
                        <div className="text-sm text-gray-500 mt-2">
                          <span>{["Sport", "Food", "Design"][index]}</span>{" "}
                          <span className="mx-1">&bull;</span>{" "}
                          <span>Jul {5 + index * 6}th &apos;22</span>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">
                          <Link href="blog-details.html">
                            {
                              [
                                "Let&apos;s Get Back to Work, New York",
                                "How to Avoid Distraction and Stay Focused During Video Calls?",
                                "Why Craigslist Tampa Is One of The Most Interesting Places On the Web?",
                              ][index]
                            }
                          </Link>
                        </h2>
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="col-span-4 border-l border-gray-200 pl-5">
                    {[3, 6, 8].map((i, index) => (
                      <div key={i} className="post-entry   ">
                        <Link href="blog-details.html">
                          <Image
                            width={900}
                            height={571}
                            src={`/img/post-landscape-${i}.jpg`}
                            alt=""
                            className="w-full h-auto object-cover rounded"
                          />
                        </Link>
                        <div className="text-sm text-gray-500 mt-2">
                          <span>{["Business", "Tech", "Travel"][index]}</span>{" "}
                          <span className="mx-1">&bull;</span>{" "}
                          <span>
                            {["Jul 5th", "Mar 1st", "Jul 5th"][index]} &apos;22
                          </span>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">
                          <Link href="blog-details.html">
                            {
                              [
                                "6 Easy Steps To Create Your Own Cute Merch For Instagram",
                                "10 Life-Changing Hacks Every Working Mom Should Know",
                                "5 Great Startup Tips for Female Founders",
                              ][index]
                            }
                          </Link>
                        </h2>
                      </div>
                    ))}
                  </div>

                  {/* Trending List */}
                  <div className="col-span-4  border-l border-transparent pl-5">
                    <div className="trending">
                      <h3 className="">Trending</h3>
                      <ul className="trending-post">
                        {[
                          "The Best Homemade Masks for Face (keep the Pimples Away)",
                          "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
                          "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
                          "9 Half-up/half-down Hairstyles for Long and Medium Hair",
                          "Life Insurance And Pregnancy: A Working Mom&apos;s Guide",
                        ].map((title, index) => (
                          <li key={index} className="flex flex-col">
                            <a
                              href="blog-details.html"
                              className="flex flex-col"
                            >
                              <span className="number">{index + 1}</span>
                              <h3 className="text-md font-medium leading-snug">
                                {title}
                              </h3>
                              <span className="author">
                                {
                                  [
                                    "Jane Cooper",
                                    "Wade Warren",
                                    "Esther Howard",
                                    "Cameron Williamson",
                                    "Jenny Wilson",
                                  ][index]
                                }
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
        </section>

        <section
          id="culture-category"
          className="py-16 section culture-category"
        >
          <div
            className="mx-auto section-title px-4   sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
          >
            <div className="flex section-title-container  flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[40px] font-semibold">Culture</h2>
              <p className="text-sm text-blue-600">
                <a href="categories.html">See All Culture</a>
              </p>
            </div>
          </div>

          <div
            className="mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-9">
                <div className="flex post-entry flex-col lg:flex-row gap-2">
                  <a
                    href="blog-details.html"
                    className="thumbnail me-4 inline-block mb-4 lg:mb-0"
                  >
                    <Image
                      width={900}
                      height={571}
                      src="/img/post-landscape-6.jpg"
                      alt=""
                      className="w-fll img-fluid h-auo object-over roundd"
                    />
                  </a>
                  <div>
                    <div className=" post-meta ">
                      <span>Culture</span> <span className="mx-1">&bull;</span>
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h3 className="">
                      <a href="blog-details.html">
                        What is the son of Football Coach John Gruden, Deuce
                        Gruden doing Now?
                      </a>
                    </h3>
                    <p className="mt-3 text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio placeat exercitationem magni voluptates dolore.
                      Tenetur fugiat voluptates quas, nobis error deserunt
                      aliquam temporibus sapiente, laudantium dolorum itaque
                      libero eos deleniti?
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
                        <h3 className="text-sm font-medium">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <a href="blog-details.html">
                        <Image
                          width={900}
                          height={571}
                          src="/img/post-landscape-1.jpg"
                          alt=""
                          className="w-full h-auto object-cover rounded"
                        />
                      </a>
                      <div className="text-sm text-gray-500 mt-2">
                        <span>Culture</span>{" "}
                        <span className="mx-1">&bull;</span>
                        <span>Jul 5th &apos;22</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <a href="blog-details.html">
                          11 Work From Home Part-Time Jobs You Can Do Now
                        </a>
                      </h2>
                      <span className="text-sm text-gray-600">
                        Jenny Wilson
                      </span>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">
                        <span>Culture</span>{" "}
                        <span className="mx-1">&bull;</span>
                        <span>Jul 5th &apos;22</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <a href="blog-details.html">
                          5 Great Startup Tips for Female Founders
                        </a>
                      </h2>
                      <span className="text-sm text-gray-600">
                        Jenny Wilson
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div>
                      <a href="blog-details.html">
                        <Image
                          width={900}
                          height={571}
                          src="/img/post-landscape-2.jpg"
                          alt=""
                          className="w-full h-auto object-cover rounded"
                        />
                      </a>
                      <div className="text-sm text-gray-500 mt-2">
                        <span>Culture</span>{" "}
                        <span className="mx-1">&bull;</span>
                        <span>Jul 5th &apos;22</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <a href="blog-details.html">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </a>
                      </h2>
                      <span className="text-sm text-gray-600">
                        Jenny Wilson
                      </span>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-3 pl-3 space-y-6">
                {[
                  "How to Avoid Distraction and Stay Focused During Video Calls?",
                  "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
                  "9 Half-up/half-down Hairstyles for Long and Medium Hair",
                  "Life Insurance And Pregnancy: A Working Mom’s Guide",
                  "The Best Homemade Masks for Face (keep the Pimples Away)",
                  "10 Life-Changing Hacks Every Working Mom Should Know",
                ].map((title, i) => (
                  <div className="border-b pb-2 post-list " key={i}>
                    <div className="text-sm post-meta text-gray-500">
                      <span>Culture</span> <span className="mx-1">&bull;</span>
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h2 className="pb-0">
                      <a href="blog-details.html">{title}</a>
                    </h2>
                    <span className="author mb-3 block">Jenny Wilson</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="business-category" className="business-category section">
          <div
            className="mx-auto section-title px-4 sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
          >
            <div className="section-title-container flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[40px] font-semibold">Business</h2>
              <p className="text-sm text-blue-600">
                <a href="categories.html">See All Business</a>
              </p>
            </div>
          </div>

          <div
            className="mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Main content */}
              <div className="md:col-span-9 order-2  space-y-10">
                {/* Main large post */}
                <div className="flex  flex-col lg:flex-row post-entry gap-6">
                  <a
                    href="blog-details.html"
                    className="thumbnail mb-4 lg:mb-0 block flex-shrink-0 w-full lg:w-1/2"
                  >
                    <Image
                      width={900}
                      height={571}
                      src="/img/post-landscape-3.jpg"
                      alt=""
                      className="w-full h-auto object-cover rounded"
                    />
                  </a>
                  <div className="flex flex-col justify-between">
                    <div className="post-meta text-sm text-gray-500">
                      <span className="date">Business</span>{" "}
                      <span className="mx-1">•</span> <span>Jul 5th &apos;22</span>
                    </div>
                    <h3 className="">
                      <a href="blog-details.html">
                        What is the son of Football Coach John Gruden, Deuce
                        Gruden doing Now?
                      </a>
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio placeat exercitationem magni voluptates dolore.
                      Tenetur fugiat voluptates quas, nobis error deserunt
                      aliquam temporibus sapiente, laudantium dolorum itaque
                      libero eos deleniti?
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
                        <h3 className="m-0 p-0 text-sm font-medium">
                          Wade Warren
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary posts grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left column */}
                  <div className="space-y-6">
                    <div className="post-list border-b pb-4">
                      <a href="blog-details.html">
                        <Image
                          width={900}
                          height={571}
                          src="/img/post-landscape-5.jpg"
                          alt=""
                          className="w-full h-auto object-cover rounded"
                        />
                      </a>
                      <div className="post-meta text-sm text-gray-500 mt-2">
                        <span>Business</span> <span className="mx-1">•</span>{" "}
                        <span>Jul 5th &apos;22</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <a href="blog-details.html">
                          11 Work From Home Part-Time Jobs You Can Do Now
                        </a>
                      </h2>
                      <span className="author text-sm text-gray-600 block">
                        Jenny Wilson
                      </span>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero temporibus repudiandae, inventore pariatur
                        numquam cumque possimus
                      </p>
                    </div>

                    <div className="post-list">
                      <div className="post-meta text-sm text-gray-500">
                        <span>Business</span> <span className="mx-1">•</span>{" "}
                        <span>Jul 5th &apos;22</span>
                      </div>
                      <h2 className="text-lg font-semibold mt-2">
                        <a href="blog-details.html">
                          5 Great Startup Tips for Female Founders
                        </a>
                      </h2>
                      <span className="author text-sm text-gray-600 block">
                        Jenny Wilson
                      </span>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-2 post-list">
                    <a href="blog-details.html">
                      <Image
                        width={900}
                        height={571}
                        src="/img/post-landscape-7.jpg"
                        alt=""
                        className="w-full h-auto object-cover rounded"
                      />
                    </a>
                    <div className="post-meta text-sm text-gray-500 mt-2">
                      <span>Business</span> <span className="mx-1">•</span>{" "}
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h2 className="text-lg font-semibold mt-2">
                      <a href="blog-details.html">
                        How to Avoid Distraction and Stay Focused During Video
                        Calls?
                      </a>
                    </h2>
                    <span className="author text-sm text-gray-600 block">
                      Jenny Wilson
                    </span>
                    <p className="text-gray-700 mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero temporibus repudiandae, inventore pariatur numquam
                      cumque possimus
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-3 order-1  space-y-6">
                {[
                  "How to Avoid Distraction and Stay Focused During Video Calls?",
                  "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
                  "9 Half-up/half-down Hairstyles for Long and Medium Hair",
                  "Life Insurance And Pregnancy: A Working Mom’s Guide",
                  "The Best Homemade Masks for Face (keep the Pimples Away)",
                  "10 Life-Changing Hacks Every Working Mom Should Know",
                ].map((title, i) => (
                  <div key={i} className="post-list border-b pb-2">
                    <div className="post-meta text-sm text-gray-500">
                      <span>Business</span> <span className="mx-1">•</span>{" "}
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h2 className="text-base font-medium mt-2">
                      <a href="blog-details.html">{title}</a>
                    </h2>
                    <span className="author text-sm block">Jenny Wilson</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="lifestyle-category"
          className="py-16 section business-category"
        >
          <div
            className="mx-auto section-title px-4 sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
          >
            <div className="flex section-title-container flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[40px] font-semibold">Lifestyle</h2>
              <p className="text-sm text-blue-600">
                <a href="categories.html">See All Lifestyle</a>
              </p>
            </div>
          </div>

          <div
            className="mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4">
                <div className="post-list lg">
                  <a href="blog-details.html">
                    <Image
                      width={900}
                      height={571}
                      src="/img/post-landscape-8.jpg"
                      alt=""
                      className="w-full h-auto object-cover rounded"
                    />
                  </a>
                  <div className="text-sm text-gray-500 mt-2 post-meta">
                    <span>Lifestyle</span> <span className="mx-1">•</span>{" "}
                    <span>Jul 5th &apos;22</span>
                  </div>
                  <h2 className="text-lg font-semibold mt-2 pr-3">
                    <a href="blog-details.html">
                      11 Work From Home Part-Time Jobs You Can Do Now
                    </a>
                  </h2>
                  <p className="text-gray-700 mt-2 mb-4 block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero temporibus repudiandae, inventore pariatur numquam
                    cumque possimus exercitationem? Nihil tempore odit ab minus
                    eveniet praesentium, similique blanditiis molestiae ut saepe
                    perspiciatis officia nemo, eos quae cumque. Accusamus fugiat
                    architecto rerum animi atque eveniet, quo, praesentium
                    dignissimos
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
                      <h3 className="text-sm font-medium m-0 p-0">
                        Esther Howard
                      </h3>
                    </div>
                  </div>
                </div>
                {[
                  "  The Best Homemade Masks for Face (keep the Pimples Away)",
                  "10 Life-Changing Hacks Every Working Mom Should Know",
                ].map((i, index) => (
                  <div key={index} className="post-list border-b pb-4">
                    <div className="text-sm text-gray-500 post-meta">
                      <span>Lifestyle</span> <span className="mx-1">•</span>{" "}
                      <span>Jul 5th &apos;22</span>
                    </div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">
                      <a href="blog-details.html">{i}</a>
                    </h2>
                    <span className="text-sm text-gray-600 author mb-3 block">
                      Jenny Wilson
                    </span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div className="border-l pl-4 custom-border">
                    <div className="post-list space-y-4">
                      {[
                        "Let&apos;s Get Back to Work, New York",
                        "How to Avoid Distraction and Stay Focused During Video Calls?",
                        "Why Craigslist Tampa Is One of The Most Interesting Places On the Web?",
                      ].map((i, index) => (
                        <div key={index}>
                          <a href="blog-details.html">
                            <Image
                              width={900}
                              height={571}
                              src={`/img/post-landscape-${index + 4}.jpg`}
                              alt=""
                              className="w-full h-auto object-cover rounded"
                            />
                          </a>
                          <div className="text-sm text-gray-500 mt-2 post-meta">
                            <span>Lifestyle</span>{" "}
                            <span className="mx-1">•</span>{" "}
                            <span>Jul 5th &apos;22</span>
                          </div>
                          <h2 className="text-lg font-semibold mt-2">
                            <a href="blog-details.html">{i}</a>
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-l pl-4 custom-border">
                    <div className="post-list space-y-4">
                      {[
                        "6 Easy Steps To Create Your Own Cute Merch For Instagram",
                        "10 Life-Changing Hacks Every Working Mom Should Know",
                        " 5 Great Startup Tips for Female Founders",
                      ].map((i, index) => (
                        <div key={index}>
                          <a href="blog-details.html">
                            <Image
                              width={900}
                              height={571}
                              src={`/img/post-landscape-${index + 1}.jpg`}
                              alt=""
                              className="w-full h-auto object-cover rounded"
                            />
                          </a>
                          <div className="text-sm text-gray-500 mt-2 post-meta">
                            <span>Lifestyle</span>{" "}
                            <span className="mx-1">•</span>{" "}
                            <span>Jul 5th &apos;22</span>
                          </div>
                          <h2 className="text-lg font-semibold mt-2">
                            <a href="blog-details.html">{i}</a>
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "How to Avoid Distraction and Stay Focused During Video Calls?",
                      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
                      "9 Half-up/half-down Hairstyles for Long and Medium Hair",
                      "Life Insurance And Pregnancy: A Working Mom&apos;s Guide",
                      "The Best Homemade Masks for Face (keep the Pimples Away)",
                      "10 Life-Changing Hacks Every Working Mom Should Know",
                    ].map((i, index) => (
                      <div key={index} className="post-list border-b pb-4">
                        <div className="text-sm text-gray-500 post-meta">
                          <span>Lifestyle</span> <span className="mx-1">•</span>{" "}
                          <span>Jul 5th &apos;22</span>
                        </div>
                        <h2 className="text-lg font-semibold mt-2 mb-2">
                          <a href="blog-details.html">{i}</a>
                        </h2>
                        <span className="  author mb-3 block">
                          Jenny Wilson
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

 
      <ScrollTop />
    </div>
  );
};

export default Page;
