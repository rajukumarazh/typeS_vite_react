import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import todo_types from './types';
type Props = {};
interface todoState extends todo_types {
	completed: Boolean;
}
interface apiObj {
	userId: number;
	id: string;
	title: string;
	completed: Boolean;
}

/// api integration with react and typescript
function HandledApi({}: Props) {
	const [allTodos, setAllTodos] = useState<todoState>();
	async function getTodos() {
		const dt = await axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.catch((err) => err);
		setAllTodos(() =>
			dt.data.slice(0, 5).map((member: apiObj) => ({
				...member,
				id: member.id.toString(),
			}))
		);
	}
	useEffect(() => {
		getTodos();
	}, []);
	console.log(allTodos);

	return (
		<div>
			HandledApi
			<p> helloApi</p>
		</div>
	);
}

export default HandledApi;
