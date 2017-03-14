/**
 * Created by LinChuQiang.
 */
import React from 'react';
import autobind from 'autobind-decorator';
@autobind
	/*一师傅介绍*/
class Master extends React.Component {
	constructor() {
		super();
		this.state = {
			//增加关注度
			addlove : false
		}
	}
	
	/*H3的点击切换特效*/
	aonMouseDown(e) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
		var key = this.props.index;
		this.props.addToFollow( key );
	}
	
	aonMouseUp(e) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
	}
	
	
	onButtonClick(e) {
		this.props.stopBubble(e);
		var key = this.props.index;
		this.props.addToFollow( key );
		this.refs.followBtn.disabled=true;
	}
	
	render() {
		var details     = this.props.details;
		if(details){
			var isAvailable = (details.follow === 'follow' ? true : false);
			var buttonText  = (isAvailable ? '已关注' : '未关注');
			return (
				
				<li>
					<div className = "ih-item circle effect13 from_left_and_right" onClick = {this.props.stopBubble}>
						<a href = "javascript:;" onMouseDown = {this.aonMouseDown} onMouseUp = {this.aonMouseUp}>
							<div className = "img">
								<img src = {details.img} alt = {details.img} />
							</div>
							<div className = "info">
								<div className = "info-back">
									<h3 className = {this.state.addlove ? "love" : " "} ref = "myh3">增加关注度</h3>
									<p>以获取他/她的更多资料</p>
								</div>
							</div>
						</a>
					</div>
					<figure onClick = {this.props.stopBubble}>
						<figcaption>
							<h3>{details.name}</h3>
							<span>{details.hot}°</span>
						</figcaption>
						<p>{details.desc}</p>
					</figure>
					<button className = "follow" onClick = {this.onButtonClick} disabled = {isAvailable} ref="followBtn">{buttonText}</button>
				</li>
			)
		}else{
			return false;
		}
	}
}

/*var Master = React.createClass( {
	getInitialState : function() {
		return {
			addlove : false
		}
	},
	/!*隐藏元素h3添加不了事件*!/
	h3onClick       : function( e ) {
		console.log( 'soemthing' );
		this.setState( { addlove : !this.state.addlove } );
	},
	aonMouseDown    : function( e ) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
	},
	aonMouseUp      : function( e ) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
	},
	onButtonClick   : function() {
		console.log( "准备添加到关注列表：",this.props.index );
		var key = this.props.index;
		this.props.addToFollow( key );
	},
	stopBubble      : function( e ) {
		if( e && e.stopPropagation ) {//非IE浏览器
			e.stopPropagation();
		} else {//IE浏览器
			window.event.cancelBubble = true;
		}
	},
	render          : function() {
		var details     = this.props.details;
		var isAvailable = (details.follow === 'follow' ? true : false);
		var buttonText  = (isAvailable ? '已关注' : '未关注');
		return (
			<li>
				<div className = "ih-item circle effect13 from_left_and_right" onClick = {this.stopBubble}>
					<a href = "javascript:;" onMouseDown = {this.aonMouseDown} onMouseUp = {this.aonMouseUp}>
						<div className = "img">
							<img src = {details.img} alt = {details.img} />
						</div>
						<div className = "info">
							<div className = "info-back">
								<h3 className = {this.state.addlove ? "love" : " "} ref = "myh3">增加关注度</h3>
								<p>以获取他/她的更多资料</p>
							</div>
						</div>
					</a>
				</div>
				<figure onClick = {this.stopBubble}>
					<figcaption>
						<h3>{details.name}</h3>
						<span>{details.hot}°</span>
					</figcaption>
					<p>{details.desc}</p>
				</figure>
				<button className = "follow" onClick = {this.onButtonClick} disabled = {isAvailable}>{buttonText}</button>
			</li>
		)
	}
} );*/
export default Master;