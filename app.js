import React from 'react';
import ReactDOM from 'react-dom';

var types = new Array('Small Undecorated', 'Small Decorated', 'Medium Undecorated', 'Medium Decorated', 'Large', 'Extra-large')

var s1sales = {'John Smith': {'Small Undecorated': 5, 'Small Decorated': 9, 'Medium Undecorated': 3, 'Medium Decorated': 7, Large: 1, 'Extra-large': 0}}
var scout1 = { name: 'Duncan Vogel', year: 2015, prods: s1sales}



export class Scout extends React.Component {
	render() {
		return (
			<div>
			<h1>{this.props.scout.name}</h1><br/><h2>{this.props.scout.year}</h2><br/>
//			<table><tr><td>Customer Name</td>{types.map(function(type){return <td>{type}</td>})}</tr>
//			<tr><td>John Smith</td>{types.map(function(type){return <td>{this.props.scout.prods['John Smith'][type]}</td>})}</tr>
//			</table>
			</div>
		)
	}
}

export class App extends React.Component {
	render() {
		return (
			<Scout scout={scout1}></Scout>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));