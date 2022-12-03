import { Button } from 'antd';
import React from 'react';

export default function HelloWorld() {
	const onClick = () => {
		// @ts-ignore
		console.log(a);
	};
	return (
		<div>
			<Button onClick={onClick}>HelloWorld</Button>
		</div>
	);
}
