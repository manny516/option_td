import React, {Component} from 'react';

class Header extends Component{

	constructor(props){
		super(props);
		this.fetchData = this.fetchData.bind(this);

	}

	fetchData(symbol){

		const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=OPTIONS50&symbol=${symbol}`;
		const options = {

			methods : 'GET',
			headers: {
				"Authorization": "Bearer TSuP8fuyiZIMaH8knim1qdm4S+sQEq8FmuiauBVU89fMxo0UihjxhjouD/ebSUQCUcKwwUNXBKBO+AQR/hJnuAECPS+OhtQGaTZfXKpwkJJyR1FSeBs7FqGmLZ9pbZ/69MXb6tPAgNV7S9SPrWMSRGuEMcakZaHTjDgyOTIK8aBhDuaSc/m15N2ycXQIWnQW2+Zq3xbK6kmx7v6cLY1zY0k10tMNP9GxKYeYlYV+/BnfRdEQyzpKH2DDbf7qK5eTpKgZsSDBz9+fAgc4ZmS9pLU3I7rAU0/TgcTDAMB2RB0YyJ/PA5aqttBE9KCd9l02UBTCq0MF0lMeiupZgkimi5Kw2u5BohIPu/C4VTO/n8h+ynwwSJdr0B+Gmr1PY3UI9MMH7qXA5lg3JDAPLKwjTTdwJGI2aiAKV41TUOSD6iqGsRoXalUOPKk5oujdvbuJ0+EpW85g3w4q9P70pYaO5k7acr2kwQ64hmC/YoRdeW8iNkdplW6ER4XPLUo100MQuG4LYrgoVi/JHHvln2Hz0bDfZiTGNEKQ/7pJ50R9c8Me4eJsqzd45nYNTUIP2laY7UkuYb3bqY6j3vnBpL0Ceh9YvCC9UNJJJZMur70bEV9h0Bxho26dufZdJheoAR8I6Uv6GfPam5rAC59L8R2m+qq3zAmi9sOyKl8HJ+IYVnNi3nbsS6kgZwckYW1rG0jFMb9jmoFpEqsV7niRQQIFoAlEVBInOrhMaC58XftYFNToPNErghY9KA2m8LkSXTy3DWMq2eo7+pLKaTUwTZVlV0okRX1lJ73vBG/jSMSPVWAEMP6DcUXaoD1p8aVjOctpGspdpwQWNf0kov1XdkKzbNgNwlAPSb2zqojyAUaD7yvfAFJEmF9vVD2Qd80l/Zzq57MXjC40ObxOdo7SejK6WAHMrQDNdE50AeC7qujTZ74SAzZItqlvD9k52DkhUzfqJLAengty7nif/J+9gbBUc9wX3Leg8bpKqXOWAFlCsIMh0S7CAb8n9/phRHLMMjYrSPdCzmZYxmU=212FD3x19z9sWBHDJACbC00B75E"
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

		return(
			<h1> Options Trade App</h1>
		);

	}


}

export default Header; 



