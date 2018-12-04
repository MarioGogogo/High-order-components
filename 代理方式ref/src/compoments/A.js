import React, { Component } from 'react';

import '../app.css';

function A(WrapperComponent) {
	return class A extends Component {
		refc(instance) {
			//instance 引用组件的实例
			instance.getName && alert(instance.getName());
		}
		render() {
			// 通过props高阶组件删除属性
			const { age, ...otherProps } = this.props;
			return (
				<div className="container">
					<div className="header">
						<span>提示</span>
						<span>X</span>
					</div>
					<div>
						{/* 高阶组件的传入参数 */}
						<WrapperComponent sex={'男'} {...otherProps} ref={this.refc.bind(this)} />
					</div>
				</div>
			);
		}
	};
}

export default A;
