import './App.css'
import Navi from './components/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navi />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Sayfa Bulunamadı</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
