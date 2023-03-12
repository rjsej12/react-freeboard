import { Fragment } from 'react';
import { MenuItem, Wrapper } from './LayoutNavigation.styles';

const NAVIGATION_MENUS = [
	{ name: '자유게시판', page: '/boards' },
	{ name: '중고마켓', page: '/markets' },
	{ name: '마이페이지', page: '/mypages' },
];

export default function LayoutNavigationUI() {
	return (
		<Wrapper>
			{NAVIGATION_MENUS.map((el) => (
				<Fragment key={el.page}>
					<MenuItem id={el.page}>{el.name}</MenuItem>
				</Fragment>
			))}
		</Wrapper>
	);
}
