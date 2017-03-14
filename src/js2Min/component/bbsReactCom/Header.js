/**
 * Created by LinChuQiang.
 */
import React from 'react';
/*Header*/

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
	render() {
		return (
			<header>
				<h1>{this.props.title}</h1>
				<h3>{this.state.date.toLocaleString()}</h3>
			</header>
		)
	}
}

Header.propTypes = {
	title : React.PropTypes.string.isRequired
}


/*var Header = React.createClass( {
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
} );*/

export default Header;