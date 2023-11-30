import React, { useState } from 'react';
import Eye from '../Svg/Eye';
import EyeSlash from '../Svg/EyeSlash';

export const InputPassword = ({
	placeHolder,
	password,
	setPassword,
}: {
	placeHolder: string;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleToggleVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='flex border-b-gray-200 border-b'>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder={placeHolder}
				type={showPassword ? 'text' : 'password'}
				className='h-12 w-full borderless-input'
				required
			/>

			<button
				type='button'
				onClick={handleToggleVisibility}>
				{!showPassword ? <Eye /> : <EyeSlash />}
			</button>
		</div>
	);
};

export const Input = ({
	value,
	placeHolder,
	inputType,
	setValue,
}: {
	value: string;
	placeHolder: string;
	inputType: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeHolder}
			type={inputType}
			className='h-12 w-full borderless-input border-b-gray-200 border-b'
			required
		/>
	);
};
