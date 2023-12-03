import React, { useState } from 'react';
import { Pagination } from '@heathmont/moon-core-tw';

const PaginationTest = ({ pageNumber }: { pageNumber: number }) => {
	const [page, setPage] = useState<number>(0);
	const handlePageChange = (page: number) => {setPage(page)};

      return (
		<>
			<Pagination
				totalPages={9}
				currentPage={page}
				setCurrentPage={handlePageChange}>
				<Pagination.PrevButton>Previous</Pagination.PrevButton>
				<Pagination.Pages />
				<Pagination.NextButton>Next</Pagination.NextButton>
			</Pagination>
		</>
	);
};

export default PaginationTest;
