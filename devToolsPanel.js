document.getElementById('btn-log-store').onclick = () => {
	tab = chrome.tabs.query({active: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, 'give me store!')
	})
}
chrome.runtime.onMessage.addListener((store) => {
	console.log('no jest dev tools res!')
	document.getElementById('store-src').innerText = store;
})
