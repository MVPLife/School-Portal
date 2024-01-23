import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/src/shared/Button';
import Container from '../container/Container';
import Logo from '../../../../assest/Logo.png';
import LoginWallpaper from '../../../../assest/LoginImage.png';
import { Input, InputPassword } from '@/src/shared/Input';
// import LanguageSwitcher from '../../my_account/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { t } = useTranslation();

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

					<form className='px-16 items-center justify-center mt-24'>
						<div className='mt-6 text-center'>
							<h1 className='text-3xl font-bold'
							style={{fontFamily:"'Gulzar', serif", fontWeight:"700", fontSize:"45px"}}>
								مرحبــا بكم فى{' '}
								<span className='text-blue-700'>بــوابة</span>{' '}
								المدرسة
							</h1>
							<h2 className='text-gray-400 text-center mt-2'
							style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700", fontSize:"20px"}}>
								أدخل معلومات حســابك
							</h2>
						</div>

						<div className='mt-8'>
							<div className='space-y-12 text-end'>
								<Input
									placeHolder='أكتب البريد'
									value={email}
									inputType='email'
									setValue={setEmail}
								/>

								<InputPassword
									password={password}
									setPassword={setPassword}
									placeHolder='كلمة المرور'
								/>
							</div>
							<div className='flex items-center underline justify-between text-blue-600 text-xs w-full my-8'>
								<Link href='#'>Password Recovery</Link>
								<Link href='#'>
									Have you forgotten your password
								</Link>
							</div>

							<Link
								href='/my_account/taketest'
								className='mt-12'
								style={{fontFamily:"'Amiri Quran', serif", fontWeight:"700"}}>
								<Button buttonName='تسجيل الدخول إلى حسابك' />
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
						{/* <LanguageSwitcher /> */}
						{/* praticing react-i18next */}
						{/* <div>
							<p>{t('welcome')}</p>
							<p>{t('greeting')}</p>
							<p>{t('language')}</p>
						</div> */}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Login;
