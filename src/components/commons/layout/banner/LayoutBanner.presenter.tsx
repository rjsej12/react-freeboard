import Slider from 'react-slick';
import { SliderItem, Wrapper } from './LayoutBanner.styles';

export default function LayoutBannerUI() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Wrapper>
			<Slider {...settings}>
				<div>
					<SliderItem src="/images/banner/carousel1.png" />
				</div>
				<div>
					<SliderItem src="/images/banner/carousel2.png" />
				</div>
				<div>
					<SliderItem src="/images/banner/carousel3.png" />
				</div>
			</Slider>
		</Wrapper>
	);
}
