import React, { Component } from 'react';
import A from './A.js';
class C extends Component {
	getName() {
		return '我是c组件';
	}
	render() {
		return (
			<div>
				{/* 状态提取的好处 如果在N个组件同时需要这个组件都要实现一遍为何不提取出来只要实现一遍 */}
				<input type="text" {...this.props} />
				<img src={require('../images/C.png')} style={{ width: 200, height: 200 }} alt="" />
			</div>
		);
	}
}

export default A(C);
