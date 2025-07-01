import Image from 'next/image'
import React from 'react'

type Props = {}

const Trendingprev = (props: Props) => {
  return (
    <section
        id="lifestyle-category"
        className="py-16 section business-category"
      >
        <div className=" section-title container" data-aos="fade-up">
          <div className="flex section-title-container items-center justify-between">
            <h2 className="text-[40px] font-semibold">Lifestyle</h2>
            <p className="text-sm text-blue-600">
              <a href="categories">See All Lifestyle</a>
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
                  <a href="blog-details">
                    11 Work From Home Part-Time Jobs You Can Do Now
                  </a>
                </h2>
                <p className="text-gray-700 mt-2 mb-4 block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  temporibus repudiandae, inventore pariatur numquam cumque
                  possimus exercitationem? Nihil tempore odit ab minus eveniet
                  praesentium, similique blanditiis molestiae ut saepe
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
                    <h3 className="text-sm font-medium m-0 p-0">Esther Howard</h3>
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
                    <a href="blog-details">{i}</a>
                  </h2>
                  <span className="text-sm text-gray-600 author mb-3 block">
                    Jenny Wilson
                  </span>
                </div>
              ))}
            </div>
  
            <div className="bs-lg:col-span-8">
              <div className="grid rw  grid-cols-1 bs-lg:grid-cols-3 gap-5">
                <div className="md:border-l bs-lg:col-span-1 md:pl-4 custom-border">
                  <div className="post-list space-y-4">
                    {[
                      "Let's Get Back to Work, New York",
                      "How to Avoid Distraction and Stay Focused During Video Calls?",
                      "Why Craigslist Tampa Is One of The Most Interesting Places On the Web?",
                    ].map((i, index) => (
                      <div key={index}>
                        <a href="blog-details">
                          <Image
                            width={900}
                            height={571}
                            src={`/img/post-landscape-${index + 4}.jpg`}
                            alt=""
                            className="w-full h-auto object-cover rounded"
                          />
                        </a>
                        <div className="text-sm text-gray-500 mt-2 post-meta">
                          <span>Lifestyle</span> <span className="mx-1">•</span>{" "}
                          <span>Jul 5th &apos;22</span>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">
                          <a href="blog-details">{i}</a>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:border-l  bs-lg:col-span-1 md:pl-4 custom-border">
                  <div className="post-list space-y-4">
                    {[
                      "6 Easy Steps To Create Your Own Cute Merch For Instagram",
                      "10 Life-Changing Hacks Every Working Mom Should Know",
                      " 5 Great Startup Tips for Female Founders",
                    ].map((i, index) => (
                      <div key={index}>
                        <a href="blog-details">
                          <Image
                            width={900}
                            height={571}
                            src={`/img/post-landscape-${index + 1}.jpg`}
                            alt=""
                            className="w-full h-auto object-cover rounded"
                          />
                        </a>
                        <div className="text-sm text-gray-500 mt-2 post-meta">
                          <span>Lifestyle</span> <span className="mx-1">•</span>{" "}
                          <span>Jul 5th &apos;22</span>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">
                          <a href="blog-details">{i}</a>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4  bs-lg:col-span-1">
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
                        <a href="blog-details">{i}</a>
                      </h2>
                      <span className="  author mb-3 block">Jenny Wilson</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Trendingprev