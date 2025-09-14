import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';

import styles from './ArticleParamsForm.module.scss';

import { useState, useRef } from 'react';
import clsx from 'clsx';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';

import { useClickOutside } from './hooks/useClickOutside';
import { useArticleSettings } from './hooks/useArticleSetting';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type TArticleParamsFormProps = {
	setSettings: (newSettings: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: TArticleParamsFormProps) => {
	const { setSettings } = props;
	const [isOpen, setIsOpen] = useState(false);

	const asideRef = useRef<HTMLElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const {
		settingsArticle,
		handleChangeSettingArticle,
		handleSubmitSettingArticle,
		handleResetSetting,
	} = useArticleSettings(setSettings);

	useClickOutside([asideRef, buttonRef], () => setIsOpen(false), isOpen);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleOpen} ref={buttonRef} />
			<aside
				ref={asideRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={handleSubmitSettingArticle}>
					<Text size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>

					<Select
						selected={settingsArticle.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) =>
							handleChangeSettingArticle('fontFamilyOption', option)
						}
						title='Шрифт'
					/>
					<RadioGroup
						selected={settingsArticle.fontSizeOption}
						options={fontSizeOptions}
						name={settingsArticle.fontSizeOption.className}
						onChange={(option) =>
							handleChangeSettingArticle('fontSizeOption', option)
						}
						title='Размер шрифта'
					/>
					<Select
						selected={settingsArticle.fontColor}
						options={fontColors}
						onChange={(option) =>
							handleChangeSettingArticle('fontColor', option)
						}
						title={'Цвет шрифта'}
					/>
					<Separator />
					<Select
						selected={settingsArticle.backgroundColor}
						options={backgroundColors}
						onChange={(option) =>
							handleChangeSettingArticle('backgroundColor', option)
						}
						title={'Цвет фона'}
					/>
					<Select
						selected={settingsArticle.contentWidth}
						options={contentWidthArr}
						onChange={(option) =>
							handleChangeSettingArticle('contentWidth', option)
						}
						title={'Ширина контента'}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleResetSetting}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
