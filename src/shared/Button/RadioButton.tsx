import { Radio } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const RadioButton = () => {
	const [value, setValue] = useState('');
	return (
		<Radio
			value={value}
			onChange={setValue}>
			<Radio.Option
				value='option1'
				>
				<Radio.Indicator className='bg-green-600  text-yellow-900' />
			</Radio.Option>
			<Radio.Option
				value='option2'
				className='bg-black text-yellow-900'>
				<Radio.Indicator />
			</Radio.Option>
		</Radio>
	);
};

export default RadioButton;
