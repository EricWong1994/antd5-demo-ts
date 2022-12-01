import React, { useEffect } from 'react';

export default function DebugIndex(props: any) {
	useEffect(() => {
		console.log('debuger', props);
	}, [props]);

	return <div>DebugIndex</div>;
}
