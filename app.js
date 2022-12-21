//role attribute is for special people to access website

//setting button wiring: saves the users input
//resent button wiring: resets the users input


var studentArray = [];
var studentID =  0;

function getHandleValue(idName) {
    
    const value = parseInt(document.getElementById(idName).value);
    console.log(value);
    return value;

}
    function getTotal() {
        //console.log("app js starts loading")
        let english = getHandleValue('english');
        let math = getHandleValue('math');
        let physics = getHandleValue('physics');
        let computer = getHandleValue('computer');
        let science = getHandleValue('science');
        //console.log("app js ends loading")
        let total = english + math + physics + computer + science;
        document.getElementById('total').innerHTML = total;
        return total;

    }

    function getAverage() {
        // option  1
        // const total = parseInt(document.getElementById('total').innerHTML);
        // const average = total / 5;
        // document.getElementById('average').innerHTML = average;

        // option 2
        const average = getTotal() / 5;
        document.getElementById('average').innerHTML = average;
    }

    function addStudent()  {
    // first task  - get handle for all the subjects
    let english = getHandleValue('english');
    let math = getHandleValue('math');
    let physics = getHandleValue('physics');
    let computer = getHandleValue('computer');
    let science = getHandleValue('science');

    // need to care for the student  id
    studentID++; // studentID = studentID + 1

    // second task - add this data into an array
    const studentObject = {
        studentID : studentID,
        english: english,
        math: math,
        physics: physics,
        computer: computer,
        science : science
      };

    studentArray.push(studentObject);
    console.log('student array size is : ' + studentArray.length);
    renderStudentList();
    }

    function renderUI(studentID, english, math, physics, computer, science) {
        const display = `
    
        <div class='student' id=${studentID}>
           <h1>Student ID: ${studentID} </h1>
           <br>
           <h4>English Grade: ${english}</h4>
           <h4>Math Grade: ${math}</h4>
           <h4>Physics Grade: ${physics}</h4>
           <h4>Computer Grade: ${computer}</h4>
           <h4>Science Grade: ${science}</h4> 
           <input type='button' value='Delete' class="delete">
           <input type='button' value='Edit' class="edit">
       </div>
       <br>
       

        `
        
        return display;
    }

    function renderStudentList() {
        let studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
        for (studentIndex =0; studentIndex < studentArray.length; studentIndex++) {

            //console.log(studentArray[studentIndex].studentID)
            studentList.innerHTML = studentList.innerHTML + 
                 renderUI(studentArray[studentIndex].studentID,
                          studentArray[studentIndex].english,
                          studentArray[studentIndex].math,
                          studentArray[studentIndex].physics, 
                          studentArray[studentIndex].computer,
                          studentArray[studentIndex].science);

        }
    }
    
    let studentList = document.getElementById('studentList');
    // one form when you just need to call a function
    //studentList.addEventListener('click', myButtons);
    // second form when you pass a param 
    studentList.addEventListener('click', (event) => { // "event" here is the event parameter
        const clickedEvent = event.target;
        console.log(clickedEvent.value);
        //console.log(clickedEvent);
        const parentNode = clickedEvent.parentNode;
        const studentID = parseInt(parentNode.id);
        if (clickedEvent.value === 'Delete') {
            // we are going to use splice to remove elements
            if (studentArray.length !== 0) {
                //const indexToDelete = studentID - 1;
                // find the student id
                let indexToDelete = -1;
                for (studentIndex =0; studentIndex < studentArray.length; studentIndex++) {
                    if (studentArray[studentIndex].studentID === studentID) {
                        indexToDelete = studentIndex;
                        break;
                    }
                }
                studentArray.splice(indexToDelete,1)
                renderStudentList()
            }

        }else if (clickedEvent.value === 'Edit') {
            alert('code pending');
        }else {
            alert('button is not supported')
        }

    
    })
