import type { BaseSyntheticEvent } from 'react';
import type { FormState, UseFormRegister } from 'react-hook-form';

export interface IFormData {
	email: string;
	password: string;
	name?: string;
}

export interface ILoginProps {
	isSignup?: boolean;
}

export interface ILoginUIProps {
	register: UseFormRegister<IFormData>;
	handleSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
	formState: FormState<IFormData>;
	handleClickLogo: () => void;
	handleClickMoveToSignUp?: () => void;
	handleClickMoveToLogin?: () => void;
	isSignup?: boolean;
}
