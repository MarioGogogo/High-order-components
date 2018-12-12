import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../staitc/iconfont.css';
import './index.css';
const icons = [
	{
		img: 'icon-home',
		title: '首页',
		link: '/home',
	},
	{
		img: 'icon-qicheqianlian-',
		title: '购物车',
		link: '/cart',
	},
	{
		img: 'icon-fenlei',
		title: '分类',
		link: '/catgorey',
	},
	{
		img: 'icon-shezhi2',
		title: '设置',
		link: '/setting',
	},
];
class Tabber extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
		};
	}
	render() {
		const url = window.location.href;
		console.log(url);
		return (
			<div className="tabber">
				<div className="tabber-content">
					{icons.map((v, i) => (
						<Link to={v.link} key={i} className={'tabber-item ' + (url.indexOf(v.link) > -1 ? 'active' : '')}>
							<div className={'iconfont ' + v.img} />
							<div className>{v.title}</div>
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default Tabber;
