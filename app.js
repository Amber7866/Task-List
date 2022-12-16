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


}

function enterTask(){

    `<div class="card" style="width: 30rem;">
                    <ul class="list-group">
                        <li class="list-group-item">
                          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                          <label class="form-check-label" for="firstCheckbox"></label>
                        </li>
                      </ul>
                    <div class="card-body">
                      <h5 class="card-title">${taskListArray[0]}</h5>
                      <p class="card-text">${taskListArray[1]}</p>
                      <a href="#" class="btn btn-danger">Done/Delete</a>
                    </div>
                  </div>`
               

                
}




