import React from "react";

const Result = (props) => {
	return (
		<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:col-start-3 col-start-2">
			{props.result}
		</div>
	);
};

export default Result;
