import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/styles.css';
import '../css/Navbar.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Navbur() {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img id="mahdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MB_CIHcHiZ1o7EeymGOownwRVzOvpeIJLA&s" alt=""/></SwiperSlide>
        <SwiperSlide><img id="mahdi" src="https://play-lh.googleusercontent.com/DXRcfGhVhVjPX7HgIPc3SiE_03_howKEN1XhF5SurH_K4SVVYEWRNtmz6Z9LcXsJ1fY=w526-h296-rw" alt=""/></SwiperSlide>
        <SwiperSlide><img id="mahdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFgPLATeeKeNNyOF2v0gB0DsdNn5ESlk7Yw&s" alt=""/></SwiperSlide>
      </Swiper>
    </div>
  )
}
