import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/img/1.jpg";
import banner2 from "../assets/img/2.jpg";
import banner3 from "../assets/img/3.jpg";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      style={{ width: "100%", height: "500px" }}
    >
      <SwiperSlide>
        <img src={banner1} style={imgStyle} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={banner2} style={imgStyle} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={banner3} style={imgStyle} />
      </SwiperSlide>
    </Swiper>
  );
}

const imgStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover"
};