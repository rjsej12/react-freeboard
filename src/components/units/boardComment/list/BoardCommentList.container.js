import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardCommentListUI from './BoardCommentList.presenter';
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';

export default function BoardCommentList() {
	const router = useRouter();

	const { data } = useQuery(FETCH_BOARD_COMMENTS, {
		variables: { boardId: router.query.boardId },
	});

	return <BoardCommentListUI data={data} />;
}
