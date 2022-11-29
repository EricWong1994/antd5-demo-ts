import React from 'react';
import { ConfigProvider, Button, Radio, Checkbox } from 'antd';

export default function ThemeComp() {
	return (
		<div>
			<Button>Default Button</Button>
			<Button type='primary'>Primary Button</Button>
			<Radio>Radio</Radio>
			<Checkbox>Checkbox</Checkbox>
		</div>
	);
}
