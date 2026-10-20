const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');

function updateCounter(){
    const allTasks = taskList.querySelectorAll('li');
    const completedTasks = taskList.querySelectorAll('li.completed');
    const remaining = allTask.length - completedTasks.length;
    counter.innerText = 'Còn ${remaining} việc chưa hoàn thành';
}

function addTask(){
    const taskTextValue = taskInput.ariaValueMax.trim();
    if(taskTextValue === ''){
        alert('Vui lòng nhập tên công việc!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML =`
        <span class="checkbox"></span>
        <span class="task-text">${taskTextValue}</span>
        <button class="delete-btn">Xóa</button>
    `;
    li.querySelector('.checkbox').addEventListener('click',() => toggleTask(li));
    li.querySelector('.task-text').addEventListener('click',() => toggleTask(li));
    li.querySelector('.delete-btn').addEventListener('click',() => {
        li.remove();
        updateCounter();
    });
    taskList.appendChild(li);
    taskInput.value='';
    updateCounter();

}

function toggleTask(liItem){
    liItem.classList.toggle('completed');
    updateCounter();
}
addBtn.addEventListener('click',addTask);
taskInput.addEventListener('heypress',function(e){
    if(e.key === 'Enter'){
        addTask();
    }
});
const initialItems =taskList.querySelectorAll('li');
initialItems.forEach(li => {
    li.querySelector('.checkbox').addEventListener('click',() => toggleTask(li));
    li.querySelector('.task-text').addEventListener('click',() => toggleTask(li));
    li.querySelector('.delete-btn').addEventListener('click',() => {
        li.remove();
        updateCounter();
    });
});
updateCounter();