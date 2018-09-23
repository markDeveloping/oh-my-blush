import * as React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';

const Main = () => (
	<main>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
    );

export default Main;