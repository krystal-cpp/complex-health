# 🦴 Complex SW — лендинг БАД для здоровья суставов

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)

> Современный, адаптивный и производительный лендинг для продукта «Complex SW СУСТАВЫ» от компании Оптисалт.

📎 **Демо:** [посмотреть](https://complex-health.netlify.app/)  

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb7e4d98-698d-4c7b-9564-4904c4b398da/deploy-status)](https://app.netlify.com/projects/complex-health/deploys)
---

## 📋 О проекте

Лендинг, разработанный с нуля для презентации БАДа **«Complex SW СУСТАВЫ»** — комплекса для поддержки опорно-двигательного аппарата, питания хрящевой ткани и стимуляции регенерации суставов.

**Ключевые особенности:**

- 🧩 **mobile-first** — верстка начиналась с мобильных устройств
- 📐 **pixel-perfect** — точное соответствие макету Figma (1920px / 375px)
- ⚡ **высокая производительность** — локальные шрифты, WebP-изображения, lazy-loading
- ♿ **доступность** — семантическая верстка, поддержка клавиатуры, ARIA-атрибуты
- 🔍 **SEO-оптимизация** — мета-теги, Open Graph, структурированные данные
- 📱 **полный адаптив** — корректное отображение на всех устройствах (320px → 2560px)

---

## 🛠️ Технологический стек

| Технология | Назначение |
|------------|------------|
| **React 18** | UI-библиотека |
| **TypeScript** | Типизация и безопасность кода |
| **Tailwind CSS** | Утилитарная стилизация |
| **Vite** | Быстрая сборка и HMR |
| **Swiper** | Карусель отзывов/преимуществ |

---

## 📊 Lighthouse Performance

### 📱 Мобильные устройства

| Метрика | Оценка |
|---------|--------|
| SEO | 85 |
| Accessibility | 85 |
| Best Practices | 96 |

### 🖥️ Десктоп

| Метрика | Оценка |
|---------|--------|
| Performance | 74 |
| Accessibility | 89 |
| Best Practices | 92 |
| SEO | 85 |

> ⚠️ Performance на мобильных устройствах ограничена особенностями React-рендеринга (не связана с версткой). Все рекомендации по оптимизации изображений, шрифтов и ресурсов выполнены.

---

## 🚀 Оптимизации

| Оптимизация | Реализация |
|-------------|------------|
| **Шрифты** | Локальное подключение (`@font-face`), `font-display: swap` |
| **Изображения** | Формат WebP, lazy-loading, alt, адаптивные размеры |
| **Доступность** | Семантическая верстка, `aria-label`, hover |
| **Адаптив** | Mobile-first, Pixel Perfect, брейкпоинты Tailwind, резиновые сетки |
| **Мета-теги** | Open Graph, SEO, Key Words, Description |

---

## 📁 Структура проекта
```
src/
├── components/ # UI-компоненты
│ ├── Hero/ # Главный экран
│ ├── Ingredients/ # Состав
│ ├── ProductInfo/ # Информация о продукте
│ ├── FAQ/ # Вопросы-ответы
│ ├── Footer/ # Подвал
│ └── ...
├── public/ # Изображения (WebP, SVG), шрифт
└── App.tsx # Точка входа
```

## 🧪 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр собранного проекта
npm run preview
```

## 📦 Деплой

#### Проект задеплоен на Netlify (или Vercel). Сборка происходит автоматически при пуше в main-ветку.
