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
    chrome.storage.sync.get({data: []}, function(results) {
        updateURLArr(results.data);
        //updateNameArr(results);
        console.log(results);
    });
    goBack();
}

function updateURLArr(array) {
    let url = document.getElementById("URLinput").value
    let name = document.getElementById("txtName").value
    let obj = {
        name: name,
        url: url
    }
    array.push(obj);
    chrome.storage.sync.set({data: array}, function() {
        console.log("added " + array + " to the URl array with new values");
    });
}

// function updateNameArr(array) {
//     chrome.storage.sync.set({data:[{name:array}]}, function() {
//         console.log("added " + array + " to the name array with new values");
//     });
// }