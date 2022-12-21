import { Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import TextField from '../TextField';

export default function InputDemo() {
	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		console.log('newValue: ', newValue);
		setValue(newValue);
	};
	return (
		<div>
			<TextField
				value={value}
				defaultValue='哈哈哈'
				onChange={onChange}
			/>
		</div>
	);
}
