import { useState } from "react";

export default function ControlledInput(props) {

	const [firstName, setFirstName] = useState("Luca");

	function aggiornaNome(e) {
		console.log("Il dato è cambiato", e.target.value);
		setFirstName(e.target.value);
	}

	return <div className="componente">
		<input value={firstName} onChange={aggiornaNome} />
	</div>
}