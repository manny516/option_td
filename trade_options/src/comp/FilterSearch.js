import React, {Component} from 'react';
import Ticker from './Ticker';
import TickerData from '../json/ticker_data.json'


class FilterSearch extends Component {

	constructor(props){
		super(props)
		this.nasData = TickerData[0]["NASDAQ"];
		this.amexData = TickerData[1]["AMEX"];
		this.nysData = TickerData[2]["NYSCE"];
		this.callMyName = this.callMyName.bind(this);
	}


	callMyName(){
		let testName =  "New World Order";
		return testName;
	}

	render(){

		return(

			<Ticker NASDAQ={this.nasData} AMEX={this.amexData} NYSCE={this.nysData} />

		)

	}

}


export default FilterSearch;