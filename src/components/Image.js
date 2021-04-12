import React, { useState, useEffect } from 'react';

const Image = (props) => {
	
	const { imagesArr } = props;
	
	return (
		<React.Fragment>
			{(imagesArr !== undefined && imagesArr !== null && imagesArr.length !== 0) &&
				imagesArr.map((element, index) => {
					return element.image
				})
			}
		</React.Fragment>
	);
}

export default Image;
