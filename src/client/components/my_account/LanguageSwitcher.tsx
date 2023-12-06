import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className='text-white space-x-1'>
			<button
				onClick={() => changeLanguage('en')}
				className='text-xs font-bold p-2 bg-blue-900 rounded-lg shadow-2xl'>
				English
			</button>
			<button
				onClick={() => changeLanguage('ar')}
				className='text-xs font-bold p-2 bg-blue-900 rounded-lg'>
				Arabic
			</button>
		</div>
	);
};

export default LanguageSwitcher;
