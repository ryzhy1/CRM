import React from "react";
import "./GreyRectangle.scss";

const GreyRectangle = ({children, pageName}) => {
	return (
		<div className='rectangle'>
			<div className="page-name">{pageName}</div>
			{children}
		</div>
	);
};

export default GreyRectangle;
