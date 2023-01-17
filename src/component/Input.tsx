import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import TodoList from './TodoList';
function Input() {
	interface todo_types {
		todo_text: string;
		id: string;
	}
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
	return (
		<div className="flex justify-between">
			<input
				type="text"
				placeholder="type here"
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					setData({ todo_text: e.currentTarget.value })
				}
			></input>
			<button onClick={HandleClick}>Add_Todo</button>
			<TodoList todoData={todos} />
		</div>
	);
}

export default Input;
