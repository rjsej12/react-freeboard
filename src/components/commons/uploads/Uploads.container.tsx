import { useMutation } from '@apollo/client';
import type { ChangeEvent } from 'react';
import { useRef } from 'react';
import type { IMutation, IMutationUploadFileArgs } from 'src/commons/types/generated/types';
import UploadsUI from './Uploads.presenter';
import { UPLOAD_FILE } from './Uploads.quries';
import type { IUploadsProps } from './Uploads.types';
import { isValidImage } from './Uploads.validation';

export default function Uploads(props: IUploadsProps) {
	const fileRef = useRef<HTMLInputElement>(null);
	const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE);

	const handleClickUpload = () => {
		fileRef.current?.click();
	};

	const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (!isValidImage(file)) return;

		try {
			const result = await uploadFile({ variables: { file } });
			props.handleChangeFileUrls(result.data?.uploadFile.url ?? '', props.index);
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	return (
		<UploadsUI
			fileUrl={props.fileUrl}
			fileRef={fileRef}
			handleClickUpload={handleClickUpload}
			handleChangeFile={handleChangeFile}
		/>
	);
}
