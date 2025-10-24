import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const ImageSlider = () => (
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    loop
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="w-full h-[70vh] relative z-0 "
  >
    <SwiperSlide className="relative">
      <img
        className="w-full h-full object-cover"
        src={img1}
        alt="Fresh Indoor Plants"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-wide">
          Breathe Better, Live Greener
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl">
          Surround yourself with plants that refresh your air and your soul.
        </p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="relative">
      <img
        className="w-full h-full object-cover"
        src={img2}
        alt="Caring for Plants"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-wide">
          Nurture Nature, Nurture Yourself
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl">
          Every leaf tells a story of care — grow happiness in every corner.
        </p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="relative">
      <img
        className="w-full h-full object-cover"
        src={img3}
        alt="Hanging Houseplants"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-wide">
          Green Corners, Happy Homes
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl">
          Discover elegant houseplants that bring life, color, and calm indoors.
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default ImageSlider;
