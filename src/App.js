import React from 'react';
//routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redirect
import SecuredRoute from './components/auth/securedRoute';
//components
import Navbar from './components/nav/navbar';
import BottomNav from './components/nav/bottomnav';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/services';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/Blogposts';
import Contact from './components/contact/contact';
import NotFound from './components/routing/NotFound';


import Dashboard from './components/admin/dashboard';
import Callback from './components/admin/callback';

//redux
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store} >
    <Router>
      <div className="App" style={{ fontFamily: 'Cinzel,Serif' }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />


     
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound}/>

        </Switch>
        <BottomNav/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
