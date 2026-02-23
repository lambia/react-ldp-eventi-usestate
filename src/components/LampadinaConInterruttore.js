import { useState } from "react";

export default function Lampadina() {

	const [isOn, setIsOn] = useState(true);

	function toggleLampadina() {
		setIsOn(!isOn);
	}

	return <div className="componente">

		<img className="mini-lamp" src={isOn ? "/yellow_lamp.png" : "/white_lamp.png"} />
		<br />
		<button onClick={toggleLampadina}>{isOn ? "Spegni" : "Accendi"}</button>

	</div>
}