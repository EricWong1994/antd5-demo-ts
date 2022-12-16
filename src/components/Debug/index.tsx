// import { Button } from 'antd';
import { Button } from 'antd/dist/antd';
import React, { useEffect, useState } from 'react';

export default function DebugIndex(props: any) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('debuger', props);
	}, [props]);

	return (
		<div>
			DebugIndex
			{/* <div className='debug'>{count}</div>
			<button
				onClick={() => {
					setCount(pre => pre + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					fetch('/debug');
				}}
			>
				fetch
			</button> */}
			<Button>debug antd按钮</Button>
		</div>
	);
}
