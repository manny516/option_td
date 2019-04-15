import React, {Component} from 'react';
import Ticker from './Ticker';
import TickerData from '../json/ticker_data.json'


class FilterSearch extends Component {

	constructor(props){
		super(props)

		this.state = {
			value : "Search Stock",
			nasdaq : TickerData[0]["NASDAQ"],
			amex: TickerData[1]["AMEX"],
			nysce : TickerData[2]["NYSCE"]

		}	

		this.handleChange = this.handleChange.bind(this);
		this.outPut = this.outPut.bind(this);
	}
	
 
	handleChange(e){
		let state = this.setState( {value : e.target.value} );
		return state;
	}

	outPut(){	
		
		let regExp = new RegExp(this.state.value,"i");
		
		let nasSearchData = this.state.nasdaq.map( 
			function(symbl){
				let tickerName = symbl['ticker'];

				if(tickerName.search(regExp) !== -1 ){
					
					return <li> {tickerName} </li>;
				}else{
					return '';
				}
				
			});

		console.log(nasSearchData);
		//console.log(amexSearchData);
		//console.log(nysceSearchData);


	}

	render(){

		return(

			<React.Fragment>
				
				<div className="ticker-filter"> 
					<input type="text" placeholder={this.state.value} onChange={this.handleChange} onKeyUp={this.outPut} name="filter-search"/>
				</div>


				<div className="ticker-display">
					<Ticker exchangeName="NASDAQ"stockTicker={this.state.nasdaq} />
					<Ticker exchangeName="NYSCE" stockTicker={this.state.nysce} />
					<Ticker exchangeName="AMEX" stockTicker={this.state.amex} />
				</div>

			</React.Fragment>

		)

	}

}


export default FilterSearch;