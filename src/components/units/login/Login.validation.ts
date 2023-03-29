import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().email('이메일 형식에 맞지 않습니다').required('이메일을 입력해주세요.'),
	password: yup
		.string()
		.min(4, '비밀번호는 최소 4자리 이상입니다.')
		.max(15, '비밀번호는 최대15자리 입니다.')
		.required('비밀번호를 입력해주세요.'),
});

export const signupSchema = yup.object({
	email: yup.string().email('이메일 형식에 맞지 않습니다').required('이메일을 입력해주세요.'),
	password: yup
		.string()
		.min(4, '비밀번호는 최소 4자리 이상입니다.')
		.max(15, '비밀번호는 최대15자리 입니다.')
		.required('비밀번호를 입력해주세요.'),
	name: yup.string().required('이름을 입력해주세요.'),
});
