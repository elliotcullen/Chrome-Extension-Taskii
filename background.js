window.onload = function() {
    // document.getElementById("addTaskBtn").addEventListener("click", urlClick);
}

function onClick(url) {
    newUrl = "http://" + url;
    console.log(newUrl);
    chrome.browserAction.onClicked.addListener(function(activeTab){
        newUrl = "http://" + url;
        console.log(newUrl);
        chrome.tabs.create({ url: newUrl });
        console.log(newUrl);
    });
}
