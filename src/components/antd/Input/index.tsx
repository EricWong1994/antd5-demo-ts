import { Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import TextField from '../TextField';

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
			<TextField
				// value={value}
				defaultValue='哈哈哈'
				onChange={onChange}
			/>
			{/* <Input value={value} defaultValue='哈哈哈' onChange={onChange} /> */}
		</div>
	);
}
