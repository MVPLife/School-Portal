import React, { useState } from 'react';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import QnASection from './QnASection';
import PaginationTest from '../components/Pagination';

const TakeTest = () => {
      const [pageNumber, setPageNumber] = useState(0);
	return (
		<div className='bg-white p-4 rounded-lg space-y-5 w-full'>
			<div className='flex items-center justify-between'>
                        <p className='font-bold text-black'>Take Test <span className='font-thin'> {`(Test 1)`}</span></p>
				<Other3DotsHorizontal
					width={35}
					height={25}
				/>
			</div>
                  <hr />
                  <QnASection setPageNumber={setPageNumber} />
                  <hr />
                  <PaginationTest pageNumber={pageNumber}/>
		</div>
	);
};

export default TakeTest;
