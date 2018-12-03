import React, { Component } from 'react';

import A from './compoments/A';
import B from './compoments/B';
import C from './compoments/C';

class App extends Component {
	render() {
		return (
			<div className="App">
				<A />
				<B />
				<C />
			</div>
		);
	}
}

export default App;
