import React, { Component } from 'react';

import '../app.css';

function A(WrapperComponent) {
	return class A extends Component {
		constructor(props) {
			super(props);
			this.state = {
				value: '',
			};
		}
		changeInput(e) {
			this.setState({
				value: e.target.value,
			});
		}
		// refc(instance) {
		// 	//instance 引用组件的实例  可以包裹任意组件的所有方法
		// 	instance.getName && alert(instance.getName());
		// }

		render() {
			// 通过props高阶组件删除属性
			const { age, ...otherProps } = this.props;
			const newProps = {
				value: this.state.value,
				onInput: this.changeInput.bind(this),
			};
			return (
				<div className="container">
					<div className="header">
						<span>提示</span>
						<span>X</span>
					</div>
					<div>
						{/* 高阶组件的传入参数 */}
						<WrapperComponent sex={'男'} {...otherProps} {...newProps} />
					</div>
				</div>
			);
		}
	};
}

export default A;
