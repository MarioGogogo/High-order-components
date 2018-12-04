import React from 'react';

const modifyPropsHOC = WrappedComponent =>
	class newComponent extends WrappedComponent {
		// 高阶组件的显示名称
		static displayName = `NewComponent(${getDidsplayName(WrappedComponent)})`;
		// 这有一个问题会修改所有被HOC组件包裹的组件的生命周期函数
		componentWillMount = () => {
			alert('这是一个修改后的生命周期函数');
		};

		render() {
			const element = super.render();
			const newStyle = {
				color: element.type === 'div' ? 'red' : 'green',
			};
			console.log(element.type);

			const newProps = { ...this.props, style: newStyle };
			return React.cloneElement(element, newProps, element.props.children);
		}
	};

// 高阶组件的显示名称
function getDidsplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'component';
}

export default modifyPropsHOC;

// 优先考虑组合 再考虑继承  优先考虑代理组件
