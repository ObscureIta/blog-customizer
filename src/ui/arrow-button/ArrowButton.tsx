import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import React from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	isOpen: boolean;
	onClick: OnClick;
};

// eslint-disable-next-line import/no-named-as-default-member, react/display-name
export const ArrowButton = React.forwardRef<HTMLDivElement, ArrowButtonProps>(
	({ isOpen, onClick }, buttonRef) => (
		<>
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				ref={buttonRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				onClick={onClick}>
				<img
					src={arrow}
					alt='иконка стрелочки'
					className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
				/>
			</div>
		</>
	)
);

// export const ArrowButton = ({ isOpen, onClick }: ArrowButtonProps) => {
// 	return (
// 		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
// 		<div
// 			role='button'
// 			aria-label='Открыть/Закрыть форму параметров статьи'
// 			tabIndex={0}
// 			className={   clsx(styles.container, { [styles.container_open]: isOpen })}
// 			onClick={onClick}>
// 			<img
// 				src={arrow}
// 				alt='иконка стрелочки'
// 				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
// 			/>
// 		</div>
// 	);
// };
