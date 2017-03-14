/**
 * Created by LinChuQiang.
 */
import React from 'react';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';
import Header from './Header';
import Master from './Master';
import Follow from './Follow';
import Edit from './Edit';
import autobind from 'autobind-decorator';
@autobind
	
/*第二页：主页*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			masters    : {},//师傅信息
			follownums : {},//关注数
			postGrow   : false,//放大
			followGrow : false,//放大
			editGrow   : false//放大
		}
	}
	
	componentDidMount() {
		var localStorageRef = localStorage.getItem( 'follow-' + this.props.params.masterId );
		if( localStorageRef ) {
			// update our component state to reflect what is in localStorage
			this.setState( {
				follownums : JSON.parse( localStorageRef )
			} );
		}
	}
	
	componentWillUpdate( nextProps,nextState ) {
		localStorage.setItem( 'follow-' + this.props.params.masterId,JSON.stringify( nextState.follownums ) );
	}
	
	stopBubble( e ) {
		console.log('stopBubble');
		if( e && e.stopPropagation ) {//非IE浏览器
			e.stopPropagation();
		} else {//IE浏览器
			window.event.cancelBubble = true;
		}
	}
	
	// 1.编辑列表
	addMaster( master ) {
		var timestamp                               = (new Date()).getTime();
		// update the state object
		this.state.masters[ 'master-' + timestamp ] = master;
		// set the state
		this.setState( { masters : this.state.masters } );
	}
	
	removeMaster( key ) {
		if( confirm( "确定删除此条信息吗？！" ) ) {
			this.state.masters[ key ] = null;
			this.setState( {
				masters : this.state.masters
			} );
		}
	}
	
	loadSamples( e ) {
		this.stopBubble( e );
		this.setState( {
			masters : require( '../sample-masters' )
		} );
	}
	
	// 2.显示师傅介绍
	renderMaster( key ) {
		return (
			<Master key = {key} index = {key} details = {this.state.masters[ key ]} addToFollow = {this.addToFollow} stopBubble = {this.stopBubble} />
		);
	}
	
	//3.关注列表
	addToFollow( key ) {
		this.state.follownums[ key ] = this.state.follownums[ key ] + 1 || 1;
		this.setState( { follownums : this.state.follownums } );
	}
	
	removeFollow( key ) {
		if( confirm( "确定移除此条关注吗？！" ) ) {
			delete this.state.follownums[ key ];
			this.setState( {
				follownums : this.state.follownums
			} );
		}
	}
	
	//点击放大面板
	postGrowClick() {
		this.setState( { postGrow : !this.state.postGrow } );
		this.setState( { followGrow : false } );
		this.setState( { editGrow : false } );
	}
	
	followGrowClick() {
		this.setState( { postGrow : false } );
		this.setState( { followGrow : !this.state.followGrow } );
		this.setState( { editGrow : false } );
	}
	
	editGrow() {
		this.setState( { postGrow : false } );
		this.setState( { followGrow : false } );
		this.setState( { editGrow : !this.state.editGrow } );
	}
	
	// 渲染
	render() {
		return (
			<div className = "panels">
				<div className = {this.state.postGrow ? "panel post grow" : "panel post"} onClick = {this.postGrowClick}>
					<Header title = "招贤纳士" />
					<ul ref = "myul">
						{Object.keys( this.state.masters ).map( this.renderMaster )}
					</ul>
				</div>
				
				<div className = {this.state.followGrow ? "panel collect grow" : "panel collect"} onClick = {this.followGrowClick}>
					<Header title = "关注列表" />
					<Follow masters = {this.state.masters} follownums = {this.state.follownums} removeFollow = {this.removeFollow} stopBubble = {this.stopBubble} />
				</div>
				
				<div className = {this.state.editGrow ? "panel edit grow" : "panel edit"} onClick = {this.editGrow}>
					<Header title = "编辑新增" />
					<Edit addMaster = {this.addMaster} removeMaster = {this.removeMaster} loadSamples = {this.loadSamples} masters = {this.state.masters} linkState = {this.linkState.bind( this )} {...this.props} />
				</div>
			
			</div>
		)
	}
}
reactMixin.onClass( App,Catalyst.LinkedStateMixin );
/*var App = React.createClass( {
 mixins              : [ Catalyst.LinkedStateMixin ],
 getInitialState     : function() {
 return {
 masters    : {},//师傅信息
 follownums : {},//关注数
 grow       : false,//放大
 }
 },
 //componentDidMount() is invoked immediately after a component is mounted.
 componentDidMount   : function() {
 var localStorageRef = localStorage.getItem( 'follow-' + this.props.params.masterId );
 if( localStorageRef ) {
 // update our component state to reflect what is in localStorage
 this.setState( {
 follownums : JSON.parse( localStorageRef )
 } );
 }
 },
 //componentWillUpdate() is invoked immediately before rendering when new props or state are being received.
 componentWillUpdate : function( nextProps,nextState ) {
 localStorage.setItem( 'follow-' + this.props.params.masterId,JSON.stringify( nextState.follownums ) );
 },
 // 1.编辑列表
 addMaster           : function( master ) {
 var timestamp                               = (new Date()).getTime();
 // update the state object
 this.state.masters[ 'master-' + timestamp ] = master;
 // set the state
 this.setState( { masters : this.state.masters } );
 },
 removeMaster        : function( key ) {
 if( confirm( "确定删除此条信息吗？！" ) ) {
 this.state.masters[ key ] = null;
 this.setState( {
 masters : this.state.masters
 } );
 }
 },
 loadSamples         : function() {
 this.setState( {
 masters : require( '../sample-masters' )
 } );
 },
 // 2.显示师傅介绍
 renderMaster        : function( key ) {
 return (
 <Master key = {key} index = {key} details = {this.state.masters[ key ]} addToFollow = {this.addToFollow} />
 );
 },
 panelClickEvent     : function() {
 this.setState( { grow : !this.state.grow } );
 },
 //3.关注列表
 addToFollow         : function( key ) {
 this.state.follownums[ key ] = this.state.follownums[ key ] + 1 || 1;
 this.setState( { follownums : this.state.follownums } );
 },
 removeFollow        : function( key ) {
 delete this.state.follownums[ key ];
 this.setState( {
 follownums : this.state.follownums
 } );
 },
 // 渲染
 render              : function() {
 return (
 <div className = "panels">
 <div className = {this.state.grow ? "panel post grow" : "panel post"} onClick = {this.panelClickEvent} ref = "mypanel">
 <Header title = "师傅介绍" />
 <ul ref = "myul">
 {Object.keys( this.state.masters ).map( this.renderMaster )}
 </ul>
 </div>
 <Follow masters = {this.state.masters} follownums = {this.state.follownums} removeFollow = {this.removeFollow} />
 <Edit addMaster = {this.addMaster} removeMaster = {this.removeMaster} loadSamples = {this.loadSamples} masters = {this.state.masters} linkState = {this.linkState} />
 </div>
 )
 }
 } );*/

export default App;