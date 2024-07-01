# Криптовалютный Трекер

Это полнофункциональное веб-приложение для отслеживания криптовалют, использующее React для frontend'а и FastAPI для backend'а.

## Особенности

- Отображение списка криптовалют
- Детальная информация о выбранной криптовалюте
- Обновление данных в реальном времени

## Технологии

### Frontend

- React
- Ant Design
- Axios

### Backend

- FastAPI
- Uvicorn
- aiohttp
- async-lru

## Установка

### Требования

- Node.js
- Python 3.10+

### Шаги установки

1. Клонируйте репозиторий:

   ```
   git clone https://github.com/Negibkaya/crypto.git
   cd crypto
   ```

2. Установите зависимости для frontend:

   ```
   cd frontend
   npm install
   ```

3. Установите зависимости для backend:
   ```
   cd ../backend
   pip install aiohttp async_lru uvicorn
   ```

## Запуск приложения

1. Запустите backend:

   ```
   cd backend
   uvicorn src.main:app --reload
   ```

2. В другом терминале запустите frontend:

   ```
   cd frontend
   npm run dev
   ```

3. Откройте браузер и перейдите по адресу `http://localhost:5173`

## Структура проекта

```
crypto/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── CryptoCurrencyCard.js
│   │   └── App.js
│   └── package.json
├── backend/
│   └── main.py
└── README.md
```

## API

Бэкенд использует API CoinMarketCap для получения данных о криптовалютах. Убедитесь, что у вас есть действительный API ключ и он правильно настроен в backend.
