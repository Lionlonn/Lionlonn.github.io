import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

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
      <h1>Привет из Telegram Mini App!</h1>
      <p>Это React-приложение без бэкенда.</p>
    </div>
  );
}

export default App;