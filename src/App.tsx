import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
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
    <div style={{ padding: 20 }}>
       <CCarousel>
        <CCarouselItem>
          <CImage className="d-block w-100" src="./images/School_21.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="./images/Крутушка.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="./images/котикк.jpg" alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default App;