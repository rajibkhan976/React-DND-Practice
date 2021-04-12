import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mediaActions from '../apiintegration/mediaActions';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Canvas from './Canvas';

const MediaGallery = ({ images, mediaActions }) => {
	
	const [imgArr, setImgArr] = useState(null);
	
	useEffect(() => {
		mediaActions.getImages(10);
	}, []);
	
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.IMAGE },
		begin: (monitor) => (console.log(monitor.getItem())),
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	});
	
	useEffect(() => {
		if (images !== undefined &&
			images !== null &&
			images.length !== 0
		) {
			let imageElemArr = [];
			images.forEach((element, index) => {
				imageElemArr.push({
					image: 	<div ref={drag} key={index}>
								<img className={`mb-3`} src={element.img} alt={element.name} width={`180`} height={`150`} />
							</div>
				});
			});
			setImgArr(imageElemArr);
		}
	}, [images]);
	
	const moveImage = () => {
		//setImgIndexArr(index);
	}
	
	return (
		<div className="container-row">
			<LeftSidebar imagesArr={imgArr} />
			<Canvas moveImage={moveImage} />
		</div>
	);
}

function mapStateToProps(state) {
    return {
        images: state.mediaReducer.images,
        error: state.mediaReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        mediaActions: bindActionCreators(mediaActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaGallery);