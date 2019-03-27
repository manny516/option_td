import React, {Components} from 'react'

class Options extends Component{

	constructor(props){
		super(props);
		this.fetchData = this.fetchData.bind(this);
	}

	fetchData(symbol){
		// The API path for the Options Trade data 

		const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=OPTIONS50&symbol=${symbol}`;
		const options = {

			methods : 'GET',
			headers: {
				"Authorization": "Bearer <inter Acccess token here> "
			}
		}

		fetch(url, options)
		.then(results => results.json())
		.then(results  => console.log(results));
	}

	componentDidMount(){
		this.fetchData("AAPL");
		this.fetchData("WDAY");
		this.fetchData("VTWO");
		this.fetchData("WSBC");

	}

	render(){
		return();
	}


}

export default Options;