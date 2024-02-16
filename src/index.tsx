import { createRoot } from 'react-dom/client';
import { useState, StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import {
	ArticleParamsForm,
	TParams,
} from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [stateArticle, setStateArticle] = useState({
		font: defaultArticleState.fontFamilyOption.value,
		fontSize: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
		contentWidth: defaultArticleState.contentWidth.value,
	});

	const handleParams = (params: TParams) => {
		setStateArticle({
			font: params.fontForm.value,
			fontSize: params.fontSize.value,
			fontColor: params.fontColor.value,
			backgroundColor: params.backgroundColor.value,
			contentWidth: params.articleWight.value,
		});
	};

	const handleArticleReset = () => {
		setStateArticle({
			font: defaultArticleState.fontFamilyOption.value,
			fontSize: defaultArticleState.fontSizeOption.value,
			fontColor: defaultArticleState.fontColor.value,
			backgroundColor: defaultArticleState.backgroundColor.value,
			contentWidth: defaultArticleState.contentWidth.value,
		});
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': stateArticle.font,
					'--font-size': stateArticle.fontSize,
					'--font-color': stateArticle.fontColor,
					'--container-width': stateArticle.contentWidth,
					'--bg-color': stateArticle.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				handleParams={handleParams}
				handleArticleReset={handleArticleReset}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
