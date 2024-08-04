'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

type Todo = {
	id: string
	title: string
	description: string | null
	tags: string | null
}

export default function TodoList({ todos, listName }: { todos: Todo[]; listName: string }) {
	const [filter, setFilter] = useState('')
	const router = useRouter()
	const { toast } = useToast()

	const handleDelete = async (id: string) => {
		const response = await fetch(`/api/todos/${id}`, { method: 'DELETE' })
		if (response.ok) {
			router.refresh()
			toast({
				title: 'Task deleted',
				description: 'The task has been deleted successfully.'
			})
		} else {
			toast({
				title: 'Error',
				description: 'Failed to delete task. Please try again.',
				variant: 'destructive'
			})
		}
	}

	const filteredTodos = filter ? todos.filter((todo) => todo.tags?.includes(filter)) : todos
	// @ts-ignore - This is a hack to get all unique tags from all todos
	const allTags = [...new Set(todos.flatMap((todo) => todo.tags?.split(',') || []))]

	return (
		<div>
			<div className='mb-4 flex flex-wrap gap-2'>
				<Button onClick={() => setFilter('')} variant={filter === '' ? 'default' : 'outline'} size='sm'>
					All
				</Button>
				{allTags.map((tag) => (
					<Button key={tag} onClick={() => setFilter(tag)} variant={filter === tag ? 'default' : 'outline'} size='sm' className='text-xs'>
						{tag}
					</Button>
				))}
			</div>
			<ul className='space-y-4'>
				{filteredTodos.map((todo) => (
					<li key={todo.id} className='bg-white p-4 rounded shadow'>
						<h3 className='text-xl font-semibold'>{todo.title}</h3>
						{todo.description && <p className='text-gray-600'>{todo.description}</p>}
						{todo.tags && (
							<div className='mt-2 flex flex-wrap gap-1'>
								{todo.tags.split(',').map((tag) => (
									<span key={tag} className='inline-block bg-gray-100 rounded-full px-2 py-0.5 text-xs font-medium text-gray-500'>
										{tag.trim()}
									</span>
								))}
							</div>
						)}
						<Button onClick={() => handleDelete(todo.id)} variant='destructive' size='sm' className='mt-2'>
							Delete
						</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
