import React, { Component } from 'react';
import A from './A.js';

class B extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: '',
	// 	};
	// }
	// changeInput(e) {
	// 	this.setState({
	// 		value: e.target.value,
	// 	});
	// }
	render() {
		return (
			<div>
				{/* 
			   普通的组件是这样的
			非受控组件转成受控组件 
				<input type="text" value={this.state.value} onInput={this.changeInput.bind(this)} />
			*/}
				<input type="text" {...this.props} />
				<br />
				宁的名字是：{this.props.name}
				<br />
				年龄： {this.props.age}
				<br />
				性别： {this.props.sex}
				<br />
				<img src={require('../images/B.png')} style={{ width: 200, height: 200 }} alt="" />
			</div>
		);
	}
}

export default A(B);
