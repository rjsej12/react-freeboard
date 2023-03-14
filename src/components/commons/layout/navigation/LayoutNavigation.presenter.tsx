import { Fragment } from 'react';
import { MenuItem, Wrapper } from './LayoutNavigation.styles';
import type { ILayoutNavigationProps } from './LayoutNavigation.types';

const NAVIGATION_MENUS = [
	{ name: '자유게시판', page: '/boards' },
	{ name: '중고마켓', page: '/markets' },
	{ name: '마이페이지', page: '/mypages' },
];

export default function LayoutNavigationUI(props: ILayoutNavigationProps) {
	return (
		<Wrapper>
			{NAVIGATION_MENUS.map((el) => (
				<Fragment key={el.page}>
					<MenuItem id={el.page} onClick={props.handleClickMenu}>
						{el.name}
					</MenuItem>
				</Fragment>
			))}
		</Wrapper>
	);
}
