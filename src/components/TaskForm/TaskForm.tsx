import type { ChangeEvent, FormEvent } from 'react'
import { useContext, useState } from 'react'
import TextAreaAutosize from 'react-textarea-autosize'
import { v4 as uuidv4 } from 'uuid'
import { TasksContext } from '../../contexts/tasksContext'
import Button from '../Button/Button'
import styles from './TaskForm.module.css'

const TITLE_MAX_LENGTH = 38
const DESCRIPTION_MAX_LENGTH = 300

export default function TaskForm() {
	const { tasks, setTasks } = useContext(TasksContext)
	const [titleInput, setTitleInput] = useState('')
	const [descriptionTextArea, setDescriptionTextArea] = useState('')

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (titleInput.length < 1) {
			alert("Title can't be empty")
			return
		}

		const newTask = {
			id: uuidv4(),
			title: titleInput,
			description: descriptionTextArea,
			createdAt: new Date().toISOString(),
		}

		setTasks([...tasks, newTask])
		setTitleInput('')
		setDescriptionTextArea('')
	}

	const handleTitleInputChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		if (target.value.length <= TITLE_MAX_LENGTH) {
			setTitleInput(target.value)
		}
	}

	const handleDescriptionTextAreaChange = ({
		target,
	}: ChangeEvent<HTMLTextAreaElement>) => {
		if (target.value.length <= DESCRIPTION_MAX_LENGTH) {
			setDescriptionTextArea(target.value)
		}
	}

	return (
		<section>
			<form onSubmit={handleFormSubmit} className={styles.formControl}>
				<h1>New task</h1>
				<div className={styles.inputGroup}>
					<input
						type="text"
						name="task-title"
						id="task-title"
						placeholder="Title"
						autoComplete="off"
						className={styles.input}
						value={titleInput}
						onChange={handleTitleInputChange}
					/>
					<span className={styles.characterCount}>
						{titleInput.length} / {TITLE_MAX_LENGTH}
					</span>
				</div>
				<div className={styles.inputGroup}>
					<TextAreaAutosize
						name="task-description"
						id="task-description"
						placeholder="Description"
						minRows={3}
						spellCheck={false}
						className={styles.textarea}
						value={descriptionTextArea}
						onChange={handleDescriptionTextAreaChange}
					></TextAreaAutosize>
					<span className={styles.characterCount}>
						{descriptionTextArea.length} / {DESCRIPTION_MAX_LENGTH}
					</span>
				</div>
				<div className={styles.formOptions}>
					<Button submit>Add</Button>
				</div>
			</form>
		</section>
	)
}
