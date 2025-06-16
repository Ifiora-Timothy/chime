import { categoryArticles, categoryPostItems } from "@/data";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { ArrowRight, ChevronLeft, ChevronRight, FolderClosed, Linkedin, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Category() {
  return (
    <main className="main">
      <div className="page-title">
        <div className="container mx-auto px-4  max-w-screen-xl lg:flex lg:justify-between lg:items-center">
          <h1 className="mb-2 lg:mb-0">Category</h1>
          <nav className="breadcrumbs">
            <ol className="">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="current ">Category</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <section id="blog-posts" className="blog-posts section">
              <div className="container  mx-auto px-4">
                <div className="grid grid-cols-12 gap-6">
                  {categoryArticles.map((catItem, index) => (
                    <div className="col-span-6 " key={index}>
                      <article className="relative flex flex-col h-full">
                        <div className="post-img relative overflow-hidden">
                          <Image
                            src={catItem.image}
                            height={768}
                            width={1024}
                            className="img-fluid"
                            alt=""
                          />
                          <span className="post-date">{catItem.date}</span>
                        </div>

                        <div className="post-content  flex flex-col flex-1">
                          <h3 className="post-title">{catItem.title}</h3>

                          <div className="meta flex items-center">
                            <div className="flex items-center">
                              <User size={16} strokeWidth={1} />
                              <span className="ps-2">{catItem.author}</span>
                            </div>
                            <span className="px-3 text-black-50">/</span>
                            <div className="flex items-center">
                              <FolderClosed size={16} strokeWidth={1} />
                            <span className="ps-2">{catItem.category}</span>
                            </div>
                          </div>

                          <p>{catItem.description}</p>

                          <div className=" mt-auto ">
                            <hr className="" />
                            <Link
                              href="blog-details.html"
                              className="readmore stretched-link gap-1 flex items-baseline"
                            >
                              <span>Read More</span>
                              <ArrowRight size={16} strokeWidth={1} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
        
          <section id="blog-pagination" className="blog-pagination section">

            <div className="container">
              <div className="flex justify-center items-center">
                <ul>
                  <li><Link href="#"><ChevronLeft strokeWidth={1} size={22}/></Link></li>
                  <li><Link href="#">1</Link></li>
                  <li><Link href="#" className="active">2</Link></li>
                  <li><Link href="#">3</Link></li>
                  <li><Link href="#">4</Link></li>
                  <li>...</li>
                  <li><Link href="#">10</Link></li>
                  <li><Link href="#"><ChevronRight strokeWidth={1} size={22}/></Link></li>
                </ul>
              </div>
            </div>

          </section>

          </div>
          <div className="col-span-4 sidebar">
            <div className="widgets-container">
              <div className="blog-author-widget-2 widget-item">
                <div className="flex flex-col items-center">
                  <Image
                    src="/img/blog/blog-author.jpg"
                    height={600}
                    width={600}
                    className="rounded-full flex-shrink-0"
                    alt=""
                  />
                  <h4>Jane Smith</h4>
                  <div className="social-links flex pt-1 space-x-2">
                    <Link href="" className="text-gray-400 hover:text-blue-500">
                      <SiX size={18} />
                    </Link>
                    <Link href="" className="text-gray-400 hover:text-blue-500">
                      <SiFacebook size={18} />
                    </Link>
                    <Link href="" className="text-gray-400 hover:text-pink-500">
                      <SiInstagram size={18} />
                    </Link>
                    <Link href="" className="text-gray-400 hover:text-blue-500">
                      <Linkedin size={18} />
                    </Link>
                  </div>

                  <p className="text-left pt-1">
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className="search-widget widget-item">
                <h3 className="widget-title">Search</h3>
                <form action="">
                  <input type="text" />
                  <button type="submit" title="Search">
                    <Search size={18}/>
                  </button>
                </form>
              </div>

              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                {categoryPostItems.map((item, index) => (
                  <div key={index} className="post-item">
                    <Image
                      src={item.image}
                      height={768}
                      width={1024}
                      alt=""
                      className="flex-shrink-0"
                    />
                    <div>
                      <h4>
                        <Link href="blog-details.html">{item.title}</Link>
                      </h4>
                      <time dateTime="2020-01-01">Jan 1, 2020</time>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li>
                    <Link href="#">App</Link>
                  </li>
                  <li>
                    <Link href="#">IT</Link>
                  </li>
                  <li>
                    <Link href="#">Business</Link>
                  </li>
                  <li>
                    <Link href="#">Mac</Link>
                  </li>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>
                    <Link href="#">Office</Link>
                  </li>
                  <li>
                    <Link href="#">Creative</Link>
                  </li>
                  <li>
                    <Link href="#">Studio</Link>
                  </li>
                  <li>
                    <Link href="#">Smart</Link>
                  </li>
                  <li>
                    <Link href="#">Tips</Link>
                  </li>
                  <li>
                    <Link href="#">Marketing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
