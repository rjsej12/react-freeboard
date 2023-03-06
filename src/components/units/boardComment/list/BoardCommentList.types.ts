import { MouseEvent } from 'react';
import { IQuery } from 'src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
	data?: Pick<IQuery, 'fetchBoardComments'>;
	handleClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
}
