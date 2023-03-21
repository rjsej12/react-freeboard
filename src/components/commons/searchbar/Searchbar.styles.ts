import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Searchbar = styled.div`
	width: 776px;
	height: 52px;
	border-radius: 10px;
	background-color: #f2f2f2;
	padding: 16px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
`;

export const SearchIcon = styled(SearchOutlined)`
	font-size: 20px;
`;

export const SearchbarInput = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	margin-left: 12px;
`;
