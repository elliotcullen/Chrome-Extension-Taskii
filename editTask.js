window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", updateTask);
    document.getElementById("goBack").addEventListener("click", goBack);
    setInputs();
}

function goBack() {
    window.location.href="index.html";
}

function setInputs() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = localStorage.getItem("url");
        let name = localStorage.getItem("name");
        let urlInput = document.getElementById("URLinput");
        let nameInput = document.getElementById("txtName");
        urlInput.value = url;
        nameInput.value = name;
    });
}

function updateTask() {
    chrome.storage.sync.get({data: []}, function(results) {
        let id = localStorage.getItem("id");
        updateURLArr(results.data, id);
    });
    goBack();
}

function updateURLArr(array, id) {
    let url = document.getElementById("URLinput").value
    let name = document.getElementById("txtName").value
    let obj = {
        id: id,
        name: name,
        url: url
    }
    chrome.storage.sync.get({data: []}, function(result) {
        let index = result.data.findIndex(i => i.id === id);
        result.data.splice(index, 1);
        result.data.push(obj);
        chrome.storage.sync.set({data: result.data}, function() {});
    });
}