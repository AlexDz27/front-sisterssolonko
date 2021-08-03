import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import Dresses from './pages/Dresses';
import Dress from './pages/Dress';
import { load } from '../utils/load';
import { API_URL } from '../config';

const App = () => {
  const [, setDresses] = useState([]);

  // Load dresses
  useEffect(() => {
    (async () => {
      window.dresses = await load(`${API_URL}/dresses`);
      setDresses(window.dresses); // force rerender
    })();
  }, []);

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