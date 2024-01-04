import '@/styles/globals.css';
import React from 'next';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
