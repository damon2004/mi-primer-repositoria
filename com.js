let idCounter = 0
const input = document.querySelector(`input[type="text"]`);

userinput.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTask();
})

const addTask = ()=>{
    idCounter++;

let newValue = input.value;

   list.innerHTML += 
   `<div class="task-contenedor" id="${idCounter}">
      <label>
       <input type="checkbox" >
           ${newValue}
      </label>
     <img src="/x.svg" alt="imagen" class="close-btn">
 </div>`
input.value = "";

updateStats();
};

list.addEventListener("click",(event)=>{
   if(event.srcElement.nodeName == "INPUT"){
    updateStats()
   }else if(event.srcElement.nodeName == "img"){
     deleteTask(event.srcElement.nodeName.id)
   }
});

const updateStats =()=>{
   let element = list.querySelectorAll("div")
let checkbox = list.querySelectorAll(`input[checkbox]:checked`)
    stats.innerHTML = `<p>tareas pendientes: ${element.length} completadas:${checkbox.length} </p> `

};

let deleteTask = ()=>{
  let taskToDelete = document.getElementById(id);
  list.removeChild(taskToDelete);
  updateStats();
}