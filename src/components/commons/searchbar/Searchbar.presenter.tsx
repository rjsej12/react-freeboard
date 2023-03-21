import { Searchbar, SearchbarInput, SearchIcon } from './Searchbar.styles';
import type { ISearchbarUIProps } from './Searchbar.types';

export default function SearchBarUI(props: ISearchbarUIProps) {
	return (
		<Searchbar>
			<SearchIcon />
			<SearchbarInput placeholder="제목을 검색해 주세요." onChange={props.handleChangeSearchbar} />
		</Searchbar>
	);
}
