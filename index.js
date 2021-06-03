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
    chrome.storage.sync.get({data: []}, function(result) {
        if (result.data.length > 0) {
            result.data.map((x) => {
                let checkbox = document.createElement("input");
                let label = document.createElement("label");
                label.for = "checkbox";
                //label.id = x;
                label.innerHTML = x.name;
                checkbox.type = "checkbox";
                checkbox.name = "checkbox";
                checkbox.classList.add("checkBox");
                let contentDiv = document.createElement("div");
                contentDiv.classList.add("taskRowDiv");
                contentDiv.append(checkbox);
                contentDiv.append(label);
                mainDiv.append(contentDiv);
            });
        } else if(result.data.length == 0) {
            mainDiv.innerHTML = "";
            let noTasksDiv = document.createElement("div");
            noTasksDiv.classList.add("noTasksDiv")
            let p = document.createElement("p");
            let txt = document.createTextNode("No pages to read! Go chill for a bit");
            p.append(txt);
            let img = document.createElement("img");
            img.src = "images/book.png";
            img.classList.add("noTasksImg");
            noTasksDiv.append(img);
            noTasksDiv.append(p);
            mainDiv.append(noTasksDiv);
        }
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