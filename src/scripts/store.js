import Backbone from 'backbone'

var STORE = Object.assign({}, Backbone.Events, {
	data : {
		doPushUps : 0,
		readABook : 0,
		cleanDishes : 0,
		eatVegetables : 0,
		myLevel : 0
	},
	set : function(obj) {
		this.data = Object.assign(this.data, obj)

		this.trigger('addOne')
	}
})

export default STORE