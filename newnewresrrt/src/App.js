import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      test:[],
      

    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/matches')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ test: response.data })
      
      });
    }

  render(){
    // render components, Router used to render components that are selected. Menu will always show on the top 
    //Charging history and Charge functionality hidden by protected router and only accessible after successful login/authorization
    //Passing on various varibles and functions to the components to use them as props
    //Data for Google maps & Charger list are filtered before to serve as a search function when typing in the search field
    return(
    <div className="App">
      test
      {this.state.test.map((matches, index) => <div>id: {matches.id}
                                                    name: {matches.name}
      </div> 
                                            
      )}

    </div>
  );
}
}

export default App;
