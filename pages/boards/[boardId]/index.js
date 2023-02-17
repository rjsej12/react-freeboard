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

export default function boardDetailUI() {
	return (
		<Wrapper>
			<CardWrapper>
				<Header>
					<AvatarWrapper>
						<Avatar src="/images/avatar.svg" />
						<Info>
							<Writer>작성자</Writer>
							<CreatedAt>Date: 2022.02.17</CreatedAt>
						</Info>
					</AvatarWrapper>
				</Header>
				<Body>
					<Title>게시글 제목</Title>
					<Contents>
						본문 국회의원의 수는 법률로 정하되, 200인 이상으로 한다. 대통령은 국가의 안위에 관계되는 중대한
						교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
						한하여 법률의 효력을 가지는 명령을 발할 수 있다. 대통령의 임기연장 또는 중임변경을 위한
						헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 헌법에 의하여 체결·공포된
						조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다. 대통령은 헌법과 법률이 정하는
						바에 의하여 공무원을 임면한다. 법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은
						법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 대통령이 궐위된 때 또는
						대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를
						선거한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는
						체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는
						처벌·보안처분 또는 강제노역을 받지 아니한다.
					</Contents>
				</Body>
			</CardWrapper>
			<ButtonWrapper>
				<Button>목록으로</Button>
				<Button>수정하기</Button>
			</ButtonWrapper>
		</Wrapper>
	);
}
