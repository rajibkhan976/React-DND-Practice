import React, { useState, useEffect } from 'react';
import Image from './Image';

const LeftSidebar = ({ imagesArr }) => {
	
	return (
		<div className="left-sidebar">
			<p className="pt-3 pr-5">Media Panel</p>
			<Image imagesArr={imagesArr} />
		</div>
	);
}

export default LeftSidebar;