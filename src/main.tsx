import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query";
import WeatherApp from './WeatherApp';
import queryClient from './client/QueryClient';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './i18n/es/global.json'
import global_en from './i18n/en/global.json'
import './index.css'
import { App } from './components/App';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
)


