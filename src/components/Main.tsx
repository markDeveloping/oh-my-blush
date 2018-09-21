import * as React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';

const Main = () => (
	<main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
      </Switch>
    </main>
    );

export default Main;