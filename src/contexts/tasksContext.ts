import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type TTask = {
	id: string
	title: string
	description?: string
	createdAt: string
}

type TTasksContext = {
	tasks: TTask[]
	setTasks: Dispatch<SetStateAction<TTask[]>>
}

export const TasksContext = createContext<TTasksContext>({} as TTasksContext)
