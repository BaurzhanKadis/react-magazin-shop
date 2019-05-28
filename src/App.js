import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">One</div>
          <div className="col-6">
            <span>
              <i className='fas fa-home'></i>
            </span>
          </div>
        </div>
        Hello world!!!
      </div>
    );
  } 
}
