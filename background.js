
function execScript(){
    var executing = chrome.tabs.executeScript(null, {
        file: "editmodetoggle.js"
    });
};

chrome.pageAction.onClicked.addListener(function(){
    execScript();
});

chrome.contextMenus.create({
  id: "edit-page",
  title: "Enable/Disable God Mode",
  contexts: ["all"],
  onclick: execScript
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.editable == "true"){
      chrome.pageAction.show(sender.tab.id);
      console.log("The page \"" + sender.tab.url +"\" is being edited.");
    }else{
      chrome.pageAction.hide(sender.tab.id);
      console.log("The page \"" + sender.tab.url +"\" returned to normal.");
    };
  }
);
