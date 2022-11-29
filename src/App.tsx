import React from 'react';
import { Button, ConfigProvider, theme } from 'antd';
import ThemeComp from './components/ThemeComp';
import DebugIndex from './components/Debug';

const App: React.FC = () => (
	<ConfigProvider
		theme={{
			// algorithm: theme.darkAlgorithm,
			algorithm: theme.compactAlgorithm,
			// token: {
			// 	colorPrimary: '#00b96b',
			// },
			components: {
				Radio: {
					colorPrimary: '#00b96b',
					// colorPrimary: 'skyblue',
				},
				// Checkbox: {
				// 	// TODO 勾选完之后，hover颜色还是绿色？
				// 	colorPrimary: 'yellow',
				// },
			},
		}}
	>
		<ThemeComp />
		<Button>切换主题</Button>
		<DebugIndex title='debug学习' />
	</ConfigProvider>
);

export default App;
