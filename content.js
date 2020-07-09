chrome.runtime.onMessage.addListener((msg) => {
	if(msg=='log'){
		logStore();
	}
	if(msg=='search'){
		searchStore()
	}
})

function logStore() {
	console.log('it works');
	var s = document.createElement('script');
	// ADD!!!! "storeLogger.js" to web_accessible_resources in manifest.json
	s.src = chrome.runtime.getURL('storeLogger.js');
	s.onload = function () {
		this.remove();// to jest <script storeLogger.js> usuwamy go potem jesli juz nie jest potrzebny
	};
	(document.head || document.documentElement).appendChild(s);
	// chrome.runtime.sendMessage(window.myStore)
	// chrome.runtime.sendMessage({ greeting: "hello from content" }, function (response) {
		// console.log(response.farewell);
	// });
}


function searchStore() {
	console.log('searchStoreit works');
	var s = document.createElement('script');
	// ADD!!!! "storeLogger.js" to web_accessible_resources in manifest.json
	s.src = chrome.runtime.getURL('searchLogger.js');
	s.onload = function () {
		this.remove();// to jest <script storeLogger.js> usuwamy go potem jesli juz nie jest potrzebny
	};
	(document.head || document.documentElement).appendChild(s);
	// chrome.runtime.sendMessage(window.myStore)
}
