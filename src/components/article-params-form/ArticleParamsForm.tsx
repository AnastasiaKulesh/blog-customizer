import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isFormOpened, setIsFormOpened] = useState(false);

	// Функция открытия/закрытия формы с настройками
	const handleClickButton = () => {
		setIsFormOpened((prevState) => !prevState);
	};

	return (
		<>
			<ArrowButton isPressed={isFormOpened} onClick={handleClickButton} />
			<aside
				className={`${styles.container} ${
					isFormOpened && styles.container_open
				}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
