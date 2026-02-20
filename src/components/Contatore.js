import { useState } from "react";

export default function Contatore() {

	let [count, setCount] = useState(0);

	function onButtonClicked() {
		console.log("Hai cliccato il pulsante.");

		console.log("Contatore:", count);

		setCount(count + 1);

		console.log("Contatore aggiornato:", count);
	}

	return <div className="componente">
		<p>Contatore: {count}</p>
		<button onClick={onButtonClicked}>Cliccami</button>
	</div>
}