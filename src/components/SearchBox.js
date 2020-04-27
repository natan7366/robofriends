import React from 'react';

const SearchBox = ( {searchfield, SearchChange} ) => {
	return (
		<div className='pa2'>
			<input 
				className = 'tc pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange= { SearchChange } /*an event of DOM*/
			 />
		</div>
	);
}

export default SearchBox;
