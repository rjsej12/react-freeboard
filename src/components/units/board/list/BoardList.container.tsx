import BoardListUI from './BoardList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from 'src/commons/types/generated/types';
import type { MouseEvent } from 'react';
import { useState } from 'react';

export default function BoardList() {
	const router = useRouter();
	const [keyword, setKeyword] = useState('');

	const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
	const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
		Pick<IQuery, 'fetchBoardsCount'>,
		IQueryFetchBoardsCountArgs
	>(FETCH_BOARDS_COUNT);

	const handleClickMoveToBoardNew = () => {
		void router.push('/boards/new');
	};

	const handleClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
		void router.push(`/boards/${e.currentTarget.id}`);
	};

	const handleChangeKeyword = (value: string) => {
		setKeyword(value);
	};

	return (
		<BoardListUI
			data={data}
			handleClickMoveToBoardNew={handleClickMoveToBoardNew}
			handleClickMoveToBoardDetail={handleClickMoveToBoardDetail}
			refetch={refetch}
			refetchBoardsCount={refetchBoardsCount}
			count={dataBoardsCount?.fetchBoardsCount}
			keyword={keyword}
			handleChangeKeyword={handleChangeKeyword}
		/>
	);
}
