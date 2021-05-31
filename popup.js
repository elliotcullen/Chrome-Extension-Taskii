window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
}

function loadData() {
    let arr = localStorage.getItem('urlObj');
    // let results = arr.urls;
    console.log(arr);
    // results.map((x) => {
    //     let mainDiv = document.getElementById("listContent");
    //     mainDiv.append(x);
    // })
}

let data = {};
let urlArray = [];

function addTask() {
    //console.log("works");
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        urlArray.push(url);
        console.log(urlArray);
        data.urls = urlArray;
        console.log(data)
        localStorage.setItem('urlObj', data);
        // let mainDiv = document.getElementById("listContent");
        // let checkbox = document.createElement("input");
        // let label = document.createElement("label");
        // label.for = "checkbox";
        // label.innerHTML = url;
        // checkbox.type = "checkbox";
        // checkbox.name = "checkbox";
        // let contentDiv = document.createElement("div");
        // contentDiv.append(checkbox);
        loadData();
    });
}