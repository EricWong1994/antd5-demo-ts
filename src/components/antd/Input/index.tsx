import { Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import TextField from '../TextField';
import TextFieldV2 from '../TextFieldV2';

export default function InputDemo() {
	const [value, setValue] = useState('');

	// const onChange = (e: ChangeEvent<HTMLInputElement>) => {
	const onChange = (e: any) => {
		const newValue = e.target.value;
		// const newValue = e;
		setValue(newValue);
	};
	return (
		<div>
			{/* <TextField */}
			<TextFieldV2
				// value={value}
				defaultValue='哈哈哈'
				onChange={onChange}
			/>
			{/* <Input value={value} defaultValue='哈哈哈' onChange={onChange} /> */}
		</div>
	);
}
