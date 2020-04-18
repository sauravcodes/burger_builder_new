import React from 'react';
import classes from './App.module.css';
import {Layout} from './components'
import {BurgerBuilder} from './containers'
import CardImage from './components/CardImage'

function App() {
  return (
    <div className={classes.App}>
      <Layout />
      <BurgerBuilder />
      {/* <CardImage /> */}
    </div>
  );
}

export default App;
