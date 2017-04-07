/**
 * Created by LinChuQiang.
 */
import React from 'react';
import AddMasterForm from './AddMasterForm';

import autobind from 'autobind-decorator';
@autobind
/*三编辑新增*/
class Edit extends React.Component {
	constructor() {
		super();
	}
	
	
	stopBubble( e ) {
		console.log('stopBubble');
		if( e && e.stopPropagation ) {//非IE浏览器
			e.stopPropagation();
		} else {//IE浏览器
			window.event.cancelBubble = true;
		}
	}
	
	renderEditForm(key) {
		//读取组件内数据状态
		var linkState = this.props.linkState;
		
		return (
			<div key={key} className="data" onClick={this.stopBubble}>
				<input type="text" valueLink={linkState('masters.'+ key +'.name')}/>
				<input type="text" valueLink={linkState('masters.'+ key +'.hot')}/>
				<select valueLink={linkState('masters.' + key + '.follow')}>
					<option value="unfollow">未关注</option>
					<option value="follow">已关注</option>
				</select>
				<textarea valueLink={linkState('masters.' + key + '.desc')}></textarea>
				<input type="text" valueLink={linkState('masters.'+ key +'.img')}/>
				<button onClick={this.props.removeMaster.bind(null, key)} className="editRemove">移除信息</button>
			</div>
		)
	}
	
	render() {
		return (
			<div>
				{Object.keys(this.props.masters).map(this.renderEditForm)}
				<AddMasterForm {...this.props}/>
				<span onClick = {this.props.loadSamples} className="spin circle">加载</span>
			</div>
		)
	}
}

Edit.propTypes = {
	addMaster : React.PropTypes.func.isRequired,
	removeMaster : React.PropTypes.func.isRequired,
	masters : React.PropTypes.object.isRequired,
	linkState : React.PropTypes.func.isRequired,
	loadSamples : React.PropTypes.func.isRequired
}

/*var Edit          = React.createClass( {
	renderEditForm : function(key) {
		//读取组件内数据状态
		var linkState = this.props.linkState;
		return (
			<div key={key}>
				<input type="text" valueLink={linkState('masters.'+ key +'.name')}/>
				<input type="text" valueLink={linkState('masters.'+ key +'.hot')}/>
				<select valueLink={linkState('masters.' + key + '.follow')}>
					<option value="unfollow">未关注</option>
					<option value="follow">已关注</option>
				</select>
				<textarea valueLink={linkState('masters.' + key + '.desc')}></textarea>
				<input type="text" valueLink={linkState('masters.'+ key +'.img')}/>
				<button>移除信息</button>
			</div>
		)
	},
	render : function() {
		return (
			<div className = "panel edit">
				<header>
					<h1>编辑新增</h1>
					<h3>2017-3-10</h3>
				</header>
				
				{Object.keys(this.props.masters).map(this.renderEditForm)}
				
				<AddMasterForm {...this.props} />
				<button onClick = {this.props.loadSamples}>加载</button>
			</div>
		)
	},
	propTypes : {
		addMaster : React.PropTypes.func.isRequired,
		removeMaster : React.PropTypes.func.isRequired,
		masters : React.PropTypes.object.isRequired,
		linkState : React.PropTypes.func.isRequired,
		loadSamples : React.PropTypes.func.isRequired
	}
} );*/

export default Edit;