import type { ChangeEvent } from 'react';
import type { IQuery } from 'src/commons/types/generated/types';

export interface IBoardWriteProps {
	isEdit: boolean;
	data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IUpdateBoardInput {
	title?: string;
	contents?: string;
	youtubeUrl?: string;
}

export interface ISubmitButtonProps {
	isActive: boolean;
}

export interface IBoardWriteUIProps {
	isActive: boolean;
	writerError: string;
	passwordError: string;
	titleError: string;
	contentsError: string;
	handleChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
	handleClickSubmit: () => void;
	handleClickUpdate: () => void;
	isEdit: boolean;
	data?: Pick<IQuery, 'fetchBoard'>;
}
