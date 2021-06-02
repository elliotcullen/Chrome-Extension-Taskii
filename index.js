let taskArr = ["text"];
let nameArr = ["name"];
let data = {};
let urlArray = [];

window.onload = function () {
    document.getElementById("changePage").addEventListener("click", changePage);
    document.getElementById("clearAll").addEventListener("click", clearStorage);
    loadData();
}

function clearStorage() {
    chrome.storage.sync.clear();
    loadData();
}

function loadData() {
    let mainDiv = document.getElementById("listContent");
    mainDiv.innerHTML = "";
    chrome.storage.sync.get({arr:[], name:[]}, function(result) {
        console.log(result);
        result.arr.map((x) => {
            let checkbox = document.createElement("input");
            let label = document.createElement("label");
            label.for = "checkbox";
            label.id = x;
            result.name.map((n) => {
                label.innerHTML = n;
            })
            checkbox.type = "checkbox";
            checkbox.name = "checkbox";
            checkbox.classList.add("checkBox");
            let contentDiv = document.createElement("div");
            contentDiv.classList.add("taskRowDiv");
            contentDiv.append(checkbox);
            contentDiv.append(label);
            console.log("URL " + x);
            mainDiv.append(contentDiv);
        });
    });
}

function onClick() {
    chrome.browserAction.onClicked.addListener(function(activeTab){
        chrome.tabs.create({ url: url });
        console.log(clicked);
    });
}

function changePage() {
    window.location.href="addTask.html";
}