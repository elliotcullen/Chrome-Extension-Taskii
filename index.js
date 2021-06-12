let data = {};

window.onload = function () {
    document.getElementById("changePage").addEventListener("click", changePageAdd);
    document.getElementById("clearAll").addEventListener("click", clearStorage);
    loadData();
}

function clearStorage() {
    if (confirm("Are you sure you want to delete all?")) {
        chrome.storage.sync.clear();
      } else {
      }
    loadData();
}

function loadData() {
    let mainDiv = document.getElementById("listContent");
    mainDiv.innerHTML = "";
    chrome.storage.sync.get({data: []}, function(result) {
        console.log(result);
        if (result.data.length > 0) {
            result.data.map((x) => {
                console.log(result.data)
                let checkbox = document.createElement("input");
                checkbox.onclick = function() {event.stopPropagation()}
                checkbox.type = "checkbox";
                checkbox.name = "checkbox";
                checkbox.classList.add("checkBox");

                let editimg = document.createElement("input");
                editimg.type = "image";
                editimg.id = x.id + "---edit";
                editimg.classList.add("iconImg");
                editimg.src = "images/edit.png";
                editimg.onclick = function () {changePageEdit(x.id, x.url, x.name)};

                let deleteimg = document.createElement("input");
                deleteimg.type = "image";
                let deleteimgId = x.id + "---delete";
                deleteimg.id = deleteimgId;
                deleteimg.classList.add("iconImg");
                deleteimg.src = "images/delete.png";
                deleteimg.onclick = function () {deleteMe(x.id, deleteimgId)};

                let icons = document.createElement("div");
                icons.append(editimg);
                icons.append(deleteimg);
                icons.classList.add("iconDiv");

                let btn = document.createElement("button");
                btn.id = x.id;
                btn.innerHTML = x.name;
                btn.classList.add("linkBtn")

                let contentDiv1 = document.createElement("div");
                contentDiv1.append(checkbox);
                contentDiv1.append(btn);
                contentDiv1.append(icons);
                contentDiv1.classList.add("taskRowDiv");

                contentDiv1.onclick = function() {newTab(x.url);};
                mainDiv.append(contentDiv1);
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

function changePageAdd() {
    window.location.href="addTask.html";
}

function changePageEdit(id, url, name) {
    event.stopPropagation()
    localStorage.setItem("id", id);
    localStorage.setItem("url", url);
    localStorage.setItem("name", name);
    window.location.href="editTask.html";
}

function newTab(url) {
    chrome.tabs.create({'url': url});
}

function deleteMe(taskid, arrid) {
    event.stopPropagation()
    chrome.storage.sync.get({data: []}, function(result) {
        let index = result.data.findIndex(i => i.id === taskid);
        result.data.splice(index, 1);
        chrome.storage.sync.set({data: result.data}, function() {
        });
        loadData();
    });
}