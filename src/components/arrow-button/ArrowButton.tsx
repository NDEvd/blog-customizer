import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

type TArrowButtonProps = {
	isClickOpen: boolean;
	onClick: () => void;
};

export const ArrowButton = ({ isClickOpen, onClick }: TArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={
				isClickOpen
					? clsx(styles.container, styles.container_open)
					: styles.container
			}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={
					isClickOpen ? clsx(styles.arrow, styles.arrow_open) : styles.arrow
				}
			/>
		</div>
	);
};
