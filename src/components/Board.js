import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BoardSquare } from './BoardSquare';
import { Piece } from './Piece';

const boardStyle = {
	width: 500,
	height: 500,
	border: '1px solid gray',
	display: 'flex',
	flexWrap: 'wrap'
};
const squareStyle = { width: '12.5%', height: '12.5%'};
function renderSquare(i, [knightX, knightY]) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	return (
		<div
			key={i}
			style={squareStyle}
		>
			<BoardSquare x={x} y={y}>
				<Piece isKnight={knightX === x && knightY === y} />
			</BoardSquare>
		</div>
	);
}
export const Board = ({ knightPosition }) => {
	const squares = Array.from(new Array(64), (_, i) => renderSquare(i, knightPosition));
	return (
		<DndProvider backend={HTML5Backend}>
			<div style={boardStyle}>
				{squares}
			</div>
		</DndProvider>
	);
};
