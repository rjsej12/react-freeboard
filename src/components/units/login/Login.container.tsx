import { useForm } from 'react-hook-form';
import LoginUI from './Login.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Login.validation';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './Login.queries';
import type { IMutation, IMutationLoginUserArgs } from 'src/commons/types/generated/types';
import type { IFormData } from './Login.types';

export default function Login() {
	const router = useRouter();
	const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER);

	const { register, handleSubmit, formState } = useForm<IFormData>({
		resolver: yupResolver(loginSchema),
		mode: 'onChange',
	});

	const handleClickSubmit = async (data: IFormData) => {
		try {
			const { email, password } = data;
			const result = await loginUser({
				variables: {
					email,
					password,
				},
			});
			console.log(result);
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
