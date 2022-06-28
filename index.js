let inputTextForList = document.querySelector("#inputTextForList");
let buttonAddToList = document.querySelector(".toList");
let list = document.querySelector(".list");
let liFromList = document.querySelectorAll("li");

function functionDeleteFromList() {
  this.remove();
}
function functionThroughList() {
  this.classList.toggle("line_Through");
}

buttonAddToList.addEventListener("click", functionAddToList);
function functionAddToList() {
  if (inputTextForList.value) {
    let tempLi = document.createElement("li");
    tempLi.innerHTML = inputTextForList.value;
    tempLi.addEventListener("dblclick", functionDeleteFromList);
    tempLi.addEventListener("click", functionThroughList);
    list.append(tempLi);
  }
}



window.addEventListener("load", functionLoad);
function functionLoad() {
  for (let i = 1; i < sessionStorage.length - 1; i++) {
    let tempLi = document.createElement("li");
    tempLi.innerHTML = sessionStorage.getItem("li" + (i - 1));
    list.append(tempLi);
    tempLi.addEventListener("dblclick", functionDeleteFromList);
    tempLi.addEventListener("click", functionThroughList);
    if(sessionStorage.getItem("Through")[i - 1] == 1){
      tempLi.classList.add("line_Through");
    }
  }
}

window.addEventListener("unload", functionUnLoad);
function functionUnLoad() {
  sessionStorage.clear();
  liFromList = document.querySelectorAll("li");
  let strLiThrough = "";
  for (let i = 0; i < liFromList.length; i++) {
    if(liFromList[i].className == "line_Through"){
      strLiThrough += "1";
    }
    else{
      strLiThrough += "0";
    }
    sessionStorage.setItem("li" + i, liFromList[i].textContent);
  }
  sessionStorage.setItem("Through", strLiThrough);
}
