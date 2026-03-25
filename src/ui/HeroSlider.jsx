import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* 🔥 IMPORT IMAGES */
import banner1Mobile from "../assets/img/1.jpg";
import banner1Desktop from "../assets/img/5.jpg";

import banner2Mobile from "../assets/img/2.jpg";
import banner2Desktop from "../assets/img/4.jpg";

import banner3Mobile from "../assets/img/3.jpg";
import banner3Desktop from "../assets/img/5.jpg";

import banner4Mobile from "../assets/img/3.jpg";
import banner4Desktop from "../assets/img/4.jpg";

export default function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
      >
        {/* 🔥 SLIDE 1 */}
        <SwiperSlide>
          <a href="/reservation">
            <picture>
              <source media="(max-width: 768px)" srcSet={banner1Mobile} />
              <img
                src={banner1Desktop}
                alt="banner1"
                className="banner-img"
                loading="lazy"
              />
            </picture>
          </a>
        </SwiperSlide>

        {/* 🔥 SLIDE 2 */}
        <SwiperSlide>
          <a href="/reservation">
            <picture>
              <source media="(max-width: 768px)" srcSet={banner2Mobile} />
              <img
                src={banner2Desktop}
                alt="banner2"
                className="banner-img"
                loading="lazy"
              />
            </picture>
          </a>
        </SwiperSlide>

        {/* 🔥 SLIDE 3 */}
        <SwiperSlide>
          <a href="/reservation">
            <picture>
              <source media="(max-width: 768px)" srcSet={banner3Mobile} />
              <img
                src={banner3Desktop}
                alt="banner3"
                className="banner-img"
                loading="lazy"
              />
            </picture>
          </a>
        </SwiperSlide>

        {/* 🔥 SLIDE 4 */}
        <SwiperSlide>
          <a href="/reservation">
            <picture>
              <source media="(max-width: 768px)" srcSet={banner4Mobile} />
              <img
                src={banner4Desktop}
                alt="banner4"
                className="banner-img"
                loading="lazy"
              />
            </picture>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}