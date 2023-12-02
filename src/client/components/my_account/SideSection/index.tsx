import React from 'react';
import { ROUTE_DATA } from '../constant/data';
import Link from 'next/link';
import { useLink } from '@/src/shared/Hooks/useLinks';
import Toggle from '@/src/shared/Toggle';
import Moon from '@/src/shared/Svg/Moon';

const SideSection = () => {
	const { link, handleClick } = useLink('Dashboard');

	return (
		<div className='flex flex-col bg-white h-screen w-full border-r sticky top-0'>
			<div className='pl-6 py-6'>
				<Link href='#'>
					<p className='font-bold text-2xl'>
						school<span>Portal</span>{' '}
					</p>
				</Link>
			</div>

			<hr />

			<div className='relative pl-2 py-6'>
				<p className='text-gray-400 font-bold ml-4'>MENU</p>
				<div className='flex flex-col items-start justify-start space-y-3 mt-5 pr-6'>
					{ROUTE_DATA.map((value, index) => (
						<Link
							onClick={() => handleClick(value.title)}
							href='#'
							className={`flex items-center justify-start py-2 w-full  hover:bg-gray-200 hover:text-black hover:rounded-lg hover:transition hover:transform hover:duration-150 hover:translate-x-2 space-x-3 ${
								link === value.title
									? 'text-black font-bold'
									: 'text-gray-400 font-semibold'
							}`}
							key={index}>
							<div className='ml-4'>{value.icon}</div>
							<p>{value.title}</p>
						</Link>
					))}
				</div>
			</div>

			<hr />

			{/* <div className='flex px-6 py-5 items-center justify-between w-full'>
				<p className='text-md font-bold text-gray-400'>PROJECTS</p>

				<Link href='#'>
					<ControlsPlus
						height={25}
						width={25}
						color='gray'
					/>
				</Link>
			</div> */}

			<div className='absolute inset-x-0 bottom-8 w-full'>
				<div className='w-full flex flex-col space-y-4 bot'>
					{/* <div className='flex px-6'>
						<Link
							href='#'
							className='flex items-center  space-x-3'>
							<GenericSettings
								height={25}
								width={25}
							/>
							<p className='text-gray-400 font-semibold'>
								Settings
							</p>
						</Link>
					</div> */}

					<hr />

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
