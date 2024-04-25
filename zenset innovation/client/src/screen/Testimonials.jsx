import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

import "../styles/Testimonials.css";

import { Scrollbar } from "swiper/modules";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../component/Footer";
function Testimonials() {
  return (
    <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
      <h3 className="head tracking-[.35em]">TESTIMONIALS</h3>
      <h1 className="titel">Our clients says</h1>
      <div className="descContain">
        <h3 className="desc">
          Don't take our word for it Hear it from our happy clients
        </h3>
      </div>
      <div className="gap-5">
        {/* card */}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper testCard"
        >
          <SwiperSlide className="testSlide">
            <p className="testTitel">
              I hired Digital Agency to design and develop my e-commerce
              website, and I couldn't be happier with the result. They were
              professional, creative, and responsive throughout the whole
              process. They listened to my needs and preferences, and delivered
              a website that exceeded my expectations. The website is beautiful,
              user-friendly, and fast. It has increased my sales and conversions
              significantly. I highly recommend Digital Agency to anyone looking
              for a reliable and talented digital partner.
            </p>
            <div className="testDetail">
              <img
                src="https://i.pinimg.com/564x/96/5d/7f/965d7f34e9f67fc3dec218a740b4142c.jpg"
                alt=""
              />
              <h3>Nitish Raiput</h3>
              <p>Funder, iAcademy</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testSlide">
            <div className="testTitel">
              <p>
                ZenSet Innovation transformed our online presence! Their team's
                expertise in web design and digital marketing helped us reach
                new heights. With their innovative solutions, we saw a
                significant increase in website traffic and conversions. Highly
                recommended!
              </p>
            </div>
            <div className="testDetail">
              <img
                src="https://i.pinimg.com/564x/96/5d/7f/965d7f34e9f67fc3dec218a740b4142c.jpg"
                alt=""
              />
              <h3>Nitish Raiput</h3>
              <p>Funder, iAcademy</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Testimonials;
