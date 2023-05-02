import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";

import "./Swipers.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


import { Button, Image } from "react-bootstrap";

import photo from "../../images/projects/1.jpg";
import photo2 from "../../images/projects/2.jpg";
import photo3 from "../../images/projects/3.3.jpg";
import photo4 from "../../images/projects/4.jpg";
// import photo5 from "../../images/projects/5.jpg";
import photo6 from "../../images/projects/6.jpg";
import photo7 from "../../images/projects/7.jpg";
import photo8 from "../../images/projects/8.jpg";


const SwiperSlides = () => {
  return (
    <div className="swiperSlider">
      <div className="container pb-5">
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
           modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={photo4} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide>
            <Image src={photo} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://tour-travel-554.netlify.app"
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://github.com/sujon554/paradise-tour-client"
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide className="swissClock">
            <Image src={photo2} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://swisseagle.netlify.app/home"
                target="_blank"
              >
                Live Site
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://github.com/sujon554/swiss-watch"
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide>
            <Image src={photo3} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://lovely-lamington-a3e4ec.netlify.app/"
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://github.com/sujon554/doctors-portal"
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide >
            <Image src={photo4} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://lucky-crepe-ac7866.netlify.app/"
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href="https://github.com/sujon554/genus-car-mecanic"
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide>
            <Image src={photo6} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide>
            <Image src={photo7} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>


          <SwiperSlide>
            <Image src={photo8} />
            <Button className="btn btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                Live Site{" "}
              </a>
            </Button>
            <Button className="btn2 btn-success">
              <a
                className="text-decoration-none text-white"
                href=""
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlides;
