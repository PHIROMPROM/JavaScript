const dateElement = document.querySelector('#date');

const options = {                               
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
dateElement.innerHTML = new Date().toLocaleDateString('en-US', options);

const inputElement = document.querySelector('#input');
const ListElement = document.querySelector('#list');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";
let List = [];
let id = 0;
let data  = localStorage.getItem("todo");
let todoList = JSON.parse(data);

if(todoList){
    todoList.forEach(item => {
        todo(item.name, item.id, item.done, item.trash);
    });
}

document.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        const toDo = inputElement.value;
        const isNotEmpty = inputElement.value != "";
        if (isNotEmpty) {
           todo(toDo);
           List.push({
               name:toDo,
               id:id,
               done:false,
               trash:false,
            });
            id++;
          localStorage.setItem('todo',JSON.stringify(List));
        }
        inputElement.value = "";
    }
});
function todo(todo,id,isDone,trash){
    const isCheck = isDone? check : uncheck;
    const isline = isDone ? line : "";
    const todos = `<li class="item">
                <i class = "fa fa-check-circle ${isCheck} co" job="complete"></i>
                <p class="text ${isline}">${todo}</p>
                <i class= "fa fa-trash-o de" job="delete"></i>
                </li>`;
    ListElement.insertAdjacentHTML("beforeend", todos);
}
