import * as React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Testimonials from './Testimonials';

const Main = () => (
	<main>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/testimonials' component={Testimonials} />
      </Switch>
    </main>
    );

export default Main;