import React from 'react';
import classes from './App.module.css';
import {Layout} from './components'
import {BurgerBuilder} from './containers'
import Checkout from './containers/Checkout/Checkout'
import {Route} from 'react-router-dom'
import Orders from './containers/Checkout/Orders/Orders'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/' exact component={BurgerBuilder} />
      </Layout>
    </div>
  );
}

export default App;
