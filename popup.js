window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("changePage").addEventListener("click", changePage);
}

function loadData() {
    // let arr = localStorage.getItem('urlObj');
    // let results = arr.urls;
    // console.log(arr);
    // results.map((x) => {
    //     let mainDiv = document.getElementById("listContent");
    //     mainDiv.append(x);
    // })
}

let data = {};
let urlArray = [];

function changePage() {
    window.location.href="addTask.html";
}

function addTask() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // urlArray.push(url);
        // console.log(urlArray);
        // data.urls = urlArray;
        // console.log(data)
        // localStorage.setItem('urlObj', data);
        let mainDiv = document.getElementById("listContent");
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        label.for = "checkbox";
        label.innerHTML = url;
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.classList.add("checkBox");
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("taskRowDiv");
        contentDiv.append(checkbox);
        contentDiv.append(label);
        //loadData();
        mainDiv.append(contentDiv)
    });
}