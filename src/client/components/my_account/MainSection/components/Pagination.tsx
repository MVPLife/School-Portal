import React, { useState } from 'react';
import { Pagination } from '@heathmont/moon-core-tw';

const PaginationTest = ({pageNumber}: {pageNumber: number}) => {
  const [page, setPage] = useState<number>(0);
  const handlePageChange = (page: number) => {
    setPage(page);
      };
      console.log(page);
  return (
		<>
			<Pagination
				totalPages={9}
				currentPage={page}
				setCurrentPage={handlePageChange}>
				<Pagination.PrevButton className='bg-black px-2 rounded-md bg-opacity-20'>
					Previous
				</Pagination.PrevButton>
				<Pagination.Pages />
				<Pagination.NextButton className='bg-black px-2 rounded-md bg-opacity-20'>
					Next
				</Pagination.NextButton>
			</Pagination>
		</>
  );
};

export default PaginationTest;
