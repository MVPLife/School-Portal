import React from 'react';
import { Layout } from '../..';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import GraphBar from './GraphBar';

const ViewScore = () => {
	return (
		<Layout>
			<div className='bg-white p-4 rounded-lg space-y-5 w-full'>
				<div className='flex items-center justify-between'>
					<h4 className='font-bold text-black'
					style={{fontFamily:"'Gulzar', serif", fontWeight:"700", fontSize:"18px"}}>
						درجـــات</h4>
					<h2 className='font-bold text-black text-xl'
					style={{fontFamily:"'Gulzar', serif", fontWeight:"700", fontSize:"25px"}}>
						نتيجــة الإختبــــار</h2>
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
