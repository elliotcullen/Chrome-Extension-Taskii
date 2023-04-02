window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("goBack").addEventListener("click", goBack);
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
    });
    goBack();
}

function updateURLArr(array) {
    let url = document.getElementById("URLinput").value
    let name = document.getElementById("txtName").value
    function makeid(length) {
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
       }
       return result.join('');
    }
    let obj = {
        name: name,
        url: url,
        id: makeid(10)
    }
    array.push(obj);
    chrome.storage.sync.set({data: array}, function() {});
}