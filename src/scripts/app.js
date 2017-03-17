import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import ACTIONS from './actions'
import STORE from './store'


var ChoreView = React.createClass({
	getInitialState : function() {
		return STORE.data
	},
	componentDidMount : function() {
		STORE.on('addOne', () => {
			this.setState(STORE.data)
		})
	},
	render : function() {
		console.log('everything is working so far')
		return (
			<div id="center-box"className="game-view">
				<Buttons />
				<Stats />
			</div>
			)
	}
})

var Buttons = React.createClass({
	render : function() {
		return (
			<div className="buttons">
				<button className="chore one" onClick={ACTIONS.pushUp}>do push ups</button>
				<button className="chore two" onClick={ACTIONS.readBook}>read a book</button>
				<button className="chore three" onClick={ACTIONS.washDishes}>clean some dishes</button>
				<button className="chore four" onClick={ACTIONS.eatNastyShit}>eat vegetables</button>
			</div>
			)
	}
})

var Stats = React.createClass({
	render : function() {
		return (
			<div className="all-stats">
				<p className="stat">Strength : {STORE.data.doPushUps}</p>
				<p className="stat">Knowledge : {STORE.data.readABook}</p>
				<p className="stat">Dishes cleaned : {STORE.data.cleanDishes}</p>
				<p className="stat">Healthiness : {STORE.data.eatVegetables}</p>
				<p className="stat">Chores completed : {STORE.data.myLevel}</p>
			</div>
			)
	}
})

const app = function() {
  ReactDOM.render(<ChoreView />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..