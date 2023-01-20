import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import todo_types from '../types';
// import TextField from '@mui/material';
import { TextField, Button } from '@material-ui/core';
import HandledApi from '../HandledApi';
import axios from 'axios';

function Input() {
	type simpleTodo = todo_types[];
	interface inputvalue {
		title: string;
	}
	const unique_id = uuid();
	const small_id = unique_id.slice(0, 8);
	const [todos, setTodos] = useState<simpleTodo>([]);
	const [data, setData] = useState<inputvalue>();
	const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setTodos((prevstate) => [
			...prevstate,
			{ title: data ? data.title : '', id: small_id },
		]);
		console.log('todos', todos);
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setData({ title: e.currentTarget.value });
	};

	interface apiObj {
		userId: number;
		id: string;
		title: string;
		completed: Boolean;
	}
	async function getTodos() {
		const dt = await axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.catch((err) => err);
		setTodos(() =>
			dt.data.slice(0, 5).map((member: apiObj) => ({
				...member,
				id: member.id.toString(),
			}))
		);
	}
	useEffect(() => {
		getTodos();
	}, []);
	return (
		<div className="flex justify-between gap-3">
			<TextField
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
