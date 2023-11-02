import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix';
import PageSeven from './PageSeven';

const MobileView = () => (
  <Swiper
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    spaceBetween={200}
    slidesPerView={1}
    className="swiper-contatiner w-100"
  >
    <SwiperSlide>
      <PageOne />
    </SwiperSlide>
    <SwiperSlide>
      <PageTwo />
    </SwiperSlide>
    <SwiperSlide>
      <PageThree />
    </SwiperSlide>
    <SwiperSlide>
      <PageFour />
    </SwiperSlide>
    <SwiperSlide>
      <PageFive />
    </SwiperSlide>
    <SwiperSlide>
      <PageSix />
    </SwiperSlide>
    <SwiperSlide>
      <PageSeven />
    </SwiperSlide>
  </Swiper>
);

export default MobileView;
