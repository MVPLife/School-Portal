import Login from '@/src/client/components/Auth/SignIn';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>School Portal</title>
				<meta
					name='description'
					content='School Portal'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div id='google_translate_element'></div>
			<Login />
			{/* <script
				dangerouslySetInnerHTML={{
					__html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
            }
            document.addEventListener('DOMContentLoaded', function() {
              const script = document.createElement('script');
              script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
              script.async = true;
              document.body.appendChild(script);
            });
          `,
				}}
			/> */}
		</>
	);
}
