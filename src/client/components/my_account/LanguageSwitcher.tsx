import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function LanguageSwitcher() {
	// const changeLocale = useChangeLocale()
	// const currentLocale = useCurrentLocale()
	// const { t } = useTranslation();
	// const router = useRouter();

	// const changeLanguage = (lang:any) => {
	// 	router.push(router.pathname, router.asPath, { locale: lang });
      // };
      

	return (
		<div>
			{/* <button
				onClick={() => changeLocale('en')}
				className='text-black p-2'>
				en
			</button> */}
			{/* <button
				onClick={() => changeLocale('ar')}
				className='text-black p-2'>
			</button> */}
		</div>
	);
}

export default LanguageSwitcher;
