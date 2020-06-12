document.getElementById('btn-log-store').onclick = () => {
	tab = chrome.tabs.query({active: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, 'give me store!')
	})
}
