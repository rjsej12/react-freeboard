import { useRouter } from 'next/router';
import LayoutBanner from './banner/LayoutBanner.container';
import LayoutFooter from './footer/LayoutFooter.container';
import LayoutHeader from './header/LayoutHeader.container';
import LayoutNavigation from './navigation/LayoutNavigation.container';

interface ILayoutProps {
	children: JSX.Element;
}

const HIDDEN_LAYOUTS = ['/login'];

export default function Layout(props: ILayoutProps) {
	const router = useRouter();

	const isHiddenLayout = HIDDEN_LAYOUTS.includes(router.asPath);

	return isHiddenLayout ? (
		<div>{props.children}</div>
	) : (
		<>
			<LayoutHeader />
			<LayoutBanner />
			<LayoutNavigation />
			<div>{props.children}</div>
			<LayoutFooter />
		</>
	);
}
