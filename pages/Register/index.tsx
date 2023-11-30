import Register from '@/src/client/components/Auth/SignUp';
import type { NextPage } from 'next';

const RegisterPage: NextPage = (props) => (
	<div>
		<Register {...props} />
	</div>
);

export default RegisterPage;
