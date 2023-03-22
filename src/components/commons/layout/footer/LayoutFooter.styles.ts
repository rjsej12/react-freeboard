import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Wrappr = styled.div`
	height: 200px;
	background-color: #f2f2f2;
	margin-top: 100px;
`;

export const InnerWrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding-top: 40px;
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 20px;
`;

export const FacebookIcon = styled(FacebookOutlined)`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	background-color: #dadada;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	cursor: pointer;
`;

export const InstagramIcon = styled(InstagramOutlined)`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	background-color: #dadada;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	cursor: pointer;
`;

export const YoutubeIcon = styled(YoutubeOutlined)`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	background-color: #dadada;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	cursor: pointer;
`;

export const HorizontalLine = styled.div`
	border: 1px solid #bdbdbd;
	margin-top: 40px;
`;

export const Copyright = styled.p`
	margin-top: 40px;
	color: #bdbdbd;
`;
