import InfiniteScroll from 'react-infinite-scroller';
import BoardCommentItem from './BoardCommentItem';
import type { IBoardCommentListUIProps } from './BoardCommentList.types';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
	return (
		<InfiniteScroll pageStart={0} loadMore={props.handleLoadMore} hasMore={true}>
			{props.data?.fetchBoardComments.map((el) => (
				<BoardCommentItem key={el._id} el={el} />
			))}
		</InfiniteScroll>
	);
}
