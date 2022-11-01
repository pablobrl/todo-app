import styles from './App.module.css'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList'
import type { TTask } from './contexts/tasksContext'
import { TasksContext } from './contexts/tasksContext'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
	const [tasks, setTasks] = useLocalStorage<TTask[]>('tasks', [])

	return (
		<TasksContext.Provider value={{ tasks, setTasks }}>
			<main>
				<div className={styles.container}>
					<TaskForm />
					<TaskList />
				</div>
			</main>
		</TasksContext.Provider>
	)
}
