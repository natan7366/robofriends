import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {
	return (
		<div>
			{
				robots.map( (user, i) => { /*forEach is ok but map is recomended*/
					return (
						<Card 
							key={i} /*when working with loops we must use key (if I WILL REMOVE ONE ROBOT SO REACT WILL NOT CONFUSE WITH THE ID) i- for index*/
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
							phone={robots[i].phone} 
						/> 
					 );
				})
			}
		</div>	
	);
}

export default CardList;

// const CardList = ( {robots} ) => {
// 	const CardComponent = robots.map( (user, i) => { /*forEach is ok but map is recomended*/
// 		return (
// 			<Card 
// 				key={i} when working with loops we must use key (if I WILL REMOVE ONE ROBOT SO REACT WILL NOT CONFUSE WITH THE ID) i- for index
// 				id={robots[i].id} 
// 				name={robots[i].name} 
// 				email={robots[i].email} 
// 			/> )
// 	})

// 	return (
// 		<div>
// 			{CardComponent}
// 		</div>	
// 	);
// }

// export default CardList;