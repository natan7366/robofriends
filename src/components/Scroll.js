import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px solid black', height:'600px'}}>
			{props.children}
		</div>

	);
}

// const Scroll = (props) => {
// 	console.log(props);
// 	return props.children
// }

export default Scroll;