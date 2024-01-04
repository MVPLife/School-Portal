import React, { useState } from 'react';
import { MenuItem } from '@heathmont/moon-core-tw';

const PaginationTest = ({
	index,
	selected,
	setSelected,
}: {
	index: number | undefined;
	selected: number;
	setSelected: Function;
}) => {
	const [click, setClick] = useState(false);

	return (
		<MenuItem
			key={index}
			isActive={selected === index}
			onClick={() => {
				setSelected(index);
				setClick(!click);
			}}
			className={`flex items-center justify-center h-7 w-7 border border-blue-800 text-blue-800 rounded-xl text-center hover:text-white m-2 hover:bg-blue-800 `}>
			{index}
		</MenuItem>
	);
};

export default PaginationTest;
