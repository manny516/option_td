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

			<div className="ticker-names"> 
				
				<h2> NASDAQ </h2>
				<hr />
				
				<ul> 

					{this.nasData.map((symbol ) => {
					
						let tickerSymbl = symbol['ticker'];
						let stockName = symbol['stock_name'];
						return <React.Fragment>
									<li> 
										<span>{tickerSymbl}</span>  
										<span>{stockName}</span> 
									</li>
								</React.Fragment>;

					})

					}

				</ul> 
			</div>

			<div className="ticker-names">

				<h2> AMEX </h2>
				<hr />
				
				<ul> 
					{this.amexData.map((symbol ) => {
						let tickerSymbl = symbol['ticker'];
						let stockName = symbol['stock_name'];
						return <React.Fragment><li>{tickerSymbl}</li>  <li>{stockName}</li></React.Fragment>;
					})
					}

				</ul> 

			</div>

			<div  className="ticker-names">
				<h2> NYSCE </h2>
				<hr />
				
				<ul> 
					{this.nysData.map((symbol ) => {
						
						let tickerSymbl = symbol['ticker'];
						let stockName = symbol['stock_name'];
						return <React.Fragment><li>{tickerSymbl}</li>  <li>{stockName}</li></React.Fragment>;

					})
					}
				</ul> 
			</div>
			</React.Fragment>

		)
	}

}

export default Ticker;