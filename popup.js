document.getElementById('btn-get-store').onclick = () => {
	getStore();
}

function getStore() {
	console.log('get store TODO!')
	tab = chrome.tabs.query({active: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id,'give me store!')
	})
}
