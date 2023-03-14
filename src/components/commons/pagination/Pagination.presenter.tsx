import { Page, PageWrapper } from './Pagination.styles';

export default function PaginationUI() {
	return (
		<PageWrapper>
			<Page>{'<'}</Page>
			{new Array(10).fill(1).map((_, index) => (
				<Page key={index + 1}>{index + 1}</Page>
			))}
			<Page>{'>'}</Page>
		</PageWrapper>
	);
}
