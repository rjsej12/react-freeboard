import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { IBoardComment } from 'src/commons/types/generated/types';

export interface IBoardCommentWriteProps {
	isEdit?: boolean;
	setIsEdit?: Dispatch<SetStateAction<boolean>>;
	el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
	handleChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickWrite: () => void;
	handleClickUpdate: () => void;
	writer: string;
	password: string;
	contents: string;
	star: number;
	setStar: Dispatch<SetStateAction<number>>;
	isEdit?: boolean;
	el?: IBoardComment;
}

export interface IUpdateBoardCommentInputProps {
	contents?: string;
	rating?: number;
}
