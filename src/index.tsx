import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [settingState, setSettingState] = useState(defaultArticleState);

	// useEffect(() => {
	// 	console.log('App: ', settingState);
	// 	setSettingState(settingState);
	// }, [settingState]);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': settingState.fontFamilyOption.value,
					'--font-size': settingState.fontSizeOption.value,
					'--font-color': settingState.fontColor.value,
					'--container-width': settingState.contentWidth.value,
					'--bg-color': settingState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setSettings={setSettingState} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
