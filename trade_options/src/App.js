import React, { Component } from 'react';
import './css/main.scss';
import Header from './comp/Header';
import FilterSearch from './comp/FilterSearch';

class App extends Component {
  render() {
    return (

    	<React.Fragment >
    		
    		{/* See (src/comp/Header.js) / Load Header Component Data */}
			<Header/>

			<div className="comp-wrapper"> 
				
				{/* See (src/comp/Options.js) / Load Options Component Data */}
				<FilterSearch/>
				{/*<Options/> */}

			</div>

		</React.Fragment>
    );
  }
}

export default App;
