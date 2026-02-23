import { useState } from "react";

export default function ToDoList() {

	const [tasks, setTasks] = useState(["fare la spesa", "fare benzina", "ricontrollare app"]);

	const [newTask, setNewTask] = useState("");

	function handleForm(e) {
		e.preventDefault();
		console.log("La nuova task è: ", newTask);

		const newTasks = [
			...tasks,
			newTask
		];

		setTasks(newTasks);
	}

	function updateNewTask(e) {
		setNewTask(e.target.value);
	}

	return <div className="componente">
		<h3>ToDo:</h3>
		<ul>
			{tasks.map((task, i) =>
				<li key={i}>{task}</li>
			)}
		</ul>

		<form onSubmit={handleForm}>
			<input name="nuovo" value={newTask} onChange={updateNewTask} placeholder="Inserisci nuovo ToDo" />
			<button>Aggiungi elemento</button>
		</form>
	</div>
}