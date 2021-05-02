const squareStyle = {
	width: '100%',
	height: '100%',
};
export const Square = ({ black, children }) => {
	const fill = black ? 'black' : 'white';
	const stroke = black ? 'white' : 'black';
	return (
		<div
			style={{
				...squareStyle,
				backgroundColor: fill,
				color: stroke,
			}}
		>
			{children}
		</div>
	);
}
