import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../../../../assest/Avatar.png';
import {
	ControlsChevronDownSmall,
	GenericSearch,
	NotificationsBell,
} from '@heathmont/moon-icons-tw';

const Header = () => {
	return (
		<div className='flex items-center justify-between sticky top-0 z-50 p-6 h-[73px] bg-white border-l'
		style={{fontFamily: "'Katibeh', serif", fontWeight: "700"}}>
			<Link href='#'>
				<h1 className='text-blue-600 text-2xl font-bold'>لــوحة القيـــادة</h1>
			</Link>
			<div className='flex items-center space-x-5'>
				<div className='flex items-center border px-2 bg-white rounded-lg h-8'>
					<GenericSearch
						height={25}
						width={25}
					/>
					<input
						type='text'
						className='w-44 borderless-input rounded-lg pl-2 bg-white text-end'
						placeholder='يبحث...'
					/>
				</div>

				<Link href='#'>
					<NotificationsBell
						height={25}
						width={25}
						color='gray'
					/>
				</Link>

				<Link href='#'>
					<div className='flex items-center space-x-2'>
						<div className='flex space-x-2'>
							<Image
								src={Avatar}
								alt='avater alt'
								height={40}
								width={40}
							/>
							<div className='flex flex-col'>
								<p className='font-bold text-md'>عبد البـــاقى</p>
								<p className='text-gray-500 text-xs '>طــالب</p>
							</div>
						</div>

						<ControlsChevronDownSmall
							height={25}
							width={25}
							color='gray'
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
