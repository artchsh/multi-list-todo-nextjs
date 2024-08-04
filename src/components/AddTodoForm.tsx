'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'

export default function AddTodoForm({ listName }: { listName: string }) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [tags, setTags] = useState('')
	const router = useRouter()
	const { toast } = useToast()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const response = await fetch('/api/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ listName, title, description, tags })
		})

		if (response.ok) {
			setTitle('')
			setDescription('')
			setTags('')
			router.refresh()
			toast({
				title: 'Task added',
				description: 'Your new task has been added successfully.'
			})
		} else {
			toast({
				title: 'Error',
				description: 'Failed to add task. Please try again.',
				variant: 'destructive'
			})
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4 mb-8'>
			<div className='flex gap-2 w-full'>
				<div className='w-full max-w-md'>
					<Label htmlFor='title'>Task title</Label>
					<Input id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter task title' required />
				</div>
				<div className='w-full'>
					<Label htmlFor='tags'>Tags</Label>
					<Input id='tags' type='text' value={tags} onChange={(e) => setTags(e.target.value)} placeholder='Enter tags' className='text-sm text-gray-500' />
				</div>
			</div>
			<div>
				<Label htmlFor='description'>Description (optional)</Label>
				<Input id='description' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter task description' />
			</div>

			<Button type='submit' className='w-full'>
				Add Task
			</Button>
		</form>
	)
}
