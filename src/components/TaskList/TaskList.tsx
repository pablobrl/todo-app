import { useContext } from 'react'
import type { TTask } from '../../contexts/tasksContext'
import { TasksContext } from '../../contexts/tasksContext'
import Task from '../Task'
import styles from './TaskList.module.css'

export default function TaskList() {
	const { tasks } = useContext(TasksContext)

	return (
		<section
			className={styles.taskList}
			style={{ visibility: tasks.length < 1 ? 'hidden' : 'visible' }}
		>
			<h1>Tasks</h1>
			{tasks.map((task: TTask) => (
				<Task
					key={task.id}
					id={task.id}
					title={task.title}
					description={task.description}
					createdAt={task.createdAt}
				/>
			))}
		</section>
	)
}
