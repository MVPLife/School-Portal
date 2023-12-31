import React from 'react';
import SideSection from './SideSection';
import Header from './Header';

                                                                                                                                                                                                                                                                                                                                                                                                                                        
export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex bg-gray-200 w-full h-max'>
			<div className='w-1/5'>
				<SideSection />
			</div>

			<div className='relative flex flex-col w-4/5 bg-gray-100'>
				<Header />
				<div className='flex flex-col p-6 w-full'>{children}</div>
			</div>
		</div>
	);
};
