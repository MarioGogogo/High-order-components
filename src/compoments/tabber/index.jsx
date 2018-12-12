import React, { Component } from 'react';
import '../../staitc/iconfont.css';
import './index.css';
const icons = [
	{
		img: 'icon-home',
		title: '首页',
	},
	{
		img: 'icon-qicheqianlian-',
		title: '购物车',
	},
	{
		img: 'icon-fenlei',
		title: '分类',
	},
	{
		img: 'icon-shezhi2',
		title: '设置',
	},
];
class Tabber extends Component {
	render() {
		return (
			<div className="tabber">
				<div className="tabber-content">
					{icons.map((v, i) => (
						<div className="tabber-item">
							<div className={'iconfont ' + v.img} />
							<div className>{v.title}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Tabber;
