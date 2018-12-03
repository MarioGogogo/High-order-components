import React, { Component } from 'react';
import A from './A.js';

class B extends Component {
	render() {
		return (
			<div>
				宁的名字是：阿猫阿狗🐩
				<br />
				<img src={require('../images/B.png')} style={{ width: 200, height: 200 }} alt="" />
			</div>
		);
	}
}

export default A(B);
