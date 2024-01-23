import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import QnACarousel from '../components/Carousel';
import { QnA_Data } from '../Constant/data';

 
const QnASection = ({selected}: {selected: number}) => {
	function numberToLetter(number: number) {
		return String.fromCharCode('A'.charCodeAt(0) + number);
	}

	return (
		<QnACarousel
			selected={selected}
			carouselItems={
				<>
					{QnA_Data.map((value, index) => (
						<Carousel.Item
							className='w-full p-6'
							key={index}>
							<div
								key={index}
								className='w-full text-end'>
			
								<p 
								style={{fontFamily: 'Katibeh', fontWeight: "700",fontSize:"20px"}}>
									{value.question}
								</p>
								<div className='flex flex-col space-y-3 mt-10 text-end '>
									{value.optionAns.map((ansOption, ind) => (
										<div
											className='space-x-2 flex flex-row-reverse'
											key={ind}> 
											{` . ${numberToLetter(
												ind
											)}`}
											<input
												type='radio'
												name='radio'
												value={ansOption}
												
											/> 
											 
											<label htmlFor='html' style={{marginRight: '5px', fontFamily: "Amiri, serif", fontWeight:"500", fontSize:"18px"}}>
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
