import React  from 'react';
import ReactDOM  from 'react-dom';
import {
	browserHistory,
	Router,
	Route,
	IndexRoute
} from 'react-router';
import MasterPicker from './bbsReactCom/MasterPicker';
import App from './bbsReactCom/App';
import NotFound from './bbsReactCom/NotFound';

/*路由*/
var routes = (
	<Router history = {browserHistory}>
		<Route path = "/" component = {MasterPicker}>
			<IndexRoute component = {MasterPicker} />
		</Route>
		<Route path = "master/:masterId" component = {App} />
		<Route path = "*" component = {NotFound} />
	</Router>
);

ReactDOM.render( routes,document.querySelector( "#main" ) );


