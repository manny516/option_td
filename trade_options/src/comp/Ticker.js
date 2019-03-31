import React, {Component} from 'react'
//import TickerData from '../json/ticker_data.json'


class Ticker extends Component {


	render(){

		return(


		<React.Fragment>

			<div className="ticker-names"> 
				
				<h2> NASDAQ </h2>
				<hr />
				
				<ul> 

					{this.props.NASDAQ.map((symbol ) => {
					
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

			<div  className="ticker-names">
				<h2> NYSCE </h2>
				<hr />
				
				<ul> 
					{this.props.NYSCE.map((symbol ) => {

						let tickerSymbl = symbol['ticker'];
						let stockName = symbol['stock_name'];
						return <React.Fragment>
								<li>
									<span>{tickerSymbl}</span>
									<span>{stockName}</span>
								</li>
							   </React.Fragment>;})

					}
				</ul> 
			</div>


			<div className="ticker-names">

				<h2> AMEX </h2>
				<hr />
				
				<ul> 
					{this.props.AMEX.map((symbol ) => {
						let tickerSymbl = symbol['ticker'];
						let stockName = symbol['stock_name'];
						return <React.Fragment>
								<li>
									<span>{tickerSymbl} </span>
									<span>{stockName} </span>
								</li> 
							   </React.Fragment>;
					})
					}

				</ul> 

			</div>

			</React.Fragment>

		)
	}

}

export default Ticker;