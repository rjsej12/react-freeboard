import type { MouseEvent } from 'react';
import type { IQuery } from 'src/commons/types/generated/types';

export interface IBoardListUIProps {
	data?: Pick<IQuery, 'fetchBoards'>;
	handleClickMoveToBoardNew: () => void;
	handleClickMoveToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void;
}
