import {useSnapshot} from "valtio";
import state from "../store/index.js";
import {getContrastingColor} from "../config/helpers.js";

function CustomButton({type, title, handleClick, customStyle}) {
	const snap = useSnapshot(state);

	const generateStyle = (type) => {
		if (type === 'filled') {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color)
			}
		} else if (type === 'outline') {
			return {
				borderWidth: '1px',
				borderColor: snap.color,
				color: snap.color
			}
		}
	}

	return (
		<button
			style={generateStyle(type)}
			onClick={handleClick}
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
		>
			{title}
		</button>
	);
}

export default CustomButton;