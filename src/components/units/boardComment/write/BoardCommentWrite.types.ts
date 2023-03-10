import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface IBoardCommentWriteUIProps {
	handleChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickWrite: () => void;
	writer: string;
	password: string;
	contents: string;
	setStar: Dispatch<SetStateAction<number>>;
}
