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

document.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        const toDo = inputElement.value;
        const isNotEmpty = inputElement.value != "";
        if (isNotEmpty) {
           todo(toDo);
        }
        inputElement.value = "";
    }
});
function todo(todo){
    const todos = `<li class="item">
                <i class = "fa fa-circle-thin co"></i>
                <p class="text">${todo}</p>
                <i class= "fa fa-trash-o de" job="delete"></i>
                </li>`;
    ListElement.insertAdjacentHTML("beforeend", todos);
}
localStorage.setItem('firstname', 'phirom');
console.log(localStorage.getItem('firstname'));
