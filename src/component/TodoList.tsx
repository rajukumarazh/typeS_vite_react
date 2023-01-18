import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import todo_types from '../types';
function TodoList(props: any) {
	type simpleTodo = todo_types[];
	const [updated, setUpdate] = useState<simpleTodo>();
	console.log('kkkprops', props);

	useEffect(() => setUpdate(() => props?.list), [props]);
	function todoFilter(id: string): void {
		let dt = updated?.filter((curr: todo_types) => curr.id !== id);
		console.log('dataInfilter', dt);
		setUpdate(() => dt);
	}

	console.log('helloTodo', updated);
	return (
		<div>
			{updated?.map((curr: any) => {
				return (
					<ul>
						{curr.todo_text}
						<Button
							color="primary"
							variant="contained"
							onClick={() => todoFilter(curr.id)}
						>
							Delete
						</Button>
					</ul>
				);
			})}
		</div>
	);
}

export default TodoList;
