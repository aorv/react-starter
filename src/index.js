import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components';
import { Error, Home, About } from './pages';

class App extends React.Component {
  state = {};

  render() {

    return (
      <>
        <Header />
        <div className="p-4 md:p-16">
          <Switch>
            <Route component={About} path="/about" exact />
            <Route component={Home} path="/" exact />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
