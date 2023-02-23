import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
	const router = useRouter();

	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.boardId },
	});

	const [deleteBoard] = useMutation(DELETE_BOARD);

	const handleClickDeleteButton = (e) => {
		deleteBoard({
			variables: {
				boardId: router.query.boardId,
			},
		});

		router.replace('/boards');
	};

	return data ? <BoardDetailUI data={data} handleClickDeleteButton={handleClickDeleteButton} /> : '로딩중입니다';
}
