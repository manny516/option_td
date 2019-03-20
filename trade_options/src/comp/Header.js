import React, {Component} from 'react';

class Header extends Component{

	constructor(props){
		super(props);
		this.fetchData = this.fetchData.bind(this);

	}

	fetchData(){
		const url = "https://api.tdameritrade.com/v1/marketdata/chains?apikey=OPTIONS50&symbol=MSFT&contractType=ALL&strikeCount=25&includeQuotes=TRUE&strategy=SINGLE";
		const options = {

			methods : 'GET',
			headers: {
				'Authorization': 'Bearer QgTSkzwVRWphJHKp3l13BDJt+WpHzQkLk1GWN+B4nD8lgjOFs2qVXFJ0so1KewK2W+hDRuN6geQ3AomPA7UfP7jolF8VwMnNvA7f6Nr0gBPSC8kPLTFZMqUHnHv3hI6mJaUt7hSCmKChBHbel60pHI5RZOadtSNiGaW8xVZ6yYX65JzNEMsW1A290M1LPQi5m9gnlAGSOOuiKNkw82RoHa9t93UQAcYsdkr92ttylM6tYcfBUBBYneaW5YfJdKp/QZQWbCgZWsBjBjPPwCbgKaaxbzttjenqtStzMs2qtIWpOE4bqjiPnsl9PeSG3uVWXMukaK0rXqjVPuBNhQCNkcp7B8CDo/njWuOa+XFybI5a9iY3bOi8cxTeaAMPJBb3yHryUdtd5y2llYaaB693RoZdNw03lpmRKQ1iJlJpr61a/BfLCOBT9A10ZTRCS8vMP3l6XwgND6llJgQNb/aqVwnzvooB/StiGbxy+yoMb2cG5tNRILBPlL6lo7Z100MQuG4LYrgoVi/JHHvlwAtzfoFdWawyN/gRpfK6SuCIsYZd9Pf+3zvpxyGh25utqvvT2oEsL6mMgSorwe+kkNu/mY9INz+rct/HHCqhOZCzOOB0k3EgtgJiU11JC7wwAhfTK0FTxC//njvaB8C05c2K6A0vtqoc0c+bXQ1rRTWrfVFVTNXAN4cv60ee69OpUAEAzSMs/wmYzF9hJby8CmShVbNDovUQxnr8Pb9pucyWDt5VoqbBt1OAoLQi2uFuoZL2CNPaHiQByTLzHGL6KlBfx+7GYL4WTtiV6b0W3NhZ3YnJekYtGJrOd+DFOROpCqY3X/9Vr+6WF+g3/w0eDedksE25q+T8rEU3hHPf86eHpZajGz5kjJMbn8Eahxjw7H0D2cfsRG1KPD9Phv1WT+aK4iZn5y2rzI5Ov0rbSUnK8OF3+ONRfoUnbSueMuupSLv6nlqGBmdYsS6et3vj8nN2IKj4nsZkVQ5gZk6bKE10NEsWsp5bnN0JTikyF0mfFNVEucpy1QpNbog=212FD3x19z9sWBHDJACbC00B75E '
			}
		}

		

		fetch(url, options)
		.then(results => results.json())
		.then(results  => console.log(results));
	}

	componentDidMount(){
		this.fetchData();
	}







	render(){

		return(
			<h1> Options Trade App</h1>
		);

	}


}

export default Header; 



