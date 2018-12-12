import React, { Component } from 'react';
import d from './D';

class E extends Component {
	componentWillMount = () => {
		alert('这是一个生命周期函数');
	};
	render() {
		return <div>我是一个Div元素</div>;
	}
}

export default d(E);
