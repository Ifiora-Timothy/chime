import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import {  Clock, FolderClosed, Linkedin, MessageCircleMore, Tags, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const SinglePost = () => {
  return (
    <main className="main max-w-screen overflow-hidden">
      <div className="page-title">
        <div className="container mx-auto px-4  max-w-screen-xl lg:flex lg:justify-between lg:items-center">
          <h1 className="mb-2 lg:mb-0">Single Post</h1>
          <nav className="breadcrumbs">
            <ol className="">
              <li>
                   <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="current ">Single Post</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <section id="blog-details" className="blog-details section py-16">
              <div className="container  mx-auto px-2">
                <article className="article">
                  <div className="post-img">
                    <Image
                      src="/img/blog/blog-1.jpg"
                      height={768}
                      width={1024}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="title text-3xl font-bold mb-6 text-gray-900">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </h2>

                  <div className="meta-top mb-8">
                    <ul className="flex flex-wrap gap-x-1 gap-y-3 md:gap-6 ">
                      <li className="flex items-center">
                        <User  strokeWidth={1}  className="mr-2" size={18} />
                        <a
                          href="blog-details"
                          className="hover:text-blue-600"
                        >
                          John Doe
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Clock className="mr-2" strokeWidth={1} size={18} />
                        <a
                          href="blog-details"
                          className="hover:text-blue-600"
                        >
                          <time dateTime="2020-01-01">Jan 1, 2022</time>
                        </a>
                      </li>
                      <li className="flex items-center justify-start c mr-auto">
                        <MessageCircleMore strokeWidth={1} className="mr-2 " size={18} />
                        <Link
                          href="blog-details"
                          className="hover:text-blue-600"
                        >
                          12 Comments
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="content prose max-w-none">
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Similique neque nam consequuntur ad non maxime aliquam
                      quas. Quibusdam animi praesentium. Aliquam et laboriosam
                      eius aut nostrum quidem aliquid dicta. Et eveniet enim.
                      Qui velit est ea dolorem doloremque deleniti aperiam unde
                      soluta. Est cum et quod quos aut ut et sit sunt. Voluptate
                      porro consequatur assumenda perferendis dolore.
                    </p>

                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt
                      non reiciendis. Sequi in accusamus harum vel aspernatur.
                      Excepturi numquam nihil cumque odio. Et voluptate
                      cupiditate.
                    </p>

                    <blockquote className=" pl-6 py-2 mb-6 bg-gray-50 italic">
                      <p className="text-gray-700">
                        Et vero doloremque tempore voluptatem ratione vel aut.
                        Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                        autem quos.
                      </p>
                    </blockquote>

                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Sed quo laboriosam qui architecto. Occaecati repellendus
                      omnis dicta inventore tempore provident voluptas mollitia
                      aliquid. Id repellendus quia. Asperiores nihil magni dicta
                      est suscipit perspiciatis. Voluptate ex rerum assumenda
                      dolores nihil quaerat. Dolor porro tempora et quibusdam
                      voluptas. Beatae aut at ad qui tempore corrupti velit
                      quisquam rerum. Omnis dolorum exercitationem harum qui qui
                      blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                      aspernatur ea neque qui. Architecto voluptatem magni. Vel
                      magnam quod et tempora deleniti error rerum nihil tempora.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      Et quae iure vel ut odit alias.
                    </h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Officiis animi maxime nulla quo et harum eum quis a. Sit
                      hic in qui quos fugit ut rerum atque. Optio provident
                      dolores atque voluptatem rem excepturi molestiae qui.
                      Voluptatem laborum omnis ullam quibusdam perspiciatis
                      nulla nostrum. Voluptatum est libero eum nesciunt aliquid
                      qui. Quia et suscipit non sequi. Maxime sed odit. Beatae
                      nesciunt nesciunt accusamus quia aut ratione aspernatur
                      dolor. Sint harum eveniet dicta exercitationem minima.
                      Exercitationem omnis asperiores natus aperiam dolor
                      consequatur id ex sed. Quibusdam rerum dolores sint
                      consequatur quidem ea. Beatae minima sunt libero soluta
                      sapiente in rem assumenda. Et qui odit voluptatem. Cum
                      quibusdam voluptatem voluptatem accusamus mollitia aut
                      atque aut.
                    </p>
                    <Image
                      src="/img/blog/blog-inside-post.jpg"
                      height={768}
                      width={1024}
                      className="Image-fluid w-full h-auto rounded-lg mb-6"
                      alt=""
                    />

                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      Ut repellat blanditiis est dolore sunt dolorum quae.
                    </h3>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                      porro amet nostrum. In assumenda quia quae a id
                      praesentium. Quos deleniti libero sed occaecati aut porro
                      autem. Consectetur sed excepturi sint non placeat quia
                      repellat incidunt labore. Autem facilis hic dolorum
                      dolores vel. Consectetur quasi id et optio praesentium aut
                      asperiores eaque aut. Explicabo omnis quibusdam esse. Ex
                      libero illum iusto totam et ut aut blanditiis. Veritatis
                      numquam ut illum ut a quam vitae.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                      enim omnis ipsa voluptas incidunt. Nulla sit eaque
                      mollitia nisi asperiores est veniam.
                    </p>
                  </div>
                  <div className="meta-bottom flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-gray-600">
                      <i className="bi bi-folder mr-2"></i>
                      <FolderClosed
                        strokeWidth={1}
                        className="mr-2 text-gray-600"
                        size={18}
                      />
                      <ul className="cats flex">
                        <li>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Business
                          </a>
                        </li>
                      </ul>
                      <Tags strokeWidth={1} className="ml-4 mr-1 text-gray-600" size={18} />
                      <i className="bi bi-tags"></i>
                      <ul className="tags">
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">Tips</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section id="blog-comments" className="blog-comments section py-16">
              <div className="container">
                <h4 className="comments-count text-2xl font-semibold mb-8">
                  8 Comments
                </h4>

                <div
                  id="comment-1"
                  className="comment "
                >
                  <div className="flex gap-4">
                    <div className="comment-Image flex-shrink-0">
                      <Image
                        src="/img/blog/comments-1.jpg"
                        height={200}
                        width={200}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">
                          <a
                            href=""
                            className="text-gray-900 hover:text-blue-600"
                          >
                            Georgia Reader
                          </a>
                        </h5>
                        <a
                          href="#"
                          className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <i className="bi bi-reply-fill mr-1"></i> Reply
                        </a>
                      </div>
                      <time
                        dateTime="2020-01-01"
                        className="text-sm text-gray-500 block mb-3"
                      >
                        01 Jan, 2022
                      </time>
                      <p className="text-gray-700 leading-relaxed">
                        Et rerum totam nisi. Molestiae vel quam dolorum vel
                        voluptatem et et. Est ad aut sapiente quis molestiae est
                        qui cum soluta. Vero aut rerum vel. Rerum quos
                        laboriosam placeat ex qui. Sint qui facilis et.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="comment-2"
                  className="comment"
                >
                  <div className="flex gap-4">
                    <div className="comment-Image flex-shrink-0">
                      <Image
                        src="/img/blog/comments-2.jpg"
                        height={200}
                        width={200}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">
                          <a
                            href=""
                            className="text-gray-900 hover:text-blue-600"
                          >
                            Aron Alvarado
                          </a>
                        </h5>
                        <a
                          href="#"
                          className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <i className="bi bi-reply-fill mr-1"></i> Reply
                        </a>
                      </div>
                      <time
                        dateTime="2020-01-01"
                        className="text-sm text-gray-500 block mb-3"
                      >
                        01 Jan, 2022
                      </time>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Ipsam tempora sequi voluptatem quis sapiente non. Autem
                        itaque eveniet saepe. Officiis illo ut beatae.
                      </p>
                    </div>
                  </div>

                  <div
                    id="comment-reply-1"
                    className="comment comment-reply"
                  >
                    <div className="flex gap-4">
                      <div className="comment-Image flex-shrink-0">
                        <Image
                          src="/img/blog/comments-3.jpg"
                          height={200}
                          width={200}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold">
                            <a
                              href=""
                              className="text-gray-900 hover:text-blue-600"
                            >
                              Lynda Small
                            </a>
                          </h5>
                          <a
                            href="#"
                            className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                          >
                            <i className="bi bi-reply-fill mr-1"></i> Reply
                          </a>
                        </div>
                        <time
                          dateTime="2020-01-01"
                          className="text-sm text-gray-500 block mb-3"
                        >
                          01 Jan, 2022
                        </time>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Enim ipsa eum fugiat fuga repellat. Commodi quo quo
                          dicta. Est ullam aspernatur ut vitae quia mollitia id
                          non. Qui ad quas nostrum rerum sed necessitatibus aut
                          est. Eum officiis sed repellat maxime vero nisi natus.
                          Amet nesciunt nesciunt qui illum omnis est et dolor
                          recusandae. Recusandae sit ad aut impedit et. Ipsa
                          labore dolor impedit et natus in porro aut. Magnam qui
                          cum. Illo similique occaecati nihil modi eligendi.
                          Pariatur distinctio labore omnis incidunt et illum.
                          Expedita et dignissimos distinctio laborum minima
                          fugiat. Libero corporis qui. Nam illo odio beatae enim
                          ducimus. Harum reiciendis error dolorum non autem
                          quisquam vero rerum neque.
                        </p>
                      </div>
                    </div>

                    <div
                      id="comment-reply-2"
                      className="comment comment-reply"
                    >
                      <div className="flex gap-4">
                        <div className="comment-Image flex-shrink-0">
                          <Image
                            src="/img/blog/comments-4.jpg"
                            height={200}
                            width={200}
                            alt=""
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold">
                              <a
                                href=""
                                className="text-gray-900 hover:text-blue-600"
                              >
                                Sianna Ramsay
                              </a>
                            </h5>
                            <a
                              href="#"
                              className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                            >
                              <i className="bi bi-reply-fill mr-1"></i> Reply
                            </a>
                          </div>
                          <time
                            dateTime="2020-01-01"
                            className="text-sm text-gray-500 block mb-3"
                          >
                            01 Jan, 2022
                          </time>
                          <p className="text-gray-700 leading-relaxed">
                            Et dignissimos impedit nulla et quo distinctio ex
                            nemo. Omnis quia dolores cupiditate et. Ut unde qui
                            eligendi sapiente omnis ullam. Placeat porro est
                            commodi est officiis voluptas repellat quisquam
                            possimus. Perferendis id consectetur necessitatibus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="comment-3"
                  className="comment"
                >
                  <div className="flex gap-4">
                    <div className="comment-Image flex-shrink-0">
                      <Image
                        src="/img/blog/comments-5.jpg"
                        height={200}
                        width={200}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">
                          <a
                            href=""
                            className="text-gray-900 hover:text-blue-600"
                          >
                            Nolan Davidson
                          </a>
                        </h5>
                        <a
                          href="#"
                          className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <i className="bi bi-reply-fill mr-1"></i> Reply
                        </a>
                      </div>
                      <time
                        dateTime="2020-01-01"
                        className="text-sm text-gray-500 block mb-3"
                      >
                        01 Jan, 2022
                      </time>
                      <p className="text-gray-700 leading-relaxed">
                        Distinctio nesciunt rerum reprehenderit sed. Iste omnis
                        eius repellendus quia nihil ut accusantium tempore.
                        Nesciunt expedita id dolor exercitationem aspernatur aut
                        quam ut. Voluptatem est accusamus iste at. Non aut et et
                        esse qui sit modi neque. Exercitationem et eos
                        aspernatur. Ea est consequuntur officia beatae ea aut
                        eos soluta. Non qui dolorum voluptatibus et optio
                        veniam. Quam officia sit nostrum dolorem.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="comment-4"
                  className="comment"
                >
                  <div className="flex gap-4">
                    <div className="comment-Image flex-shrink-0">
                      <Image
                        src="/img/blog/comments-6.jpg"
                        height={200}
                        width={200}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">
                          <a
                            href=""
                            className="text-gray-900 hover:text-blue-600"
                          >
                            Kay Duggan
                          </a>
                        </h5>
                        <a
                          href="#"
                          className="reply text-blue-600 hover:text-blue-800 text-sm flex items-center"
                        >
                          <i className="bi bi-reply-fill mr-1"></i> Reply
                        </a>
                      </div>
                      <time
                        dateTime="2020-01-01"
                        className="text-sm text-gray-500 block mb-3"
                      >
                        01 Jan, 2022
                      </time>
                      <p className="text-gray-700 leading-relaxed">
                        Dolorem atque aut. Omnis doloremque blanditiis quia eum
                        porro quis ut velit tempore. Cumque sed quia ut maxime.
                        Est ad aut cum. Ut exercitationem non in fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="comment-form"
              className="comment-form section "
            >
              <div className="container mx-auto px-4">
                <form action="" className="">
                  <h4 className="text-2xl font-semibold mb-4">Post Comment</h4>
                  <p className="text-gray-600 mb-8">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="text"
                        className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Email*"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="form-group">
                      <input
                        name="website"
                        type="text"
                        className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Website"
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="form-group">
                      <textarea
                        name="comment"
                        className="form-control w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                        placeholder="Your Comment*"
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 sidebar">
            <div className="widgets-container space-y-8">
              <div className="blog-author-widget widget-item">
                <div className="flex flex-col items-center">
                  <div className="flex items-center w-full ">
                    <Image
                      src="/img/blog/blog-author.jpg"
                      height={600}
                      width={600}
                      className="rounded-full flex-shrink-0 "
                      alt=""
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Jane Smith</h4>
                      <div className="social-links flex pt-1.5 space-x-2">
                        <a
                          href=""
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <SiX size={18} />
                        </a>
                        <a
                          href=""
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <SiFacebook size={18} />
                        </a>
                        <a
                          href=""
                          className="text-gray-400 hover:text-pink-500"
                        >
                          <SiInstagram size={18} />
                        </a>
                        <a
                          href=""
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-left">
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className="search-widget widget-item bg-white p-6 rounded-lg shadow-sm">
                <h3 className="widget-title text-xl font-semibold mb-4">
                  Search
                </h3>
                <form action="" className="flex">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    title="Search"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              <div className="recent-posts-widget widget-item bg-white p-6 rounded-lg shadow-sm">
                <h3 className="widget-title text-xl font-semibold mb-6">
                  Recent Posts
                </h3>

                <div className="post-item flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                  <Image
                    src="/img/blog/blog-recent-1.jpg"
                    height={200}
                    width={200}
                    alt=""
                    className="flex-shrink-0 w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="mb-2">
                      <a
                        href="blog-details"
                        className="text-gray-900 hover:text-blue-600 font-medium leading-tight"
                      >
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time
                      dateTime="2020-01-01"
                      className="text-sm text-gray-500"
                    >
                      Jan 1, 2020
                    </time>
                  </div>
                </div>

                <div className="post-item flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                  <Image
                    src="/img/blog/blog-recent-2.jpg"
                    height={200}
                    width={200}
                    alt=""
                    className="flex-shrink-0 w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="mb-2">
                      <a
                        href="blog-details"
                        className="text-gray-900 hover:text-blue-600 font-medium leading-tight"
                      >
                        Quidem autem et impedit
                      </a>
                    </h4>
                    <time
                      dateTime="2020-01-01"
                      className="text-sm text-gray-500"
                    >
                      Jan 1, 2020
                    </time>
                  </div>
                </div>

                <div className="post-item flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                  <Image
                    src="/img/blog/blog-recent-3.jpg"
                    height={200}
                    width={200}
                    alt=""
                    className="flex-shrink-0 w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="mb-2">
                      <a
                        href="blog-details"
                        className="text-gray-900 hover:text-blue-600 font-medium leading-tight"
                      >
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time
                      dateTime="2020-01-01"
                      className="text-sm text-gray-500"
                    >
                      Jan 1, 2020
                    </time>
                  </div>
                </div>

                <div className="post-item flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                  <Image
                    src="/img/blog/blog-recent-4.jpg"
                    height={200}
                    width={200}
                    alt=""
                    className="flex-shrink-0 w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="mb-2">
                      <a
                        href="blog-details"
                        className="text-gray-900 hover:text-blue-600 font-medium leading-tight"
                      >
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time
                      dateTime="2020-01-01"
                      className="text-sm text-gray-500"
                    >
                      Jan 1, 2020
                    </time>
                  </div>
                </div>

                <div className="post-item flex gap-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                  <Image
                    src="/img/blog/blog-recent-5.jpg"
                    height={200}
                    width={200}
                    alt=""
                    className="flex-shrink-0 w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="mb-2">
                      <a
                        href="blog-details"
                        className="text-gray-900 hover:text-blue-600 font-medium leading-tight"
                      >
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time
                      dateTime="2020-01-01"
                      className="text-sm text-gray-500"
                    >
                      Jan 1, 2020
                    </time>
                  </div>
                </div>
              </div>

              <div className="tags-widget widget-item bg-white p-6 rounded-lg shadow-sm">
                <h3 className="widget-title text-xl font-semibold mb-4">
                  Tags
                </h3>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <a
                      href="#"
                      className="inline-block py-1 px-3 text-sm text-gray-600 bg-gray-100 rounded"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-1 px-3 text-sm text-gray-600 bg-gray-100 rounded"
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-1 px-3 text-sm text-gray-600 bg-gray-100 rounded"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-1 px-3 text-sm text-gray-600 bg-gray-100 rounded"
                    >
                      SEO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block py-1 px-3 text-sm text-gray-600 bg-gray-100 rounded"
                    >
                      Content Writing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="author-widget widget-item bg-white p-6 rounded-lg shadow-sm">
                <h3 className="widget-title text-xl font-semibold mb-4">
                  About the Author
                </h3>
                <div className="flex items-center">
                  <Image
                    src="/img/blog/blog-author.jpg"
                    alt=""
                    height={600}
                    width={600}
                    className="w-16 h-16 object-cover rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">
                      Web Designer & Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SinglePost;
