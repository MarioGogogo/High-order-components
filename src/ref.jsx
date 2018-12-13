import React, { Component } from 'react';

function Children(props) {
	//子组件使用父组件传递的inputRef，为input的ref赋值
	console.log(props.inputRef);
	return (
		<div>
			这里输入文字：
			<input type="text" ref={props.inputRef} />
		</div>
	);
}

class Parent extends Component {
	inputElement(el) {
		alert('123');
	}
	render() {
		return <Children inputRef={el => (this.inputElement = el)} />;
	}
}

export default Parent;
