import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './layouts/Home';
import { FAQ } from './layouts/FAQ';
import { Explore } from './layouts/Explore';
import { Marketplace } from './layouts/Marketplace';
import { Layout } from './components/Layout';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Container>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/faq" component={FAQ} />
                <Route path="/explore" component={Explore} />
                <Route path="/marketplace" component={Marketplace} />
              </Switch>
            </Layout>
          </Container>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;