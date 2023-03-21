import { Tooltip } from 'antd';
import { getDate } from 'src/commons/libraries/utils';
import * as S from './BoardDetail.styles';
import type { IBoardDetailUIProps } from './BoardDetail.types';

export default function BoardDetailUI(props: IBoardDetailUIProps) {
	return (
		<S.Wrapper>
			<S.CardWrapper>
				<S.Header>
					<S.AvatarWrapper>
						<S.Avatar src="/images/avatar.svg" />
						<S.Info>
							<S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
							<S.CreatedAt>Date: {getDate(props.data?.fetchBoard.createdAt)}</S.CreatedAt>
						</S.Info>
					</S.AvatarWrapper>
					<S.IconWrapper>
						<S.LinkIcon />
						<Tooltip
							title={
								props.data?.fetchBoard.boardAddress?.address &&
								props.data?.fetchBoard.boardAddress?.addressDetail
									? `${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`
									: ''
							}
						>
							<S.LocationIcon />
						</Tooltip>
					</S.IconWrapper>
				</S.Header>
				<S.Body>
					<S.Title>{props.data?.fetchBoard.title}</S.Title>
					<S.ImageWrapper>
						{props.data?.fetchBoard.images
							?.filter((el) => el)
							.map((el: string) => (
								<S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
							))}
					</S.ImageWrapper>
					<S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
					<S.YoutubeWrapper>
						{props.data?.fetchBoard.youtubeUrl && (
							<S.Youtube url={props.data?.fetchBoard.youtubeUrl} width="486px" height="240px" controls />
						)}
					</S.YoutubeWrapper>
					<S.LikeWrapper>
						<S.IconWrapper>
							<S.LikeIcon onClick={props.handleClickLike} />
							<S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
						</S.IconWrapper>
						<S.IconWrapper>
							<S.DisLikeIcon onClick={props.handleClickDislike} />
							<S.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</S.DisLikeCount>
						</S.IconWrapper>
					</S.LikeWrapper>
				</S.Body>
			</S.CardWrapper>
			<S.ButtonWrapper>
				<S.Button onClick={props.handleClickMoveToBoardList}>목록으로</S.Button>
				<S.Button onClick={props.handleClickMoveToBoardEdit}>수정하기</S.Button>
				<S.Button onClick={props.handleClickDeleteButton}>삭제하기</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
