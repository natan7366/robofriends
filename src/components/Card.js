import React from 'react';

/*instaed of class, we will work directly with function (we have learn that it is actually the same)*/
const Card = ( props ) => { 
// const Card = ( {name, email, id} ) => { /*the cleanest way to define the props*/
	// const {name, email, id} = props; another way to define the props (and then we shoult write {props.id} in the img src)
	return (
		// <h1>RoboFriends</h1>
		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*<img alt='robots' src={`https://robohash.org/test?200x200`}/>*/}
			{/*<img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/> $ - using template strings (from the ES6 section) and that way we randomize the id selection*/}
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/> {/*without props because we already define the props at line 4*/}
			<div>
				<h2>{props.name}</h2> {/* props.name won't work because it is jsx and not html so we neeed {props.name}*/}
				<p>{props.email}</p>
				<p>phone: {props.phone}</p>
			</div>
		</div>
	);
}

export default Card;

/* 2 way :*/

// const Card = ( props ) => { 
// 	const {name, email, id} = props; //another way to define the props (and then we shoult write {props.id} in the img src)
// 	return (
// 		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			{/*<img alt='robots' src={'https://robohash.org/test?200x200'}/>*/}
			
// 			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/> {/*without props because we already define the props at line 4*/}
// 			<div>
// 				<h2>{name}</h2> {/* props.name won't work because it is jsx and not html so we neeed {props.name}*/}
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default Card;


/* 3 way :*/

// const Card = ( {name, email, id} ) => { 
// 	return (
// 		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			{/*<img alt='robots' src={'https://robohash.org/test?200x200'}/>*/}
			
// 			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/> {/*without props because we already define the props at line 4*/}
// 			<div>
// 				<h2>{name}</h2> {/* props.name won't work because it is jsx and not html so we neeed {props.name}*/}
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default Card;

