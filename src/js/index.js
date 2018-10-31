import React from 'react';
import ReactDom from 'react-dom';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import '../sass/main.scss';

import Header from './components/Header';
import  PrimaryForm from './components/Form';

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Header />
            <main>
              <Route path="/" component={PrimaryForm} />
            </main>
          </div>
        </Router>  
      );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('react-container')
);
