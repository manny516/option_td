import React, {Component} from 'react'
import TickerData from '../json/ticker_data.json'


class Ticker extends Component {

	constructor(props){
		super(props);
		this.nasData = TickerData[0]["NASDAQ"];
		this.amexData = TickerData[1]["AMEX"];
		this.nysData = TickerData[2]["NYSCE"];
		//this.exchangeTicker = this.exchangeTicker.bind(this);
	}


	render(){

		return(

		<React.Fragment>

			<div className="ticker-display">
			

				<div className="ticker-names"> 
					
					<h2> NASDAQ </h2>

					<hr />

					{this.props.nasData}
				</div>
				</div>

			</React.Fragment>

		)
	}

}

export default Ticker;