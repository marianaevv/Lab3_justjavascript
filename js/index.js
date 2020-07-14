let postBtn = document.querySelector('.submitButton');
let clearBtn = document.getElementById('btnClear');
let markBtn = document.getElementById('btnMark');
let deleteBtn = document.getElementById('btnDelete');

postBtn.addEventListener('click',(event)=>{
event.preventDefault();
let input = document.getElementById('todoText').value;
var list = document.getElementById("todoList");
let currentListHTML = list.innerHTML;
list.innerHTML = currentListHTML + '<input type="checkbox" id="inputTodo" name="todos"/>' + input + '<br>';
document.getElementById("todoText").value = "";

console.log(input);
});
clearBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    var todos = document.getElementsByName("todos");
    for(var i = 0; i<todos.length;i++){
        todos[i].checked = false;
    }
});

markBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    var todos = document.getElementsByName("todos");
    for(var i = 0; i<todos.length;i++){
        todos[i].checked = true;
    }
});
deleteBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    var list = document.getElementById("todoList");
        list.innerHTML ="";
    
});