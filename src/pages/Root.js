import React, { Component } from 'react';

import Footer from './components/Footer';
import Loader from './components/Loader';

import './Root.css';

import jslogo from '../assets/img/js.png';

class Root extends Component {
  render() {
    return (
      <section className="root">
        <div className="root-content">
          <div className="column">
            <img src={jslogo} alt={'Javascript Logo'}/>
          </div>
          <div className="column">
            <div className="loading">
              <Loader/>
              <div style={{flex: '0.4'}}>
                <span style={{fontSize: 'xx-large', fontWeight: 'bold'}}>Bolivia JS</span>
                <br/>
                <span style={{fontSize: 'small'}}>Ya estamos pronto!</span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    )
  }  
}

export default Root;
