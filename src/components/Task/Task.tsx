import { useContext, useState } from 'react'
import {
	BsFillCaretDownFill,
	BsFillCaretLeftFill,
	BsFillTrashFill,
} from 'react-icons/bs'
import type { TTask } from '../../contexts/tasksContext'
import { TasksContext } from '../../contexts/tasksContext'
import Button from '../Button/Button'
import styles from './Task.module.css'

type TTaskProps = TTask

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US').format

export default function Task({
	id,
	title,
	description,
	createdAt,
}: TTaskProps) {
	const { tasks, setTasks } = useContext(TasksContext)
	const [isCollapsed, setCollapsed] = useState(true)

	const handleDeleteButtonClick = (id: TTask['id']) => {
		setTasks(tasks.filter((task: TTask) => task.id !== id))
	}

	return (
		<article className={styles.task}>
			<section className={styles.taskHeader}>
				<div className={styles.taskTitle}>
					<h2>{title}</h2>
				</div>
				<div className={styles.taskOptions}>
					<Button onClick={() => handleDeleteButtonClick(id)} category="ghost">
						<BsFillTrashFill />
					</Button>
					<Button onClick={() => setCollapsed(!isCollapsed)} category="ghost">
						{isCollapsed ? <BsFillCaretLeftFill /> : <BsFillCaretDownFill />}
					</Button>
				</div>
			</section>
			<div
				className={styles.taskContent}
				style={{ display: isCollapsed ? 'none' : 'block' }}
			>
				{description ? <p>{description}</p> : null}
				<p className={styles.taskDate}>
					Created at {DATE_FORMATTER(new Date(createdAt))}
				</p>
			</div>
		</article>
	)
}
