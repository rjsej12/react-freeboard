import { IQuery } from 'src/commons/types/generated/types';

export interface IBoardDetailUIProps {
	data?: Pick<IQuery, 'fetchBoard'>;
	handleClickMoveToBoardList: () => void;
	handleClickMoveToBoardEdit: () => void;
	handleClickDeleteButton: () => void;
}
