import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../container/Container';
import Logo from '../../../../assest/Logo.png';
import Link from 'next/link';
import LoginWallpaper from '../../../../assest/LoginImage.png';
import { Input, InputPassword } from '@/src/shared/Input';
import Button from '@/src/shared/Button';

const Register = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNo, setPhoneNo] = useState('');
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

					<div className='px-16 items-center justify-center mt-16'>
						<div className='mt-6 text-center'>
							<p className='text-3xl font-bold'>
								Create an account
							</p>
							<p className='text-gray-400 text-center mt-2'>
								Enter your account information
							</p>
						</div>

						<form className='mt-12'>
							<div className='space-y-12'>
								<Input
									placeHolder='Your name'
									value={name}
									inputType='text'
									setValue={setName}
								/>

								<InputPassword
									password={password}
									setPassword={setPassword}
									placeHolder='Password'
								/>

								<Input
									placeHolder='Email/Mobile Number'
									value={email || phoneNo}
									inputType={'email' || 'password'}
									setValue={setEmail || setPhoneNo}
								/>
							</div>

							<div className='mt-16'>
								<Button buttonName='Login to your account' />
							</div>

							<p className='text-center text-gray-400 mt-8'>
								Already an account?{' '}
								<Link
									href='/'
									className='text-blue-600 font-bold'>
									Login
								</Link>{' '}
							</p>
						</form>
					</div>
				</div>
				<Image
					src={LoginWallpaper}
					alt='wallpaper'
					className='w-1/2'
				/>
			</div>
		</Container>
	);
};

export default Register;
