import MyAccount from '@/src/client/components/my_account';
import type { NextPage } from 'next';

const MyAccountPage: NextPage = (props) => (
	<div>
		<MyAccount {...props} />
	</div>
);

export default MyAccountPage;
