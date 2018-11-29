/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import React from 'react'
// import { Header, Footer } from 'watson-react-components/dist/components'
import { Grid, Navbar, Nav, Breadcrumb, Image } from 'react-bootstrap'

import { Route, Switch } from 'react-router-dom'

import { ExampleList, Example, AllExample } from './components/examples'
import { CurrentSubscriptions } from './components/subscription'
import logo from './logo.png'
import './App.css'
// import 'watson-react-components/dist/css/watson-react-components.min.css'

// Primary homepage
const Home = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/#" style={{height: '95px'}}><Image src={logo} style={{height: '100%'}}/></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <Breadcrumb>
          <Breadcrumb.Item active>Social Discovey</Breadcrumb.Item>
        </Breadcrumb>
      </Nav>
    </Navbar>;
    <Grid>
      <ExampleList />
    </Grid>
  </div>
)

// const getInitialData () => {
//   console.log("Helo");
// };

    // <Route path='/track'render={() => (
    //   isLoggedIn() ? (
    //     <Redirect to="/front"/>
    //   ) : (
    //     <Home />
    //   )
    // )}/>
    // <Route path='/track/:tag' component={Example} />
const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/track' component={Example} />
    <Route path='/trackit/:tag' component={AllExample} />
    <Route path='/subscription' component={CurrentSubscriptions} />
  </Switch>
)

export default App