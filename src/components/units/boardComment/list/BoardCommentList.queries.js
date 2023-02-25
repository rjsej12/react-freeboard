const { gql } = require('@apollo/client');

export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($boardId: ID!) {
		fetchBoardComments(boardId: $boardId) {
			_id
			writer
			contents
			createdAt
		}
	}
`;
