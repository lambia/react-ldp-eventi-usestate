import { useState } from "react";

export default function Form() {

	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		email: ""
	});

	function updateUser(e) {

		const campo = e.target.name;
		const valore = e.target.value;

		const newData = { ...newUser };
		newData[campo] = valore;
		setNewUser(newData);

		console.log(`${campo} adesso vale ${valore}`);

		// setFormData({
		// 	...formData,
		// 	[e.target.name]: e.target.value
		// });
	}


	return <div className="componente">

		<input name="firstName" value={newUser.firstName} onChange={updateUser} placeholder="firstName" />
		<input name="lastName" value={newUser.lastName} onChange={updateUser} placeholder="lastName" />
		<input name="email" value={newUser.email} onChange={updateUser} placeholder="email" />

		<p>La mail di {newUser.firstName} {newUser.lastName} è: {newUser.email}</p>

	</div>
}