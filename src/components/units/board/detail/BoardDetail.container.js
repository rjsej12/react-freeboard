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

	const handleClickMoveToBoardList = () => {
		router.push('/boards');
	};

	const handleClickMoveToBoardEdit = () => {
		router.push(`/boards/${router.query.boardId}/edit`);
	};

	const handleClickDeleteButton = async () => {
		try {
			await deleteBoard({
				variables: {
					boardId: router.query.boardId,
				},
			});
			router.replace('/boards');
		} catch (error) {
			alert(error.message);
		}
	};

	return data ? (
		<BoardDetailUI
			data={data}
			handleClickMoveToBoardList={handleClickMoveToBoardList}
			handleClickMoveToBoardEdit={handleClickMoveToBoardEdit}
			handleClickDeleteButton={handleClickDeleteButton}
		/>
	) : (
		'로딩중입니다'
	);
}
