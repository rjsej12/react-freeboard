import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from 'src/commons/types/generated/types';

export default function BoardDetail() {
	const router = useRouter();

	if (typeof router.query.boardId !== 'string') {
		alert('올바르지 않은 게시글 아이디입니다.');
		router.push('/');
		return <></>;
	}

	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: router.query.boardId },
	});

	const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD);

	const handleClickMoveToBoardList = () => {
		router.push('/boards');
	};

	const handleClickMoveToBoardEdit = () => {
		router.push(`/boards/${router.query.boardId}/edit`);
	};

	const handleClickDeleteButton = async () => {
		try {
			if (typeof router.query.boardId !== 'string') {
				alert('올바르지 않은 게시글 아이디입니다.');
				return;
			}
			await deleteBoard({
				variables: {
					boardId: router.query.boardId,
				},
			});
			router.replace('/boards');
		} catch (error) {
			if (error instanceof Error) alert(error.message);
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
		<>'로딩중입니다'</>
	);
}
