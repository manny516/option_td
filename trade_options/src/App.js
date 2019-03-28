import React, { Component } from 'react';
import './css/main.scss';
import Header from './comp/Header';
import Ticker from './comp/Ticker';

class App extends Component {
  render() {
    return (

    	<React.Fragment >
    		
    		{/* See (src/comp/Header.js) / Load Header Component Data */}
			<Header/>

			<div className="comp-wrapper"> 
				
				{/* See (src/comp/Options.js) / Load Options Component Data */}
				<Ticker/>
				{/*<Options/> */}

			</div>

		</React.Fragment>
    );
  }
}

export default App;
