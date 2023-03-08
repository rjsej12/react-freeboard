import BoardListUI from './BoardList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardsArgs } from 'src/commons/types/generated/types';
import type { MouseEvent } from 'react';

export default function BoardList() {
	const router = useRouter();
	const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

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
		/>
	);
}
