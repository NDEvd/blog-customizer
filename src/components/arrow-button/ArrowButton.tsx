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
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: isClickOpen,
			})}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: isClickOpen,
				})}
			/>
		</div>
	);
};
