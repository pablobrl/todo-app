import { useState } from 'react'

export function useLocalStorage<T = any>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error: any) {
			console.log(error)
			return initialValue
		}
	})

	const setValue = (value: T) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error: any) {
			console.log(error)
		}
	}

	return [storedValue, setValue]
}
