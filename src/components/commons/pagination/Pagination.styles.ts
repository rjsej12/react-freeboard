import styled from '@emotion/styled';
import type { IPageProps } from './Pagination.types';

export const PageWrapper = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	font-size: 18px;
`;

export const Page = styled.span`
	color: ${(props: IPageProps) => (props.isActive ? '#ffd600' : '#000000')};
	font-weight: ${(props: IPageProps) => (props.isActive ? '700' : '400')};
	cursor: ${(props: IPageProps) => (props.isActive ? 'none' : 'pointer')};
`;
