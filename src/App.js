import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import DrinkDetail from './components/DrinkDetail/DrinkDetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Route path="/" component={Home} />
        <Route path="drink/:drinkID" component={DrinkDetail} />
        <Route component={PageNotFound} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
