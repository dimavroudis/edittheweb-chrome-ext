if (document.body.contentEditable === "true") {
	chrome.runtime.sendMessage({
		editable: true
	});
} else {
	chrome.runtime.sendMessage({
		editable: false
	});
}