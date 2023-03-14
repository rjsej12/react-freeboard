import styled from '@emotion/styled';
import { Rate } from 'antd';

export const ItemWrapper = styled.div`
	width: 1200px;
	margin: 40px auto;
	border-bottom: 1px solid #bdbdbd;
	padding-bottom: 20px;
`;

export const FlexWrapper = styled.div`
	display: flex;
`;

export const Avatar = styled.img`
	width: 40px;
	height: 40px;
`;

export const MainWrapper = styled.div`
	width: 100%;
	padding-left: 12px;
`;

export const WriterWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
`;

export const Writer = styled.div`
	font-weight: 500;
`;

export const Contents = styled.div`
	color: #4f4f4f;
	margin-top: 4px;
`;

export const OptionWrapper = styled.div`
	display: flex;
	gap: 16px;
`;

export const UpdateIcon = styled.img`
	width: 18px;
	height: 18px;
	cursor: pointer;
`;

export const DeleteIcon = styled.img`
	width: 14px;
	height: 14px;
	cursor: pointer;
`;

export const DateString = styled.div`
	margin-top: 20px;
	color: #bdbdbd;
	font-size: 12px;
	padding-left: 52px;
`;

export const Star = styled(Rate)`
	padding-left: 16px;
	padding-bottom: 8px;
	font-size: 20px;
`;
