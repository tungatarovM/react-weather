import React from 'react';
import ReactDom from 'react-dom';
import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

// Styles
import '../sass/main.scss';

// COMPONENTS
import Header from './components/Header';
import PrimaryForm from './components/Form';
import Forecast from './components/Forecast';
import Details from './components/Details';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">  
          <Route render={(props) => {
            return (<Header 
              onClick={(city) => {
                props.history.push({
                  pathname: 'forecast',
                  search: '?city=' + city,
                });
              }} 
            />)
          }} />

          <main>
            <Route path="/details/:id" component={Details} />
            <Route path="/forecast"  component={Forecast} />
            <Route exact path="/" render={function(props) {
              return (<PrimaryForm  
                onClick={(city) => {
                  props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + city
                  })
                }}
              />)
            }} />
          </main>
        </div>
      </Router>  
    );
  }
}

ReactDom.render(
    <App />,
    document.getElementById('wrap')
);
