import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'; /*{}- cause I export more than one item (not default export) for ex: {robots, cats} */
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


// STATE - THE DESCRIPTION OF THE APP (AN OBJECT)

/*in order to use state, we must declare App by class (the old way) and not const etc*/
class App extends Component{
	constructor () {
		super ()
		this.state = { /*'this' - can change the App*/
			robots: [],
			searchfield:''
		}
	}


	// onSearchChange (event) {
	// 	console.log(event.target.value);
	// }	

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then ( response => response.json() )
			.then ( users => this.setState( {robots: users} ) )
	}	
	

	onSearchChange = (event) => { /*special thing -watch video 211, time-21:00*/
		this.setState( {searchfield: event.target.value} )		
	}

	render () {
		const {robots, searchfield} = this.state; /*distructing -from now on I can just write robots instead of writing this.state.robots etc*/
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes( searchfield.toLowerCase() );
		})

		if (!robots.length) { /*robots.length===0*, another way is to write :return !robots.length? */
			return <h1 className='tc f1'>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox SearchChange = {this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots}/>  {/*an array of cards*/}
					</Scroll>
				</div>
			);
	    }	

	}
		
	
}



// 	onSearchChange = (event) => { /*special thing -watch video 211, time-21:00*/
// 		this.setState( {searchfield: event.target.value} )	
// 		const filteredRobots = this.state.robots.filter(robot =>{
// 			return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() )
// 		})	
// 		console.log(filteredRobots);	
// 	}

// 	render () {
// 		return (
// 			<div className='tc'>
// 				<h1 className='f1'>RoboFriends</h1>
// 				<SearchBox SearchChange = {this.onSearchChange} />
// 				<CardList robots={this.state.robots}/>  {/*an array of cards*/}
// 			</div>
// 		);
// 	}
	
// }






export default App;