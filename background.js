
function execScript(){
    var executing = chrome.tabs.executeScript(null, {
        file: "editmodetoggle.js"
    });
};

chrome.browserAction.onClicked.addListener(function(){
    execScript();
});

chrome.contextMenus.create({
  id: "edit-page",
  title: "Edit this page",
  contexts: ["all"],
  onclick: execScript
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.editable == "true"){
      chrome.contextMenus.update(
        "edit-page",
        {title: "Stop editing this page"}
      );
      console.log("The page \"" + sender.tab.url +"\" is being edited.");
    }else{
      chrome.contextMenus.update(
        "edit-page",
        {title: "Edit this page"}
      );
      console.log("The page \"" + sender.tab.url +"\" returned to normal.");
    };
  }
);
