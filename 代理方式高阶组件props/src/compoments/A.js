import React, { Component } from 'react';

import '../app.css';

function A(WrapperComponent) {
	return class A extends Component {
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
						<WrapperComponent sex={'男'} {...otherProps} />
					</div>
				</div>
			);
		}
	};
}

export default A;
