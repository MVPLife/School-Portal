import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const GraphBar = () => {
	const [chartOptions, _] = useState({
		series: [
			{
				name: 'sales',
				data: [30, 150, 80, 50, 49, 60, 100, 91, 125],
			},
		],
		xaxis: {
			categories: [
				'Maths',
				'Arabic',
				'Biology',
				'General Knowledge',
				'Physics',
				'Chemistry',
				'English',
			],
		},
	});

	// Check if client side before rendering the chart
	const isBrowser = typeof window !== 'undefined';

	return (
		<div id='chart'>
			{isBrowser && (
				<DynamicApexChart
					options={chartOptions}
					series={chartOptions.series}
					type='line'
					height={350}
				/>
			)}
		</div>
	);
};

export default GraphBar;
