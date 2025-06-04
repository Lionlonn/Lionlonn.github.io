import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const images = [
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1019/800/400',
];

export default function ImageSlider() {
  return (
     <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      style={{ height: '400px' }}
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              borderRadius: 22,
              overflow: 'hidden',
              height: '100%',
              width: '100%',
            }}
          >
            <img
              src="https://i.pinimg.com/736x/22/86/80/228680c29a36071c7f332524ee5e83bf.jpg"
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}