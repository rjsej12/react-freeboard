import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';
import LayoutNavigationUI from './LayoutNavigation.presenter';

export default function LayoutNavigation() {
	const router = useRouter();

	const handleClickMenu = (e: MouseEvent<HTMLDivElement>) => {
		void router.push(e.currentTarget.id);
	};

	return <LayoutNavigationUI handleClickMenu={handleClickMenu} />;
}
