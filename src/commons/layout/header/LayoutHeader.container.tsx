import { useRouter } from 'next/router';
import LayoutHeaderUI from './LayoutHeader.presenter';

export default function LayoutHeader() {
	const router = useRouter();

	const handleClickLogo = () => {
		void router.push('/boards');
	};

	const handleClickMoveToLogin = () => {
		void router.push('/login');
	};

	const handleClickMoveToSignup = () => {
		void router.push('/signup');
	};

	return (
		<LayoutHeaderUI
			handleClickLogo={handleClickLogo}
			handleClickMoveToLogin={handleClickMoveToLogin}
			handleClickMoveToSignup={handleClickMoveToSignup}
		/>
	);
}
