import React from 'react';
import { ConfigProvider, Button } from 'antd';
import ThemeComp from './components/ThemeComp';

const App: React.FC = () => (
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#00b96b',
			},
			components: {
				Radio: {
					colorPrimary: 'skyblue',
				},
				Checkbox: {
					// TODO 勾选完之后，hover颜色还是绿色？
					colorPrimary: 'yellow',
				},
			},
		}}
	>
		<ThemeComp />
	</ConfigProvider>
);

export default App;
