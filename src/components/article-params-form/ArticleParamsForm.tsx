import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { FormEvent, useState } from 'react';

import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import {
	fontFamilyOptions,
	defaultArticleState,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	OptionType,
	ArticleStateType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	setArticleStyle: (value: ArticleStateType) => void;
	articleState: ArticleStateType;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isFormOpened, setIsFormOpened] = useState(false);
	const [articleState, setArticleState] = useState(props.articleState);

	// Функция открытия/закрытия формы с настройками
	const handleClickArrowButton = () => {
		setIsFormOpened((prevState) => !prevState);
	};

	// Функция выбора значения из списка
	const handleChange = (fieldName: string) => {
		return (value: OptionType) => {
			setArticleState((curArticleState: ArticleStateType) => ({
				...curArticleState,
				[fieldName]: value,
			}));
		};
	};

	// Функция сохранения настроек для применения к статье
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.setArticleStyle(articleState);
	};

	// Функция сброса настроек на начальные
	const handleReset = () => {
		setArticleState(defaultArticleState);
		props.setArticleStyle(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isPressed={isFormOpened} onClick={handleClickArrowButton} />
			<aside
				className={`${styles.container} ${
					isFormOpened && styles.container_open
				}`}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text uppercase={true} weight={800} size={31}>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={articleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleChange('fontFamilyOption')}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='fontSizeOption'
						selected={articleState.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleChange('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						selected={articleState.fontColor}
						options={fontColors}
						onChange={handleChange('fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={articleState.backgroundColor}
						options={backgroundColors}
						onChange={handleChange('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						selected={articleState.contentWidth}
						options={contentWidthArr}
						onChange={handleChange('contentWidth')}
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
