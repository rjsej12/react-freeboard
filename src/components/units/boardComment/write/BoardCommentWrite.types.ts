import { ChangeEvent } from 'react';

export interface IBoardCommentWriteUIProps {
	handleChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickWrite: () => void;
	contents: string;
}
