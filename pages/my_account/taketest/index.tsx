import React from 'react';
import type { NextPage } from 'next';
import TakeTest from '@/src/client/components/my_account/MainSection/TakeTest';

const TakeTestPage: NextPage = (props) => {
	return (
		<TakeTest {...props} />
	);
}
export default TakeTestPage;
