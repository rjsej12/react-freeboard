import * as S from './BoardCommentWrite.styles';
import type { IBoardCommentWriteUIProps } from './BoardCommentWrite.types';

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
	return (
		<S.Wrapper>
			{!props.isEdit && (
				<S.TitleWrapper>
					<S.PencilIcon src="/images/boardComment/write/pencil.svg" />
					<S.Title>댓글</S.Title>
				</S.TitleWrapper>
			)}
			<S.InputWrapper>
				<S.Input
					type="text"
					placeholder="작성자"
					onChange={props.handleChangeWriter}
					value={props.writer || (props.el?.writer ?? '')}
					readOnly={!!props.el?.writer}
				/>
				<S.Input
					type="password"
					placeholder="비밀번호"
					onChange={props.handleChangePassword}
					value={props.password}
				/>
				<S.Star value={props.star || props.el?.rating} onChange={props.setStar} />
			</S.InputWrapper>
			<S.ContentsWrapper>
				<S.Contents
					maxLength={100}
					onChange={props.handleChangeContents}
					placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
					value={props.contents || props.el?.contents}
				/>
				<S.BottomWrapper>
					<S.ContentsLength>
						{props.contents ? props.contents.length : props.el?.contents.length}/100
					</S.ContentsLength>
					<S.Button onClick={props.isEdit ? props.handleClickUpdate : props.handleClickWrite}>
						{props.isEdit ? '수정하기' : '등록하기'}
					</S.Button>
				</S.BottomWrapper>
			</S.ContentsWrapper>
		</S.Wrapper>
	);
}
