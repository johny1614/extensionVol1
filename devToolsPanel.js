document.getElementById('btn-log-store').onclick = () => {
	tab = chrome.tabs.query({active: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, 'log')
	})
}

document.getElementById('btn-search-store').onclick = () => {
	tab = chrome.tabs.query({active: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, 'search')
	})
}

chrome.runtime.onMessage.addListener((store) => {
	console.log('no jest dev tools res!')
	document.getElementById('store-src').innerText = store;
})
