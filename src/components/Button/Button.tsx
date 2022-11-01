import type { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type TButtonProps = {
	category?: 'primary' | 'ghost'
	submit?: boolean
	children?: ReactNode
	onClick?(event: MouseEvent<HTMLButtonElement>): void
}

export default function Button({
	category,
	submit,
	children,
	onClick,
}: TButtonProps) {
	return (
		<button
			type={submit ? 'submit' : 'button'}
			className={styles[category ? category : 'primary']}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
