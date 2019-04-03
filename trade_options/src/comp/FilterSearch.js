import React, {Component} from 'react';
import Ticker from './Ticker';
import TickerData from '../json/ticker_data.json'


class FilterSearch extends Component {

	constructor(props){
		super(props)

		this.state = {value : "Search Stock"}
		this.nasData = TickerData[0]["NASDAQ"];
		this.amexData = TickerData[1]["AMEX"];
		this.nysData = TickerData[2]["NYSCE"];
		this.handleChange = this.handleChange.bind(this);
		this.outPut = this.outPut.bind(this);
	}



	

	handleChange(e){
		let state = this.setState( {value : e.target.value} );
		return state;
	}

	outPut(){	

		console.log(this.state.value);

		if(this.state.value === "AAPL"){
			console.log("It's a Match");
		}else{
			console.log("No MAtch");	
		}


	}

	render(){

		return(

			<React.Fragment>
				<div className="ticker-filter"> 
					<input type="text" placeholder={this.state.value} onChange={this.handleChange} onKeyUp={this.outPut} name="filter-search"/>
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