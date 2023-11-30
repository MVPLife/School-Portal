import Login from '@/src/client/components/Auth/SignIn';
import type { NextPage } from 'next';

const LogInPage: NextPage = (props) => (
	<div>
		<Login {...props} />
	</div>
);

export default LogInPage;
