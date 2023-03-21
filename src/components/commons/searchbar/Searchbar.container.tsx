import _ from 'lodash';
import type { ChangeEvent } from 'react';
import SearchBarUI from './Searchbar.presenter';
import type { ISearchbarProps } from './Searchbar.types';

export default function Searchbar(props: ISearchbarProps) {
	const getDebounce = _.debounce((value: string) => {
		void props.refetch({ search: value, page: 1 });
		void props.refetchBoardsCount({ search: value });
		props.handleChangeKeyword(value);
	}, 200);

	const handleChangeSearchbar = (e: ChangeEvent<HTMLInputElement>) => {
		getDebounce(e.target.value);
	};

	return <SearchBarUI handleChangeSearchbar={handleChangeSearchbar} />;
}
