import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './compoments/home';
import Cart from './compoments/cart';
import Catgorey from './compoments/catgorey';
import Setting from './compoments/setting';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/home" component={Home} />
			<Route path="/cart" component={Cart} />
			<Route path="/catgorey" component={Catgorey} />
			<Route path="/setting" component={Setting} />
		</Switch>
	</BrowserRouter>
);
