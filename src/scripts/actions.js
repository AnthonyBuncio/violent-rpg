import STORE from './store'

var ACTIONS = {
	pushUp : function() {
		STORE.set({
			doPushUps : STORE.data.doPushUps +1,
			myLevel : STORE.data.myLevel +1
		})
	},
	readBook : function() {
		STORE.set({
			readABook : STORE.data.readABook +1,
			myLevel : STORE.data.myLevel +1
		})
	},
	washDishes : function() {
		STORE.set({
			cleanDishes : STORE.data.cleanDishes +1,
			myLevel : STORE.data.myLevel +1
		})
	},
	eatNastyShit : function() {
		STORE.set({
			eatVegetables : STORE.data.eatVegetables +1,
			myLevel : STORE.data.myLevel +1
		})
	}
}

export default ACTIONS