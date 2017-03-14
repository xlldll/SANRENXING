/**
 * Created by LinChuQiang.
 */
import React from 'react';
import {History} from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';
@autobind
	
	/*第一页：师傅类别*/
class MasterPicker extends React.Component {
	goToApp( event ) {
		event.preventDefault();
		//从输入框中得到师傅类别
		var masterId = this.refs.masterId.value;
		/*
		 pushState(state, pathname, query)
		 跳转至一个新的 URL。
		 state - location 的 state。
		 pathname - 没有 query 完整的 URL。
		 query - 通过路由字符串化的一个对象。*/
		this.props.history.pushState( null,`/master/${masterId}`);
	}
	
	render() {
		return (
			<form className = "kinds" onSubmit = {this.goToApp}>
				<h2>选择一个师傅类别</h2>
				<input type = "text" defaultValue = {h.getFunName()} required ref = "masterId" />
				<input type = "submit" />
			</form>
		)
	}
}
reactMixin.onClass( MasterPicker,History );

/*var MasterPicker = React.createClass( {
 mixins  : [ History ],
 //跳转到主页
 goToApp : function( event ) {
 event.preventDefault();
 //从输入框中得到师傅类别
 var masterId = this.refs.masterId.value;
 this.history.pushState( null,'/src/html/bbsreact.html/master/' + masterId );
 },
 render  : function() {
 return (
 <form className = "kinds" onSubmit = {this.goToApp}>
 <h2>选择一个师傅类别</h2>
 <input type = "text" defaultValue = {h.getFunName()} required ref = "masterId" />
 <input type = "submit" />
 </form>
 );
 }
 } );*/
export default MasterPicker;