window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    setInputs();
}

function goBack() {
    window.location.href="index.html";
}

function setInputs() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let urlInput = document.getElementById("URLinput")
        urlInput.value = url;
    });
}

function addTask() {
    chrome.storage.sync.get({arr:[], name:[]}, function(results) {
        updateURLArr(results.arr);
        updateNameArr(results.name);
    });
    goBack();
}

function updateURLArr(array) {
    array.push(document.getElementById("URLinput").value);
    chrome.storage.sync.set({arr:array}, function() {
        console.log("added " + array + " to the URl array with new values");
    });
}

function updateNameArr(array) {
    array.push(document.getElementById("txtName").value);
    chrome.storage.sync.set({name:array}, function() {
        console.log("added " + array + " to the name array with new values");
    });
}