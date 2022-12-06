import { Button } from 'antd';
import React, { useEffect } from 'react';

export default function HelloWorld() {
	useEffect(() => {
		console.log('effect');

		return () => {};
	}, []);

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
