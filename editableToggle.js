if (document.body.contentEditable === "true") {
	document.body.contentEditable = false;
	chrome.runtime.sendMessage({
		editable: false
	});
} else {
	document.body.contentEditable = true;
	chrome.runtime.sendMessage({
		editable: true
	});
}