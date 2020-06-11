chrome.runtime.onMessage.addListener((msg) => {
	logStore();
})

function logStore() {
	var s = document.createElement('script');
	// ADD!!!! "storeLogger.js" to web_accessible_resources in manifest.json
	s.src = chrome.runtime.getURL('storeLogger.js');
	s.onload = function () {
		this.remove();// to jest <script storeLogger.js> usuwamy go potem jesli juz nie jest potrzebny
	};
	(document.head || document.documentElement).appendChild(s);
}
