import LayoutBanner from './banner/LayoutBanner.container';
import LayoutFooter from './footer/LayoutFooter.container';
import LayoutHeader from './header/LayoutHeader.container';
import LayoutNavigation from './navigation/LayoutNavigation.container';

interface ILayoutProps {
	children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
	return (
		<>
			<LayoutHeader />
			<LayoutBanner />
			<LayoutNavigation />
			<div>{props.children}</div>
			<LayoutFooter />
		</>
	);
}
