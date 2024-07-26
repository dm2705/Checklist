const inputBar = document.getElementById("input-bar");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBar.value == ''){
        alert("Must list a task!");
    }
    else{
        let li = document.createElement("li");
        //assignes li to the typed words in the input bar
        li.innerHTML = inputBar.value;
        //element created in the list will be appear under li list container
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //code for the x icon
        li.appendChild(span);
    }
    inputBar.value = "";
    saveData();
}
//listens for a click on the button and on the list itself
//LI is the tagname for list item
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//saves data for inserts and deletes
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//displays data when web app is opened at another instance.
/*takes data from local storage "data" and then give all the content
stored within the browser for the tagname data*/
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask();