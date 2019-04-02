import React, {Component} from 'react';
import Ticker from './Ticker';
import TickerData from '../json/ticker_data.json'


class FilterSearch extends Component {

	constructor(props){
		super(props)

		this.nasData = TickerData[0]["NASDAQ"];
		this.amexData = TickerData[1]["AMEX"];
		this.nysData = TickerData[2]["NYSCE"];
	}

	render(){

		return(

			<React.Fragment>

				<div className="ticker-filter"> 
					<input type="text" name="filter-search"/>
				</div>


				<div className="ticker-display">
					<Ticker exchangeName="NASDAQ" stockTicker={this.nasData} />
					<Ticker exchangeName="NYSCE" stockTicker={this.nysData} />
					<Ticker exchangeName="AMEX" stockTicker={this.amexData} />
				</div>
				
			</React.Fragment>

		)

	}

}


export default FilterSearch;