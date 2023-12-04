import React, { useState, ChangeEvent } from 'react';

const Dropdown = () => {
	const [selectedValue, setSelectedValue] = useState<string>('');
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	const items = ['Arabic'];

	return (
		<select
			value={selectedValue}
			onChange={handleSelectChange}>
			<option
				value=''
				className='borderless-input'>
				English
			</option>
			{items.map((option) => (
				<option
					key={option}
					value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
