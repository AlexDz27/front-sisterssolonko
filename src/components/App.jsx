import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Dresses from './pages/Dresses';
import Dress from './pages/Dress';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/dresses/:id">
            <Dress />
          </Route>
          <Route path="/dresses">
            <Dresses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;