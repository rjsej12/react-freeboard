import type { ChangeEvent, RefObject } from 'react';

export interface IUploadsProps {
	index: number;
	fileUrl: string;
	handleChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploadsUIProps {
	fileUrl: string;
	fileRef: RefObject<HTMLInputElement>;
	handleClickUpload: () => void;
	handleChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
}
