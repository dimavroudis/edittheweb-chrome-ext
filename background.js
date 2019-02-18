function editTheWeb() {
	var executing = chrome.tabs.executeScript(null, {
		file: 'editableToggle.js'
	});
};

chrome.contextMenus.create({
	id: 'edit-web-toggle',
	title: 'Enable editing',
	contexts: ['all']
});

chrome.contextMenus.onClicked.addListener( function() {
	editTheWeb()
});

chrome.pageAction.onClicked.addListener(function() {
	editTheWeb()
});

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.editable == true) {

			chrome.contextMenus.update('edit-web-toggle', {
				title: 'Disable editing',
			});
		} else {

			chrome.contextMenus.update('edit-web-toggle', {
				title: 'Enable editing',
			});

		};
	}
);