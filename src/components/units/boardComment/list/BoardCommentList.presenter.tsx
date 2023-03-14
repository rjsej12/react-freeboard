import BoardCommentItem from './BoardCommentItem';
import type { IBoardCommentListUIProps } from './BoardCommentList.types';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
	return (
		<>
			{props.data?.fetchBoardComments.map((el) => (
				<BoardCommentItem key={el._id} el={el} />
			))}
		</>
	);
}
