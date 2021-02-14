import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import CoinPrice from './components/Pages/CoinPrice/CoinPrice'
import CoinPlan from './components/Pages/CoinPlan/CoinPlan'
import { createContext } from 'react';


export const coinsApiContext = createContext(null);


function App() {

  const coinsApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  return (
    <coinsApiContext.Provider value={coinsApi}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/coinprice">
            <CoinPrice />
          </Route>
          <Route path="/coinplan">
            <CoinPlan />
          </Route>
        </Switch>
      </Router>
    </coinsApiContext.Provider>
  );
}

export default App;
