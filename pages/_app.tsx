import '@/styles/globals.css'
import React from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(HttpBackend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		},
	});


function App({ Component, pageProps }: AppProps) {
  return (
		<I18nextProvider i18n={i18next}>
			<Component {...pageProps} />
		</I18nextProvider>
  );
}

export default appWithTranslation(App)