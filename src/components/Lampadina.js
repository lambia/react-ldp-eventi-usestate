export default function Lampadina(props) {

	return <div className="componente">

		<img src={props.isOn ? "/yellow_lamp.png" : "/white_lamp.png"} />

	</div>
}