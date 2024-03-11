import { useState, CSSProperties } from 'react';

import { Article } from '../article/Article';
import {
	ArticleParamsForm,
	TParams,
} from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [stateArticle, setStateArticle] = useState(defaultArticleState);

	const handleParams = (params: TParams) => {
		setStateArticle({
			font: params.fontForm,
			fontSize: params.fontSize,
			fontColor: params.fontColor,
			backgroundColor: params.backgroundColor,
			contentWidth: params.articleWight,
		});
	};

	const handleArticleReset = () => {
		setStateArticle(defaultArticleState);
	};

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': stateArticle.font.value,
					'--font-size': stateArticle.fontSize.value,
					'--font-color': stateArticle.fontColor.value,
					'--container-width': stateArticle.contentWidth.value,
					'--bg-color': stateArticle.backgroundColor.value,
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
