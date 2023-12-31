import React, { useState } from 'react';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import QnASection from './QnASection';
import PaginationTest from '../components/Pagination';
import { Layout } from '../..';
// import LanguageSwitcher from '../../LanguageSwitcher';
import { QnA_Data } from '../Constant/data';



const TakeTest = () => {
	const [selected, setSelected] = useState(0);
	console.log(selected);

	return (
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

				<hr />
				<QnASection selected={selected} />
				<hr />
				<div className='flex flex-wrap'>
					{QnA_Data.map((value, index) => (
						<PaginationTest
							key={index}
							index={value.id}
							selected={selected}
							setSelected={setSelected}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default TakeTest;
