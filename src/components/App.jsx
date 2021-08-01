import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/testing">
            <h1>Testing?</h1>
          </Route>
          <Route path="/">
            <Home />
            <Link to="/testing">Testing</Link>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;