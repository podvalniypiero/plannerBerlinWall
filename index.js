

const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer=document.querySelector('.toDoContainer');

btn.addEventListener(`click`,( )=>{
    // стрелочная функция
    console.log(btn);
    const task = document.createElement('li');
    
    task.innerText=inputField.value ;
    task.classList.add('addTask');

    toDoContainer.appendChild(task);
    console.log(task);
    inputField.value=' ';

    // прослушка на одно нажатие дела
    task.addEventListener(`click`, ( )=>{
        task.classList.add('doneTask');
    })
    // прослушка на два нажатия дела
    task.addEventListener(`dblclick`, ( )=>{
        toDoContainer.removeChild(task);
        })
    

})

