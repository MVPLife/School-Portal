import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../container/Container';
import Logo from '../../../../assest/Logo.png';
import Link from 'next/link';
import LoginWallpaper from '../../../../assest/LoginImage.png';
import { Input, InputPassword } from '@/src/shared/Input';
import Button from '@/src/shared/Button';
import Dropdown from '@/src/shared/DropDown/Dropdown';

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
						<h2 className='text-gold text-center text-sm font-bold -mt-2 pl-2'
						style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700", fontSize:"16px"}}>
							مدرسة المباركة
						</h2>
					</div>

					<div className='px-16 items-center justify-center mt-16'>
						<div className='mt-6 text-center'>
							<h1 className='text-3xl font-bold'
							style={{fontFamily:"'Gulzar', serif", fontWeight:"700", fontSize:"45px"}}>
								إنشــاء حساب
							</h1>
							<h2 className='text-gray-400 text-center mt-2'
							style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700", fontSize:"20px"}}>
							أدخل معلومات حسابك
							</h2>
						</div>

						<form className='mt-12'
						style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700"}}>
							<div className='space-y-12'>
								<Input
									placeHolder='إسم'
									value={name}
									inputType='text'
									setValue={setName}
								/>

								<InputPassword
									password={password}
									setPassword={setPassword}
									placeHolder='كلمة المرور'
								/>

								<Input
									placeHolder='البرد أو رقم الهاتف'
									value={email || phoneNo}
									inputType={'email' || 'password'}
									setValue={setEmail || setPhoneNo}
								/>
							</div>

							<div className='mt-16'
							style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700"}}>
								<Button buttonName='تسجيل الدخول إلى حسابك' />
							</div>

							<p className='text-center text-gray-400 mt-8'>
								Already have an account?{' '}
								<Link
									href='/'
									className='text-blue-600 font-bold'>
									Login
								</Link>{' '}
							</p>
						</form>
					</div>
				</div>
				<div className='relative w-1/2'>
					<Image
						src={LoginWallpaper}
						alt='wallpaper'
					/>
					<div className='absolute top-5 right-5'>
						<Dropdown />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Register;
