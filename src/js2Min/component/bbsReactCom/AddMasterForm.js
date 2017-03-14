/**
 * Created by LinChuQiang.
 */
import React from 'react';
/*autobind-decorator 省去每次都要声明eventHandle.bind(this)*/
import autobind from 'autobind-decorator';
//添加master表单
@autobind
class AddMasterForm extends React.Component {
	createMaster(event) {
		// 1.阻止表单默认提交行为
		event.preventDefault();
		// 2. 从表单中获得数据形成master对象
		var master = {
			name   : this.refs.name.value,
			img    : this.refs.img.value,
			desc   : this.refs.desc.value,
			hot    : this.refs.hot.value,
			follow : this.refs.follow.value
		}
		// 3. 添加master对象到主页
		this.props.addMaster( master );
		this.refs.masterForm.reset();
	}
	
	stopBubble(e) {
		console.log("form:stopBubble！");
		if( e && e.stopPropagation ) {//非IE浏览器
			e.stopPropagation();
		} else {//IE浏览器
			window.event.cancelBubble = true;
		}
	}
	render() {
		return (
			<form onSubmit = {this.createMaster} ref = "masterForm" onClick = {this.stopBubble}>
				<input type = "text" placeholder = "名字" ref = "name" />
				<input type = "text" placeholder = "200°" ref = "hot" />
				<select ref = "follow">
					<option value = "unfollow">未关注</option>
					<option value = "follow">已关注</option>
				</select>
				<textarea cols = "30" rows = "5" placeholder = "简介" ref = "desc"></textarea>
				<input type = "text" placeholder = "http://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg" ref = "img" />
				<button type = "submit" className="editAdd">添加信息</button>
			</form>
		)
	}
}
/*var AddMasterForm = React.createClass( {
		createMaster : function( event ) {
			// 1.阻止表单默认提交行为
			event.preventDefault();
			// 2. 从表单中获得数据形成master对象
			var master = {
				name   : this.refs.name.value,
				img    : this.refs.img.value,
				desc   : this.refs.desc.value,
				hot    : this.refs.hot.value,
				follow : this.refs.follow.value
			}
			// 3. 添加master对象到主页
			this.props.addMaster( master );
			this.refs.masterForm.reset();
		},
		render       : function() {
			return (
				<form onSubmit = {this.createMaster} ref = "masterForm">
					<input type = "text" placeholder = "名字" ref = "name" />
					<input type = "text" placeholder = "200°" ref = "hot" />
					<select ref = "follow">
						<option value = "unfollow">未关注</option>
						<option value = "follow">已关注</option>
					</select>
					<textarea cols = "30" rows = "5" placeholder = "简介" ref = "desc"></textarea>
					<input type = "text" placeholder = "http://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg" ref = "img" />
					<button type = "submit">添加信息</button>
				</form>
			)
		}
	} );*/

export default AddMasterForm;