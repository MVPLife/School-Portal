import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function LanguageSwitcher() {
	const { t } = useTranslation();
	const router = useRouter();

	const changeLanguage = (lang:any) => {
		router.push(router.pathname, router.asPath, { locale: lang });
      };

	return (
		<div>
			<button onClick={() => changeLanguage('en')} className='text-black'>
				{t('common:english')}
			</button>
			<button onClick={() => changeLanguage('es')} className='text-black'>
				{t('common:spanish')}
			</button>
		</div>
	);
}

export default LanguageSwitcher;
