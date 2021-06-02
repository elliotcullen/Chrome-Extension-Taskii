window.onload = function () {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    setInputs();
}

function setInputs() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let urlInput = document.getElementById("URLinput")
        urlInput.value = url;
    });
}
function addTask() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        chrome.storage.sync.get(["arr"], function(result) {
            let arr = result.arr;
            arr.push(url);
            console.log(taskArr);
        });

        let urlInput = document.getElementById("URLinput")
        urlInput.value = url;
        // urlArray.push(url);
        // console.log(urlArray);
        // data.urls = urlArray;
        // console.log(data)
        // localStorage.setItem('urlObj', data);
        // let mainDiv = document.getElementById("listContent");
        // let checkbox = document.createElement("input");
        // let label = document.createElement("label");
        // label.for = "checkbox";
        // label.innerHTML = url;
        // checkbox.type = "checkbox";
        // checkbox.name = "checkbox";
        // checkbox.classList.add("checkBox");
        // let contentDiv = document.createElement("div");
        // contentDiv.classList.add("taskRowDiv");
        // contentDiv.append(checkbox);
        // contentDiv.append(label);
        //loadData();
        mainDiv.append(contentDiv)
    });
}