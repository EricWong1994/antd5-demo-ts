import { InputHTMLAttributes } from 'react';

interface ITextField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onchange'> {
	/**
	 * onChange 函数
	 */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextField> = props => {
	const { defaultValue, value, onChange, ...rest } = props;

	return (
		<input
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			{...rest}
		/>
	);
};

export default TextField;
