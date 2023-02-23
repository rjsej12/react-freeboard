import { gql } from '@apollo/client';

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			writer
			createdAt
			title
			contents
		}
	}
`;

export const DELETE_BOARD = gql`
	mutation deleteBoard($boardId: ID!) {
		deleteBoard(boardId: $boardId)
	}
`;
