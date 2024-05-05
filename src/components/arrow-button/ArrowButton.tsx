import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

type ArrowButtonProps = {
	isPressed: boolean;
	onClick: () => void;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	const { isPressed, onClick } = props;

	return (
		/* Не забываем указывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isPressed && styles.container_open}`}
			onClick={() => onClick()}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={isPressed ? styles.arrow_open : styles.arrow}
			/>
		</div>
	);
};
