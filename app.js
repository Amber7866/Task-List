//role attribute is for special people to access website

//setting button wiring: saves the users input
//resent button wiring: resets the users input

function saveSetting (){
    let userName = document.getElementById("userName").value
    let colorScheme = document.getElementById("color").value
    let heading = document.getElementById("heading")
    
    heading.innerHTML = userName + " Task List"

    selectColor = document.querySelector('#color');
    colorOutput = selectColor.value;
    //document.querySelector('.output').textContent = output;
    heading.style.backgroundColor=colorOutput
}

function resetSetting (){
    document.getElementById('settingsForm').reset();

    heading.innerHTML = "Task List"
    heading.style.backgroundColor="white"

}

let taskListArray = []

function addTask(){
    let taskName = document.getElementById("taskDescription").value
    let date = document.getElementById('date').value

    const taskObject = {
        taskTitle:taskName,
        taskDate:date,
        taskStatus:"New"
    } 
    
    taskListArray.push(taskObject)
    
    document.getElementById('addTaskForm').reset();

    renderTaskList();
}

function enterTask(taskTitle, taskDate, taskStatus){
    const display =
    `<div class="card" style="width: 30rem;">
                    <ul class="list-group">
                        <li class="list-group-item">
                          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                          <label class="form-check-label" for="firstCheckbox"></label>
                        </li>
                      </ul>
                    <div class="card-body">
                      <h5 class="card-title" id="${taskTitle}">${taskTitle}</h5>
                      <p class="card-text">${taskDate}</p>
                      <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                  </div>`;
               
    return display;
                
}


function renderTaskList(){
    let taskList = document.getElementById('myTaskList');
    taskList.innerHTML = "";
    for (taskIndex =0; taskIndex < taskListArray.length; taskIndex++){
        taskList.innerHTML = taskList.innerHTML + 
            enterTask(taskListArray[taskIndex].taskTitle,
                    taskListArray[taskIndex].taskDate,
                     taskListArray[taskIndex].taskStatus)
                     
            }             
        }
        var taskList = document.getElementById("myTaskList");
        taskList.addEventListener('click', (event) => { // "event" here is the event parameter
            const clickedEvent = event.target;
            console.log(clickedEvent.innerHTML);
            console.log(clickedEvent);
            const parentNode = clickedEvent.parentNode;
            let taskTitle = parentNode.id;
            //const taskTitle = parseInt(parentNode.id);
            if (clickedEvent.innerHTML === "Delete") {
                // we are going to use splice to remove elements
                if (taskListArray.length !== 0) {
                     //const indexToDelete = studentID - 1;
            // find the student id
            let indexToDelete = 0;
            for (taskIndex =0; taskIndex < taskListArray.length; taskIndex++) {
                if (taskListArray[taskIndex].taskTitle === taskTitle) {
                    indexToDelete = taskIndex;
                    break;
                }
            }
            
            taskListArray.splice(indexToDelete,1)
            renderTaskList()
        }

    }else if (clickedEvent.value === 'firstCheckbox') {
        alert('checkbox is selected');
        taskListArray.splice(indexToDelete,0)
            renderTaskList()
    }else {
        // alert('button is not supported')
    }
console.log(firstCheckbox);
// let checkBox = document.getElementById("firstCheckbox")
// checkBox.addEventListener('click', (event)) =>

})
        


       
         

