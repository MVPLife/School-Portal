import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTE_DATA } from '../constant/data';
import Link from 'next/link';
import { useLink } from '@/src/shared/Hooks/useLinks';
import Toggle from '@/src/shared/Toggle';
import Moon from '@/src/shared/Svg/Moon';

const SideSection = () => {
	const { handleClick } = useLink('Take Test');
	const router = useRouter();
	return (
		<div className='flex flex-col bg-white h-screen w-full border-r sticky top-0'>
			<div className='pl-6 py-6'>
				<Link href='#'>
					<p className='font-bold text-2xl text-black'
					style={{fontFamily: "'Jomhuria', serif", fontWeight: "700"}}>
						بوابة {' '}<span className='text-blue-600'>المدرسة</span>
					</p>
				</Link>
			</div>

			<hr className='border-gray-200' />

			<div className='relative pl-2 py-6'>
				<p className='text-gray-400 font-bold ml-4'>MENU</p>
				<div className='flex flex-col items-start justify-start space-y-3 mt-5 pr-6'>
					{ROUTE_DATA.map((value, index) => (
						<Link
							onClick={() => handleClick(value.title)}
							href={value.href}
							className={`flex items-center justify-start py-2 w-full  hover:bg-gray-100 hover:rounded-lg hover:transition hover:transform hover:duration-150 hover:translate-x-2 space-x-3 ${
								value.href !== router.pathname
									? 'text-gray-400 font-semibold'
									: 'text-blue-600 font-bold bg-gray-100 rounded-lg translate-x-2 '
							}`}
							key={index}>
							<div className='ml-4'>{value.icon}</div>
							<p>{value.title}</p>
						</Link>
					))}
				</div>
			</div>

			<hr className='border-gray-200' />

			<div className='absolute inset-x-0 bottom-8 w-full'>
				<div className='w-full flex flex-col space-y-4 bot'>
					<hr className='border-gray-200' />

					<div className='flex items-center justify-between px-6 w-[270px]'>
						<Link
							href='#'
							className='flex items-center  space-x-3 w-full'>
							<Moon />
							<p className='text-gray-400 font-semibold'>
								Dark Mode
							</p>
						</Link>
						<Toggle />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideSection;
