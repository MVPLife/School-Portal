import React, { useState } from 'react';
import { useScopedI18n, I18nProviderClient } from '@/locales/client';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import QnASection from './QnASection';
import PaginationTest from '../components/Pagination';
import { Layout } from '../..';
import LanguageSwitcher from '../../LanguageSwitcher';

const TakeTest = () => {
  const [pageNumber, setPageNumber] = useState(0);
//   const t = useScopedI18n('greetings');

	return (
		// <I18nProviderClient locale='en'>
			<Layout>
				<div className='bg-white p-4 rounded-lg space-y-5 w-full'>
					<div className='flex items-center justify-between'>
						<p className='font-bold text-black'>
							Take Test{' '}
							<span className='font-thin'>{`(Test 1)`}</span>
						</p>
						<p className='font-bold text-black text-xl'>
							General Knowledge
						</p>
						<Other3DotsHorizontal
							width={35}
							height={25}
						/>
					</div>
					<LanguageSwitcher />
					<hr />
					{/* <p>{t('firstGreeting')}</p>
					<p>{t('secondGreeting')}</p> */}
					<QnASection setPageNumber={setPageNumber} />
					<hr />
					<PaginationTest pageNumber={pageNumber} />
				</div>
			</Layout>
		// </I18nProviderClient>
	);
};

export default TakeTest;
