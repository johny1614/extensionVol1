console.log('storeLogger go!');
window.myStore.subscribe(myStore => {
	console.log('myStore', myStore)
})
