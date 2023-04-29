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
import { Button, Image } from "react-bootstrap";

import photo from "../../images/projects/1.jpg";
import photo2 from "../../images/projects/2.jpg";
import photo3 from "../../images/projects/3.3.jpg";
import photo4 from "../../images/projects/4.jpg";
import photo5 from "../../images/projects/5.jpg";
import photo6 from "../../images/projects/6.jpg";
import photo7 from "../../images/projects/7.jpg";
import photo8 from "../../images/projects/8.jpg";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlides = () => {
  return (
    <div className="swiperSlider">
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
            <Button className="btn btn-success ">
              <a
              className="text-decoration-none text-white" 
              href="https://upbeat-bell-7434a8.netlify.app" target="_blank">
                Live Site
              </a>
            </Button>
            <Button className="btn2 btn-success">GitHub</Button>
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo3} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo4} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo5} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo6} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo7} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={photo8} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlides;
