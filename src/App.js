import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './layouts/Home';
import { FAQ } from './layouts/FAQ';
import { Explore } from './layouts/Explore';
import { Marketplace } from './layouts/Marketplace';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Container>
            <Row>
              <Col sm={3}>
                <SideBar />
              </Col>
              <Col sm={9}>
                <Layout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/marketplace" component={Marketplace} />
                  </Switch>
                </Layout>
              </Col>
            </Row>
          </Container>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;