import { Page, PageWrapper } from './Pagination.styles';
import type { IPaginationUIProps } from './Pagination.types';

export default function PaginationUI(props: IPaginationUIProps) {
	return (
		<PageWrapper>
			<Page onClick={props.handleClickPrevPage}>{'<'}</Page>
			{new Array(10).fill(1).map(
				(_, index) =>
					index + props.startPage <= props.lastPage && (
						<Page
							key={index + props.startPage}
							id={String(index + props.startPage)}
							onClick={props.handleClickPage}
							isActive={index + props.startPage === props.activedPage}
						>
							{index + props.startPage}
						</Page>
					)
			)}
			<Page onClick={props.handleClickNextPage}>{'>'}</Page>
		</PageWrapper>
	);
}
