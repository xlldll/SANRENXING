/*直接到node_modules/中查找*/
var React    = require( 'react' );
var ReactDOM = require( 'react-dom' );
/*路由*/
/*
 var ReactRouter          = require( 'react-router' );
 var Router               = ReactRouter.Router;
 var Route                = ReactRouter.Route;
 var History              = ReactRouter.History;
 */
import {
	Router,
	Route,
	History
} from 'react-router';

var createBrowserHistory = require( 'history/lib/createBrowserHistory' );
/*辅助*/
/*var h = require( './helpers' );*/
import h from './helpers';


var Catalyst = require('react-catalyst');
var CSSTransitionGroup = require('react-addons-css-transition-group');

/*第一页：师傅类别*/
var MasterPicker = React.createClass( {
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
} );
/*第二页：主页*/
var App = React.createClass( {
	mixins : [Catalyst.LinkedStateMixin],
	getInitialState   : function() {
		return {
			masters    : {},//师傅信息
			follownums : {},//关注数
			grow       : false,//放大
		}
	},
	//componentDidMount() is invoked immediately after a component is mounted.
	componentDidMount : function() {
		var localStorageRef = localStorage.getItem( 'follow-' + this.props.params.masterId );
		if( localStorageRef ) {
			// update our component state to reflect what is in localStorage
			this.setState( {
				follownums : JSON.parse( localStorageRef )
			} );
		}
	},
	//componentWillUpdate() is invoked immediately before rendering when new props or state are being received.
	componentWillUpdate : function(nextProps, nextState) {
		localStorage.setItem('follow-' + this.props.params.masterId, JSON.stringify(nextState.follownums));
	},
	
	// 1.编辑列表
	addMaster         : function( master ) {
		var timestamp                               = (new Date()).getTime();
		// update the state object
		this.state.masters[ 'master-' + timestamp ] = master;
		// set the state
		this.setState( { masters : this.state.masters } );
	},
	removeMaster : function(key) {
		if(confirm("确定删除此条信息吗？！")) {
			this.state.masters[key] = null;
			this.setState({
				masters : this.state.masters
			});
		}
	},
	loadSamples       : function() {
		this.setState( {
			masters : require( './sample-masters' )
		} );
	},
	// 2.显示师傅介绍
	renderMaster : function( key ) {
		return (
			<Master key = {key} index = {key} details = {this.state.masters[ key ]} addToFollow = {this.addToFollow} />
		);
	},
	panelClickEvent   : function() {
		this.setState( { grow : !this.state.grow } );
	},
	//3.关注列表
	addToFollow : function( key ) {
		this.state.follownums[ key ] = this.state.follownums[ key ] + 1 || 1;
		this.setState( { follownums : this.state.follownums } );
	},
	removeFollow : function(key){
		delete this.state.follownums[key];
		this.setState({
			follownums : this.state.follownums
		});
	},
	// 渲染
	render      : function() {
		return (
			<div className = "panels">
				<div className = {this.state.grow ? "panel post grow" : "panel post"} onClick = {this.panelClickEvent} ref = "mypanel">
					<Header title = "师傅介绍" />
					<ul ref = "myul">
						{Object.keys( this.state.masters ).map( this.renderMaster )}
					</ul>
				</div>
				<Follow masters = {this.state.masters} follownums = {this.state.follownums} removeFollow={this.removeFollow}/>
				<Edit addMaster = {this.addMaster} removeMaster={this.removeMaster} loadSamples = {this.loadSamples} masters={this.state.masters} linkState={this.linkState} />
			</div>
		)
	}
} );
/*Header*/
var Header = React.createClass( {
	render : function() {
		return (
			<header>
				<h1>{this.props.title}</h1>
				<h3>2017-3-10</h3>
			</header>
		)
	},
	propTypes : {
		title : React.PropTypes.string.isRequired
	}
} );
/*一师傅介绍*/
var Master = React.createClass( {
	getInitialState : function() {
		return {
			addlove : false
		}
	},
	/*隐藏元素h3添加不了事件*/
	h3onClick : function(e) {
		console.log('soemthing');
		this.setState( { addlove : !this.state.addlove } );
	},
	aonMouseDown : function(e) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
	},
	aonMouseUp : function(e) {
		e.preventDefault();
		this.setState( { addlove : !this.state.addlove } );
	},
	onButtonClick : function() {
		console.log("准备添加到关注列表：", this.props.index);
		var key = this.props.index;
		this.props.addToFollow(key);
	},
	stopBubble : function(e) {
		if( e && e.stopPropagation ) {//非IE浏览器
			e.stopPropagation();
		} else {//IE浏览器
			window.event.cancelBubble = true;
		}
	},
	render : function() {
		var details = this.props.details;
		var isAvailable = (details.follow === 'follow' ? true : false);
		var buttonText = (isAvailable ? '已关注' : '未关注');
		return (
			<li>
				<div className = "ih-item circle effect13 from_left_and_right" onClick={this.stopBubble}>
					<a href = "javascript:;" onMouseDown={this.aonMouseDown} onMouseUp={this.aonMouseUp}>
						<div className = "img">
							<img src = {details.img} alt = {details.img}/>
						</div>
						<div className = "info">
							<div className = "info-back">
								<h3 className = {this.state.addlove ? "love" : " "} ref="myh3" >增加关注度</h3>
								<p>以获取他/她的更多资料</p>
							</div>
						</div>
					</a>
				</div>
				<figure onClick={this.stopBubble}>
					<figcaption>
						<h3>{details.name}</h3>
						<span>{details.hot}°</span>
					</figcaption>
					<p>{details.desc}</p>
				</figure>
				<button className="follow" onClick={this.onButtonClick} disabled={isAvailable}>{buttonText}</button>
			</li>
		)
	}
} );
/*二关注列表*/
var Follow = React.createClass( {
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
} );
/*三编辑新增*/
var Edit          = React.createClass( {
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
} );
//添加master表单
var AddMasterForm = React.createClass( {
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
} );
/*第三页：未找到*/
var NotFound = React.createClass( {
	render : function() {
		return (
			<h1>Not Found!</h1>
		)
	}
} );
/*路由*/
var routes = (
	<Router history = {createBrowserHistory()}>
		<Route path = "/src/html/bbsreact.html" component = {MasterPicker} />
		<Route path = "/src/html/bbsreact.html/master/:masterId" component = {App} />
		<Route path = "/src/html/bbsreact.html/*" component = {NotFound} />
	</Router>
);
ReactDOM.render( routes,document.querySelector( "#main" ) );


