import BoardListUI from './BoardList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from 'src/commons/types/generated/types';
import type { MouseEvent } from 'react';

export default function BoardList() {
	const router = useRouter();
	const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
	const { data: dataBoardsCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(
		FETCH_BOARDS_COUNT
	);

	const handleClickMoveToBoardNew = () => {
		void router.push('/boards/new');
	};

	const handleClickMoveToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
		void router.push(`/boards/${e.currentTarget.id}`);
	};

	return (
		<BoardListUI
			data={data}
			handleClickMoveToBoardNew={handleClickMoveToBoardNew}
			handleClickMoveToBoardDetail={handleClickMoveToBoardDetail}
			refetch={refetch}
			count={dataBoardsCount?.fetchBoardsCount}
		/>
	);
}
