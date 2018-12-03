import React, { Component } from 'react';

import '../app.css';

function A(WrapperComponent) {
	return class A extends Component {
		render() {
			return (
				<div className="container">
					<div className="header">
						<span>提示</span>
						<span>X</span>
					</div>
					<div>
						<WrapperComponent />
					</div>
				</div>
			);
		}
	};
}

export default A;
