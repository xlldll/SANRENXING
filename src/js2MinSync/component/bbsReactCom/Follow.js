/**
 * Created by LinChuQiang.
 */

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import autobind from 'autobind-decorator';

@autobind
/*二关注列表*/
class Follow extends React.Component {
	constructor() {
		super();
		this.state = {
			grow       : false,//放大
		}
	}
	
	renderFollow(key) {
		//取得对应的师傅信息
		var master = this.props.masters[key];
		//取得对应的关注度值
		var hotNum = this.props.follownums[key];
		
		var removeButton = <button onClick={this.props.removeFollow.bind(null,key)}>&times;</button>
		
		if(!master) {
			return <li key={key}>抱歉，师傅信息已下架！{removeButton}</li>
		}
		
		return (
			<li key = {key}>
				<CSSTransitionGroup component = "span" transitionName = "hotNum" transitionLeaveTimeout = {100} transitionEnterTimeout = {250}>
					<span key = {hotNum}>{hotNum} </span>
				</CSSTransitionGroup>
				<span>{master.name}</span>
				<span>{removeButton}</span>
				<span>{hotNum * parseInt( master.hot ) || 0}°</span>
			</li>
		)
	}
	
	
	panelClickEvent() {
		this.setState( { grow : !this.state.grow } );
	}
	
	
	render() {
		//获得关注数的序号数组
		var followKeys = Object.keys(this.props.follownums);
		
		var total = followKeys.reduce((previousValue , currentValue)=> {
			//取得对应的师傅信息
			var master = this.props.masters[currentValue];
			//取得对应的关注度值
			var hotNum = this.props.follownums[currentValue];
			//是否存在师傅并且师傅是否未关注
			var isFollow = master && master.follow === 'unfollow';
			
			if(isFollow) {
				return previousValue + (hotNum * parseInt(master.hot) || 0);
			}
			return previousValue;
		}, 0);
		
		return (
			<CSSTransitionGroup
				component="ul"
				transitionName="follow"
				transitionEnterTimeout={250}
				transitionLeaveTimeout={250}
				onClick = {this.props.stopBubble}
			>
				{followKeys.map(this.renderFollow)}
				<li className="total">
					<strong>总共：</strong>
					<span>{total}<strong>°人气</strong></span>
				</li>
			</CSSTransitionGroup>
		)
	}
	
}

Follow.propTypes = {
	masters : React.PropTypes.object.isRequired,
	follownums : React.PropTypes.object.isRequired,
	removeFollow : React.PropTypes.func.isRequired
}

/*var Follow = React.createClass( {
	//渲染关注列表
	renderFollow : function(key) {
		
		//取得对应的师傅信息
		var master = this.props.masters[key];
		//取得对应的关注度值
		var hotNum = this.props.follownums[key];
		
		var removeButton = <button onClick={this.props.removeFollow.bind(null,key)}>&times;</button>
		
		if(!master) {
			return <li key={key}>抱歉，师傅信息已下架！{removeButton}</li>
		}
		
		return (
			<li key={key}>
				<span>
					<CSSTransitionGroup component="span" transitionName="hotNum" transitionLeaveTimeout={250} transitionEnterTimeout={250}>
						<span key={hotNum}>{hotNum} </span>
					</CSSTransitionGroup>
				</span>
				<span>{master.name}</span>
				<span>{removeButton}</span>
				<span>{hotNum * parseInt(master.hot) || 0}°</span>
			</li>
		)
	},
	
	
	render : function() {
		
		//获得关注数的序号数组
		var followKeys = Object.keys(this.props.follownums);
		
		var total = followKeys.reduce((previousValue , currentValue)=> {
			//取得对应的师傅信息
			var master = this.props.masters[currentValue];
			//取得对应的关注度值
			var hotNum = this.props.follownums[currentValue];
			//是否存在师傅并且师傅是否未关注
			var isFollow = master && master.follow === 'unfollow';
			
			if(isFollow) {
				return previousValue + (hotNum * parseInt(master.hot) || 0);
			}
			return previousValue;
		}, 0);
		
		return (
			<div className = "panel collect">
				<header>
					<h1>关注列表</h1>
					<h3>2017-3-10</h3>
				</header>
				<CSSTransitionGroup
					component="ul"
					transitionName="follow"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{followKeys.map(this.renderFollow)}
					<li className="total">
						<strong>总共：</strong>
						<span>{total}<strong>°人气</strong></span>
					</li>
				</CSSTransitionGroup>
			</div>
		)
	},
	propTypes : {
		masters : React.PropTypes.object.isRequired,
		follownums : React.PropTypes.object.isRequired,
		removeFollow : React.PropTypes.func.isRequired
	}
} );*/

export default Follow;