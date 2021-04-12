import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Canvas = ({ children, imgIndex, moveImage }) => {
	
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.IMAGE,
		drop: () => moveImage(imgIndex),
		collect: (monitor) => ({
		  isOver: !!monitor.isOver()
		})
	});
	
	console.log(imgIndex);
	
	return (
		<div ref={drop} className="canvas-container">
			<div className="canvas-body">
				{children}
			</div>
		</div>
	);
}

export default Canvas;