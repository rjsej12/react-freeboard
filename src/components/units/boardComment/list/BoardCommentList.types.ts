import type { IBoardComment, IQuery } from 'src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
	data?: Pick<IQuery, 'fetchBoardComments'>;
}

export interface IBoardCommentItemProps {
	el: IBoardComment;
}
