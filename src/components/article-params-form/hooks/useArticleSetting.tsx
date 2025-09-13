// hooks/useArticleSettings.ts
import { useState, SyntheticEvent } from 'react';
import {
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export function useArticleSettings(
	setSettings: (settings: ArticleStateType) => void
) {
	const [settingsArticle, setSettingsArticle] = useState(defaultArticleState);

	const handleChangeSettingArticle = (
		key: keyof ArticleStateType,
		value: OptionType
	) => {
		setSettingsArticle((prev) => ({ ...prev, [key]: value }));
	};

	const handleSubmitSettingArticle = (e: SyntheticEvent) => {
		e.preventDefault();
		setSettings(settingsArticle);
	};

	const handleResetSetting = () => {
		setSettings(defaultArticleState);
		setSettingsArticle(defaultArticleState);
	};

	return {
		settingsArticle,
		handleChangeSettingArticle,
		handleSubmitSettingArticle,
		handleResetSetting,
	};
}
