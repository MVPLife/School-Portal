import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/src/shared/Button';
import Container from '../container/Container';
import Logo from '../../../../assest/Logo.png';
import LoginWallpaper from '../../../../assest/LoginImage.png';
import { Input, InputPassword } from '@/src/shared/Input';
import DropDown from '@/src/shared/DropDown/Dropdown';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<div className='flex w-full h-full'>
				<div className='flex flex-col h-full p-12 w-1/2'>
					<div className='flex flex-col items-start justify-start'>
						<Image
							src={Logo}
							alt='logo alt'
							className='h-10 w-12'
						/>
						<p className='text-gold text-center text-sm font-bold -mt-2 pl-2'>
							Logo
						</p>
					</div>

					<form className='px-16 items-center justify-center mt-24'>
						<div className='mt-6 text-center'>
							<p className='text-3xl font-bold'>
								Welcome to{' '}
								<span className='text-blue-700'>school</span>{' '}
								portal
							</p>
							<p className='text-gray-400 text-center mt-2'>
								Enter your account information
							</p>
						</div>

						<div className='mt-8'>
							<div className='space-y-12'>
								<Input
									placeHolder='Enter your email'
									value={email}
									inputType='email'
									setValue={setEmail}
								/>

								<InputPassword
									password={password}
									setPassword={setPassword}
									placeHolder='Enter your password'
								/>
							</div>
							<div className='flex items-center underline justify-between text-blue-600 text-xs w-full my-8'>
								<Link href='#'>Password Recovery</Link>
								<Link href='#'>
									Have you forgotten your password
								</Link>
							</div>

							<Link  href='/my_account' className='mt-12'>
								<Button buttonName='Login to your account' />
							</Link>

							<p className='text-center text-gray-400 mt-8'>
								Dont an account yet?{' '}
								<Link
									href='/Register'
									className='text-blue-600 font-bold'>
									Register
								</Link>
							</p>
						</div>
					</form>
				</div>
				<div className='relative w-1/2'>
					<Image
						src={LoginWallpaper}
						alt='wallpaper'
					/>
					<div className='absolute top-5 right-5'>
						<DropDown/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Login;
