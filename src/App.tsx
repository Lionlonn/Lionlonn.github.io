import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import ImageSlider from './imagesSlider';

const images = [
  'https://source.unsplash.com/random/800x400?sig=1',
  'https://source.unsplash.com/random/800x400?sig=2',
  'https://source.unsplash.com/random/800x400?sig=3',
];

function App() {
  useEffect(() => {
    WebApp.ready(); // Сообщаем Telegram, что мы готовы

    WebApp.MainButton.setText('Нажми меня!');
    WebApp.MainButton.onClick(() => {
      WebApp.showAlert('Спасибо, ты нажал кнопку!');
    });
    WebApp.MainButton.show();
  }, []);

  return (
    <div style={{ width: '800px', margin: '0 auto', padding: 20, backgroundColor: "white" }}>
      <h1>My Swiper test</h1>
      <ImageSlider/>
    </div>
  );
}

export default App;