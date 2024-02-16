import clsx from 'clsx';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select/Select';
import { Text } from '../text';
import { RadioGroup } from '../radio-group/RadioGroup';
import { Separator } from '../separator';

import {
	fontFamilyOptions,
	defaultArticleState,
	OptionType,
	fontColors,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export type TParams = {
	fontForm: OptionType;
	fontColor: OptionType;
	fontSize: OptionType;
	backgroundColor: OptionType;
	articleWight: OptionType;
};

type TArticleParamsFormProps = {
	handleParams: (params: TParams) => void;
	handleArticleReset: () => void;
};

export const ArticleParamsForm = ({
	handleParams,
	handleArticleReset,
}: TArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const [fontForm, setFontForm] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [articleWight, setArticleWight] = useState(
		defaultArticleState.contentWidth
	);

	const params = {
		fontForm: fontForm,
		fontColor: fontColor,
		fontSize: fontSize,
		backgroundColor: backgroundColor,
		articleWight: articleWight,
	};

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleChangeFont = (selected: OptionType) => {
		setFontForm(selected);
	};

	const handleChangeFontColor = (selected: OptionType) => {
		setFontColor(selected);
	};

	const handleChangeFontSize = (value: OptionType) => {
		setFontSize(value);
	};

	const handleChangeBackgroundColor = (selected: OptionType) => {
		setBackgroundColor(selected);
	};

	const handleChangeArticleWight = (selected: OptionType) => {
		setArticleWight(selected);
	};

	const handleReset = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFontForm(defaultArticleState.fontFamilyOption);
		setFontColor(defaultArticleState.fontColor);
		setFontSize(defaultArticleState.fontSizeOption);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setArticleWight(defaultArticleState.contentWidth);
		handleArticleReset();
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleParams(params);
	};

	useEffect(() => {
		function closeByEscape(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		}
		if (isOpen) {
			document.addEventListener('keydown', closeByEscape);
			return () => {
				document.removeEventListener('keydown', closeByEscape);
			};
		}
	}, [isOpen]);

	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (formRef.current && !formRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<>
			<ArrowButton isClickOpen={isOpen} onClick={handleClick} />
			<aside
				ref={formRef}
				className={
					isOpen
						? clsx(styles.container, styles.container_open)
						: styles.container
				}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text fontStyle='normal' size={31} weight={800}>
						ЗАДАЙТЕ ПАРАМЕТРЫ
					</Text>
					<Select
						selected={fontForm}
						options={fontFamilyOptions}
						onChange={handleChangeFont}
						title='ШРИФТ'
					/>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={handleChangeFontColor}
						title='ЦВЕТ ШРИФТА'
					/>
					<RadioGroup
						selected={fontSize}
						options={fontSizeOptions}
						name='fontSize.value'
						title='РАЗМЕР ШРИФТА'
						onChange={handleChangeFontSize}
					/>
					<Separator />
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={handleChangeBackgroundColor}
						title='ЦВЕТ ФОНА'
					/>
					<Select
						selected={articleWight}
						options={contentWidthArr}
						onChange={handleChangeArticleWight}
						title='ШИРИНА КОНТЕЙНЕРА'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
