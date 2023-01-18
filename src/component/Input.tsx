import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import TodoList from './TodoList';
import todo_types from '../types';
// import TextField from '@mui/material';
import { TextField, Button } from '@material-ui/core';
function Input() {
	type simpleTodo = todo_types[];
	interface inputvalue {
		todo_text: string;
	}
	const unique_id = uuid();
	const small_id = unique_id.slice(0, 8);
	const [todos, setTodos] = useState<simpleTodo>([
		{ todo_text: 'first', id: small_id },
	]);
	const [data, setData] = useState<inputvalue>();
	// console.log('todos', todos);

	const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		// setTodos((prevstate) =>{...todos,})
		setTodos((prevstate) => [
			...prevstate,
			{ todo_text: data ? data.todo_text : '', id: small_id },
		]);
		console.log('todos', todos);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setData({ todo_text: e.currentTarget.value });
	};
	return (
		<div className="flex justify-between gap-3">
			<TextField
				// onChange={(e: React.FormEvent<HTMLInputElement>) =>
				// 	setData({ todo_text: e.currentTarget.value })
				// }
				onChange={handleChange}
				id="name"
				label="type your todo"
				variant="outlined"
			/>
			<Button onClick={HandleClick} color="primary" variant="contained">
				Add_Todo
			</Button>
			<TodoList list={todos} />
		</div>
	);
}

export default Input;
