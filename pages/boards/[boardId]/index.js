import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
	Wrapper,
	CardWrapper,
	Header,
	AvatarWrapper,
	Avatar,
	Info,
	Writer,
	CreatedAt,
	Body,
	Title,
	Contents,
	ButtonWrapper,
	Button,
} from '@/styles/boarddetail';

const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			writer
			createdAt
			title
			contents
		}
	}
`;

export default function BoardDetailPage() {
	const router = useRouter();

	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: router.query.boardId },
	});

	return data ? (
		'로딩중입니다'
	) : (
		<Wrapper>
			<CardWrapper>
				<Header>
					<AvatarWrapper>
						<Avatar src="/images/avatar.svg" />
						<Info>
							<Writer>{data.fetchBoard.writer}</Writer>
							<CreatedAt>Date: {data.fetchBoard.createdAt}</CreatedAt>
						</Info>
					</AvatarWrapper>
				</Header>
				<Body>
					<Title>{data.fetchBoard.title}</Title>
					<Contents>{data.fetchBoard.contents}</Contents>
				</Body>
			</CardWrapper>
			<ButtonWrapper>
				<Button>목록으로</Button>
				<Button>수정하기</Button>
			</ButtonWrapper>
		</Wrapper>
	);
}
