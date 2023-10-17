let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul');
let input = document.querySelector('input');


addBtn.addEventListener('click' , ()=>{
    let text = input.value;
    if (text !== "") {  
        let task = createTask(text);
        task.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash"></i></span>'
        taskList.appendChild(task);
        input.value = "";
    }
});



taskList.addEventListener('click', (e)=>{
    if (e.target.nodeName === 'I'){
    e.target.parentElement.parentElement.style = 'display : none';
    }
    if (e.target.nodeName === 'LI') {
        e.target.classList.toggle("done"),
        e.target.classList.toggle("checked")
    }
})

function createTask(text){
    let li = document.createElement('li')
    li.textContent = text;
    return li;
}

















