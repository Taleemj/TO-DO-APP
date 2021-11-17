//getting the elements
let input = document.getElementById("inputfield");
let addbtn = document.getElementById("addbtn");
let todolist = document.getElementById("todos");
let deleteAll = document.getElementById("deleteAll");
showTasks();
addbtn.onclick = () =>{
  let userData = input.value;
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){
    listArr = [];
  }
  else{
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
function showTasks(){
   let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){
     listArr = [];
  }
  else{
    listArr = JSON.parse(getLocalStorage);
  }
  
  const pendingNumb = document.getElementById("pendingNumb");
  pendingNumb.textContent = listArr.length;
  
  let newLiTag = '';
  listArr.forEach((element ,index) => {
    newLiTag += `<li>${element}<span onclick = "deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`;
  });
  todolist.innerHTML = newLiTag;
  input.value = "";
}

function deleteTask(index){
   let getLocalStorage = localStorage.getItem("New Todo");
   listArr = JSON.parse(getLocalStorage);
   listArr.splice(index, 1);
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   showTasks();
}

deleteAll.onclick = () =>{
   listArr.splice(listArr);
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   showTasks();
}