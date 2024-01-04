import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

const QnACarousel = ({
	selected,
	carouselItems,
}: {
	selected: number,
	carouselItems: React.JSX.Element;
}) => {
	return (
		<Carousel
			step={1}
			selectedIndex={selected}>
			<Carousel.LeftArrow className='bg-black bg-opacity-20 rounded-full'>
				<ControlsChevronLeftSmall fill='black' />
			</Carousel.LeftArrow>
			<Carousel.Reel className='w-full'>{carouselItems}</Carousel.Reel>
			<Carousel.RightArrow className='bg-black bg-opacity-20 rounded-full'>
				<ControlsChevronRightSmall fill='black' />
			</Carousel.RightArrow>
		</Carousel>
	);
};

export default QnACarousel;
