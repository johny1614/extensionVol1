assignCallback('btn-jira-my-not-done', goJiraMyNotDone);
assignCallback('btn-jira-agile-open', goJiraAgileOpenBugs);
assignCallback('btn-bp-overview', goOverwiew);
assignCallback('btn-bp-board2', goBoard2);

function goJiraMyNotDone() {
	var newURL = "https://jira.softwareplant.com/issues/?filter=20112&jql=assignee%20%3D%20currentUser()%20AND%20status%20not%20in%20(Closed%2C%20Done%2C%20%22Waiting%20for%20Release%22)%20and%20project%20!%3D%20%22SP%20OutOfOffice%22%20ORDER%20BY%20status%20ASC";
	chrome.tabs.create({url: newURL});
}

function goJiraAgileOpenBugs() {
	var newURL = "https://jira.softwareplant.com/issues/?filter=19605&jql=issuetype%20in%20(%22Internal%20Bug%22%2C%20bug%2C%20Support)%20AND%20team%20%3D%20agile%20AND%20status%20%3D%20Open%20ORDER%20BY%20priority%20DESC";
	chrome.tabs.create({url: newURL});
}

function goOverwiew() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/overview.html";
	chrome.tabs.create({url: newURL});
}

function goBoard2() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/board.html?program=PROG-66";
	chrome.tabs.create({url: newURL});
}


function assignCallback(elementId, callback) {
	document.getElementById(elementId).onclick = () => {
		callback();
	}
}
