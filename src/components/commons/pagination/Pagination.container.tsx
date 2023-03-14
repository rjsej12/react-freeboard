import { useState } from 'react';
import PaginationUI from './Pagination.presenter';
import type { IPaginationProps } from './Pagination.types';
import type { MouseEvent } from 'react';

export default function Pagination(props: IPaginationProps) {
	const [startPage, setStartPage] = useState(1);
	const [activedPage, setActivedPage] = useState(1);
	const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

	const handleClickPage = (e: MouseEvent<HTMLSpanElement>) => {
		const activedPage = Number(e.currentTarget.id);
		setActivedPage(activedPage);
		void props.refetch({ page: activedPage });
	};

	const handleClickPrevPage = () => {
		if (startPage === 1) return;
		setStartPage(startPage - 10);
		setActivedPage(startPage - 10);
		void props.refetch({ page: startPage - 10 });
	};

	const handleClickNextPage = () => {
		if (startPage + 10 > lastPage) return;
		setStartPage(startPage + 10);
		setActivedPage(startPage + 10);
		void props.refetch({ page: startPage + 10 });
	};

	return (
		<PaginationUI
			startPage={startPage}
			lastPage={lastPage}
			activedPage={activedPage}
			handleClickPage={handleClickPage}
			handleClickPrevPage={handleClickPrevPage}
			handleClickNextPage={handleClickNextPage}
		/>
	);
}
