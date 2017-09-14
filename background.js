chrome.browserAction.onClicked.addListener(function(){
    var executing = chrome.tabs.executeScript(null, {
        file: "editmodetoggle.js"
    });
});

