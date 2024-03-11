const inputBox=document.getElementById("text");
const listContainer=document.getElementById("list-container");

function AddTask(){
    if (inputBox.value=="")
    {
        alert("type something");
    }
    else
    {
        const li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        SaveTask();
    }
    inputBox.value="";
    SaveTask();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        SaveTask();
    }
    else if (e.target.tagName=="SPAN")
    {
        e.target.parentElement.remove();
        SaveTask();
    }
}, false);

function SaveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function SaveData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
SaveData();