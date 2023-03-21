import styled from '@emotion/styled';

export const Wrapper = styled.div`
	height: 300px;
	.slick-dots {
		bottom: 24px;
		& li button::before {
			color: white;
		}
	}
`;

export const SliderItem = styled.img`
	height: 300px;
	margin: 0 auto;
`;
