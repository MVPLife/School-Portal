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
					<p className='font-bold text-black'
					style={{fontFamily: "'Jomhuria', serif", fontWeight: "600"}}>
						إمتحــان{' '}
						{/* <span className='font-thin'>{`(تحريري)`}</span> */}
					</p>
					<p className='font-bold text-black text-xl'
					style={{fontFamily: "'Jomhuria', serif", fontWeight: "800"}}>
						الفـقـــه
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
