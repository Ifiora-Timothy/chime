"use client";
import { swiperData } from "@/data";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSwiper = () => {
  return (
    <section id="slider" className="slider section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
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
                className="swiper-side h-[500px] w-full bg-cover bg-center flex items-end"
                style={{
                  backgroundImage: slide.image,
                }}
              >
                <div className="p-20 max-w-2xl relative z-10">
                  <h2 className="text-white text-3xl font-semibold mb-4">
                    <a
                      href="single-post"
                      className="text-white hover:text-gray-200"
                    >
                      {slide.header}
                    </a>
                  </h2>
                  <p className="text-white text-base">{slide.description}</p>
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
  );
};

export default HeroSwiper;
