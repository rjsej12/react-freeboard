import type { IBoardComment, IQuery } from 'src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
	data?: Pick<IQuery, 'fetchBoardComments'>;
	handleLoadMore: () => void;
}

export interface IBoardCommentItemProps {
	el: IBoardComment;
}
