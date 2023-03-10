import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, DISLIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import type {
	IMutation,
	IMutationDeleteBoardArgs,
	IMutationDislikeBoardArgs,
	IMutationLikeBoardArgs,
	IQuery,
	IQueryFetchBoardArgs,
} from 'src/commons/types/generated/types';

export default function BoardDetail() {
	const router = useRouter();

	if (typeof router.query.boardId !== 'string') {
		alert('올바르지 않은 게시글 아이디입니다.');
		void router.push('/');
		return <></>;
	}

	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
		variables: { boardId: router.query.boardId },
	});

	const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD);

	const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);
	const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(DISLIKE_BOARD);

	const handleClickMoveToBoardList = () => {
		void router.push('/boards');
	};

	const handleClickMoveToBoardEdit = () => {
		if (typeof router.query.boardId !== 'string') {
			alert('올바르지 않은 게시글 아이디입니다.');
			return;
		}

		void router.push(`/boards/${router.query.boardId}/edit`);
	};

	const handleClickDeleteButton = async () => {
		try {
			if (typeof router.query.boardId !== 'string') return;

			await deleteBoard({
				variables: {
					boardId: router.query.boardId,
				},
			});
			void router.replace('/boards');
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	const handleClickLike = () => {
		if (typeof router.query.boardId !== 'string') return;

		void likeBoard({
			variables: { boardId: router.query.boardId },
			refetchQueries: [
				{
					query: FETCH_BOARD,
					variables: { boardId: router.query.boardId },
				},
			],
		});
	};

	const handleClickDislike = () => {
		if (typeof router.query.boardId !== 'string') return;

		void dislikeBoard({
			variables: { boardId: router.query.boardId },
			refetchQueries: [
				{
					query: FETCH_BOARD,
					variables: { boardId: router.query.boardId },
				},
			],
		});
	};

	return data ? (
		<BoardDetailUI
			data={data}
			handleClickMoveToBoardList={handleClickMoveToBoardList}
			handleClickMoveToBoardEdit={handleClickMoveToBoardEdit}
			handleClickDeleteButton={handleClickDeleteButton}
			handleClickLike={handleClickLike}
			handleClickDislike={handleClickDislike}
		/>
	) : (
		<>로딩중입니다</>
	);
}
