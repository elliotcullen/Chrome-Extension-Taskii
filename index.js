let taskArr = [];
let data = {};
let urlArray = [];

window.onload = function () {
    document.getElementById("changePage").addEventListener("click", changePage);
    // taskArr.push("test");
    chrome.storage.sync.set({"arr": taskArr }, function(){
    });
    loadData();
}

function loadData() {
    chrome.storage.sync.get(["arr"], function(result) {
        console.log(result.arr);
        console.log(taskArr);
    });
    // let arr = localStorage.getItem('urlObj');
    // let results = arr.urls;
    // console.log(arr);
    // results.map((x) => {
    //     let mainDiv = document.getElementById("listContent");
    //     mainDiv.append(x);
    // })
}

function changePage() {
    window.location.href="addTask.html";
}