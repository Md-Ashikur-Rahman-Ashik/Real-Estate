// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mx-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://i.ibb.co/0YTyRpw/first-Banner-Image.jpg"
            className="rounded-xl"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/ynLCB1q/second-Banner-Image.jpg"
            className="rounded-xl"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FqzntSb/third-Banner-Image.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
