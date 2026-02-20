import { useState } from "react";

export default function Lampadina() {

	const [isOn, setIsOn] = useState(false);

	function toggleLampadina() {
		setIsOn(!isOn);
	}

	return <div className="componente">

		<img src={isOn ? "/yellow_lamp.png" : "/white_lamp.png"} />

		<button onClick={toggleLampadina}>{isOn ? "Spegni" : "Accendi"}</button>

	</div>
}