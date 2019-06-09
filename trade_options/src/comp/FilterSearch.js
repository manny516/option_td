import React, {Component} from 'react';
import TickerData from '../json/ticker_data.json';
import Ticker from './Ticker';



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
		this.outPutNas = this.outPutNas.bind(this);
		this.outPutNYSE = this.outPutNYSE.bind(this);
		this.outPutAMEX = this.outPutAMEX.bind(this);
	}
	
 
	handleChange(e){
		let state = this.setState( {value : e.target.value} );
		return state;
	}


	outPutNas(){	
		
		let regExp = new RegExp(this.state.value,"i");

		let nasSearchData = this.state.nasdaq.map( 
			function(symbl){
				let tickerName = symbl['ticker'];
				let stockName = symbl['stock_name'];

				if(tickerName.search(regExp) !== -1 ){
					
					return <React.Fragment>
								<li> 
									<span>{tickerName}</span>  
									<span>{stockName}</span> 
								</li>
							</React.Fragment>;
					}else{

					return '';
				}
				
			});

		return nasSearchData;
	}


	outPutNYSE(){	
		
		let regExp = new RegExp(this.state.value,"i");

		
		let NYSESearchData = this.state.nysce.map( 
			function(symbl){
				let tickerName = symbl['ticker'];
				let stockName = symbl['stock_name'];

				if(tickerName.search(regExp) !== -1 ){
					
					return <React.Fragment>
								<li> 
									<span>{tickerName}</span>  
									<span>{stockName}</span> 
								</li>
							</React.Fragment>;
					}else{

					return '';
				}
				
			});

		return NYSESearchData;
	}

	outPutAMEX(){	
		
		let regExp = new RegExp(this.state.value,"i");

		
		let AMEXSearchData = this.state.amex.map( 
			function(symbl){
				let tickerName = symbl['ticker'];
				let stockName = symbl['stock_name'];

				if(tickerName.search(regExp) !== -1 ){
					
					return <React.Fragment>
								<li> 
									<span>{tickerName}</span>  
									<span>{stockName}</span> 
								</li>
							</React.Fragment>;
					}else{

					return '';
				}
				
			});

		return AMEXSearchData;


	}

	render(){

		return(

			<React.Fragment>


				<div className="search-input">
					<input type="text" placeholder={this.state.value} onChange={this.handleChange} onKeyUp={this.outPut} name="filter-search"/>
				</div>

				<Ticker nasData={this.outPutNas()}/>

			</React.Fragment>

		)

	}

}


export default FilterSearch;