assignCallback('btn-jira-my-not-done', goJiraMyNotDone);
assignCallback('btn-jira-agile-open', goJiraAgileOpenBugs);
assignCallback('btn-bp', goBP);
assignCallback('btn-bp-overview', goOverwiew);
assignCallback('btn-bp-board2', goBoard2);
assignCallback('btn-bp-board2-risks', goBoard2Risks)
assignCallback('btn-bp-board2-roadmap', goToBoard2Roadmap)
assignCallback('btn-bp-inline-dialog', goInlineDialogDocs)
assignCallback('btn-bp-board2-scope-definition', goBoard2ScopeDefinition)
assignCallback('btn-bp-board2-box-type-configuration', goToBoxTypeConfiguration)
assignCallback('btn-bp-manage-apps', goToManageApps)

function goJiraMyNotDone() {
	var newURL = "https://jira.softwareplant.com/issues/?filter=20112&jql=assignee%20%3D%20currentUser()%20AND%20status%20not%20in%20(Closed%2C%20Done%2C%20%22Waiting%20for%20Release%22)%20and%20project%20!%3D%20%22SP%20OutOfOffice%22%20ORDER%20BY%20status%20ASC";
	openURL(newURL);
}

function goJiraAgileOpenBugs() {
	var newURL = "https://jira.softwareplant.com/issues/?filter=19605&jql=issuetype%20in%20(%22Internal%20Bug%22%2C%20bug%2C%20Support)%20AND%20team%20%3D%20agile%20AND%20status%20%3D%20Open%20ORDER%20BY%20priority%20DESC";
	openURL(newURL);
}

function goBP() {
	var newURL = "http://localhost:58080/dev-jira8/psql/secure/Dashboard.jspa";
	openURL(newURL);
}

function goOverwiew() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/overview.html";
	openURL(newURL);
}

function goBoard2() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/board.html?program=PROG-66";
	openURL(newURL);
}

function goToBoard2Roadmap() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/roadmap.html?program=PROG-66";
	openURL(newURL);
}

function goBoard2Risks() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/risk.html?program=PROG-66";
	openURL(newURL);
}

function goInlineDialogDocs() {
	var newURL = "http://localhost:4200/#/components/inline-dialog";
	openURL(newURL);
}

function goBoard2ScopeDefinition() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/configuration.html?program=PROG-66&page=/tasks/scope-definition#/firstVisibleChildId=PI-148";
	openURL(newURL);
}

function goToBoxTypeConfiguration() {
	var newURL = "http://localhost:58080/dev-jira8/psql/plugins/servlet/softwareplant-bigpicture/administration.html?page=/box-type-configuration/2/general/basics";
	openURL(newURL);
}

function goToManageApps(){
	var newURL = 'http://localhost:58080/dev-jira8/psql/plugins/servlet/upm?source=side_nav_manage_addons';
	openURL(newURL);
}


function assignCallback(elementId, callback) {
	document.getElementById(elementId).onclick = () => {
		callback();
	}
}

function openURL(url) {
	activeTab = chrome.tabs.query({ active: true }, function (tabs) {
		activeTab = tabs[0];
		chrome.tabs.update(activeTab.id, { url })
	});
}