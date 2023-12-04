import React from 'react';
import { Layout } from '../..';
import { useTranslation } from 'next-i18next';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import GraphBar from './GraphBar';

const ViewScore = () => {
	const { t } = useTranslation('common');
	console.log(t('how can i be your friend please'))
	return (
		<Layout>
			<div className='bg-white p-4 rounded-lg space-y-5 w-full'>
				<div className='flex items-center justify-between'>
					<p className='font-bold text-black'>View Scores</p>
					<p className='font-bold text-black text-xl'>Test Results</p>

					<Other3DotsHorizontal
						width={35}
						height={25}
					/>
				</div>

				<hr />
				<GraphBar />
			</div>
		</Layout>
	);
};

export default ViewScore;
