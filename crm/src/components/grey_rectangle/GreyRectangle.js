import React from "react";
import "./GreyRectangle.scss";

const GreyRectangle = ({children, pageName}) => {
	return (
		<div className='rectangle'>
			{children}
		</div>
	);
};

export default GreyRectangle;
