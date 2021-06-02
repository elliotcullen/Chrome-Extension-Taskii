window.onload = function() {
    
    document.getElementById("addTaskBtn").addEventListener("click", urlClick);
}

function urlClick() {
    let id = this.id;
    console.log(id);
    // chrome.browserAction.onClicked.addListener(function(activeTab){
    //     var newURL = "http://stackoverflow.com/";
    //     chrome.tabs.create({ url: newURL });
    // });
}