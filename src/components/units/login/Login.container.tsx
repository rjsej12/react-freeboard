import { useForm } from 'react-hook-form';
import LoginUI from './Login.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Login.validation';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './Login.queries';
import type { IMutation, IMutationLoginUserArgs } from 'src/commons/types/generated/types';
import type { IFormData } from './Login.types';
import { useRecoilState } from 'recoil';
import { accessTokenState } from 'src/commons/store';
import { useEffect } from 'react';

export default function Login() {
	const router = useRouter();
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER);

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			void router.push('/boards');
		}
	}, []);

	const { register, handleSubmit, formState } = useForm<IFormData>({
		resolver: yupResolver(loginSchema),
		mode: 'onChange',
	});

	const handleClickSubmit = async (data: IFormData) => {
		try {
			const { email, password } = data;
			const result = await loginUser({ variables: { email, password } });
			const accessToken = result.data?.loginUser.accessToken;
			console.log(accessToken);

			if (!accessToken) {
				alert('로그인에 실패했습니다. 다시 시도해 주세요.');
				return;
			}
			setAccessToken(accessToken);
			localStorage.setItem('accessToken', accessToken);
			void router.push('/boards');
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};

	const handleClickLogo = () => {
		void router.push('/boards');
	};

	const handleClickMoveToSignUp = () => {
		void router.push('/signup');
	};

	return (
		<LoginUI
			register={register}
			handleSubmit={handleSubmit(handleClickSubmit)}
			formState={formState}
			handleClickLogo={handleClickLogo}
			handleClickMoveToSignUp={handleClickMoveToSignUp}
		/>
	);
}
