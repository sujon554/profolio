import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swipers.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { Image } from "react-bootstrap";

import photo from "../../images/projects/1.jpg";
import photo2 from "../../images/projects/2.jpg";
import photo3 from "../../images/projects/3.3.jpg";
import photo4 from "../../images/projects/4.jpg";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlides = () => {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="title_">
          <h1>Project's</h1>
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={photo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://picsum.photos/id/237/200/300" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://picsum.photos/id/237/200/300" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
