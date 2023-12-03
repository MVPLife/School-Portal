import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import QnACarousel from '../components/Carousel';
import { QnA_Data } from '../Constant/data';

const QnASection = ({ setPageNumber }: { setPageNumber: Function }) => {
	return (
		<QnACarousel
			carouselItems={
				<>
					{QnA_Data.map((value, index) => (
						<Carousel.Item
							className='w-full p-6'
							key={index}>
							<div
								key={index}
								className='w-full'>
								<p>{value.question}</p>

								<div className='flex flex-col space-y-3 mt-10'>
									{value.optionAns.map((ansOption, ind) => (
										<div
											className='space-x-2'
											key={ind}>
											<input
												type='radio'
												name='radio'
												value={ansOption}
											/>
											.A
											<label htmlFor='html'>
												{ansOption}
											</label>
										</div>
									))}
								</div>
							</div>
						</Carousel.Item>
					))}
				</>
			}
		/>
	);
};

export default QnASection;
