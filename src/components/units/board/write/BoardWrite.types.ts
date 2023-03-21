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
	boardAddress?: {
		zipcode?: string;
		address?: string;
		addressDetail?: string;
	};
	images?: string[];
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
	handleChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
	handleClickAddressSearch: () => void;
	handleCompleteAddressSearch: (data: any) => void;
	handleChangeFileUrls: (fileUrl: string, index: number) => void;
	handleClickSubmit: () => void;
	handleClickUpdate: () => void;
	isEdit: boolean;
	data?: Pick<IQuery, 'fetchBoard'>;
	isOpen: boolean;
	zipcode: string;
	address: string;
	addressDetail: string;
	toggleAddressModal: () => void;
	fileUrls: string[];
}
