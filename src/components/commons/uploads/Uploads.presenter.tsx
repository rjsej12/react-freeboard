import { UploadButton, UploadFileHidden, UploadImage } from './Uploads.styles';
import type { IUploadsUIProps } from './Uploads.types';

export default function UploadsUI(props: IUploadsUIProps) {
	return (
		<>
			{props.fileUrl ? (
				<UploadImage
					src={`https://storage.googleapis.com/${props.fileUrl}`}
					onClick={props.handleClickUpload}
				/>
			) : (
				<UploadButton onClick={props.handleClickUpload}>+</UploadButton>
			)}
			<UploadFileHidden type="file" ref={props.fileRef} onChange={props.handleChangeFile} />
		</>
	);
}
