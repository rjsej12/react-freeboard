import type { BaseSyntheticEvent } from 'react';
import type { FormState, UseFormRegister } from 'react-hook-form';

export interface IFormData {
	email: string;
	password: string;
}

export interface ILoginUIProps {
	register: UseFormRegister<IFormData>;
	handleSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => void;
	formState: FormState<IFormData>;
	handleClickLogo: () => void;
	handleClickMoveToSignUp: () => void;
}
