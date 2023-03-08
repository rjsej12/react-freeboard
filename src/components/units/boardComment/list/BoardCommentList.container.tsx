import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import type { MouseEvent } from 'react';
import type {
	IMutation,
	IMutationDeleteBoardCommentArgs,
	IQuery,
	IQueryFetchBoardCommentsArgs,
} from 'src/commons/types/generated/types';
import BoardCommentListUI from './BoardCommentList.presenter';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';

export default function BoardCommentList() {
	const router = useRouter();
	if (typeof router.query.boardId !== 'string') {
		alert('올바르지 않은 게시글 아이디입니다.');
		void router.push('/');
		return <></>;
	}

	const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
		variables: { boardId: router.query.boardId },
	});

	const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(
		DELETE_BOARD_COMMENT
	);

	const handleClickDelete = async (e: MouseEvent<HTMLImageElement>) => {
		const password = prompt('비밀번호를 입력하세요.');
		try {
			await deleteBoardComment({
				variables: {
					password,
					boardCommentId: e.currentTarget.id,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId },
					},
				],
			});
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return <BoardCommentListUI data={data} handleClickDelete={handleClickDelete} />;
}
