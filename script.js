//project 1


// let btn = document.getElementById('new');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [
//     {
//         quote: `'Do I not destroy my enemies when I make them my friends?'`,
//         person:`Mahatma Gandhi`
//     },
//     {
//         quote:`'America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.'`,
//         person:'Abraham Lincoln'
//     },
//     {
//         quote:`'My Best Friend is a person who will give me a book I have not read.'`,
//         person:`Aristotle`
//     },
//     {
//         quote:`'My concern is not whether God is on our side; my greatest concern is to be on God\'s side, for God is always right.'`,
//         person:`Steve Jobs`
//     },
//     {
//         quote:`“My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.”`,
//         person:`Benjamin Franklin`
//     },
//     {
//         quote:`“Books serve to show a man that those original thoughts of his aren't very new after all.”`,
//         person:`Ben James`
//     },

// ];

// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random() * quotes.length);
//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;

// })


//---------------Project 2-----------


// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn')

// openBtn.addEventListener('click', function(){
//     modalContainer.style.display = 'block';
// })
// closeBtn.addEventListener('click',function(){
//     modalContainer.style.display = 'none';
// })
// window.addEventListener('click', function(e){
//  if(e.target === modalContainer){
//     modalContainer.style.display = 'none';
//  }
// })



//-----------------Project 3 ------------------


// const accordion = document.getElementsByClassName('content-container');

// for(i =0;i<accordion.length;i++){
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//     })
// }


//-----------Project 4 ------------------



// const startStop = document.querySelector('#startStopBtn');
// const resetBtn = document.querySelector('#resetBtn');

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let leadingSec =0;
// let leadingMin = 0;
// let leadinghours =0;

// let timerInterval = null;
// let timerStatus = "stopped";

// function stopWatch() {

//     seconds++
//     if(seconds/60 === 1){
//         seconds = 0;
//         minutes++;
//         if(minutes/60 === 1){
//             minutes = 0;
//             hours++;
//         }
//     }
//     if(seconds <10){
//         leadingSec = "0"+seconds.toString();
//     }else{
//         leadingSec = seconds;
//     }

//     if(minutes <10){
//         leadingMin = "0"+minutes.toString();
//     }else{
//         leadingMin = minutes;
//     }

//     if(hours <10){
//         leadinghours = "0"+hours.toString();
//     }else{
//         leadinghours = hours;
//     }

//     let displayTimer = document.getElementById('timer').innerText = leadinghours + ":"+leadingMin+":"+leadingSec;

// }
// //window.setInterval(stopWatch, 1000)



// startStop.addEventListener('click',function(){
//     if(timerStatus === 'stopped'){
//         timerInterval =  window.setInterval(stopWatch,1000);
//         // if playing then to stop changing icon to pause
//         document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
//         timerStatus="started";
//     }else{
//         window.clearInterval(timerInterval);
//         //pause changing icon to play
//         document.getElementById('startStopBtn').innerHTML =`<i class="fa-solid fa-play" id="play"></i>`;
//          timerStatus="stopped"
//     }
// })


// resetBtn.addEventListener('click', function(){
//     window.clearInterval(timerInterval);
//     seconds=0;
//     minutes=0;
//     hours=0;
//     document.getElementById('timer').innerHTML= "00:00:00"
// })






//----------Final Project----------------------

    

const addTask = document.getElementById('add-task');
const taskContainer =document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML= '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);


    let deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if(inputTask.value === ''){
        alert('Please Enter task');
    }
    else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = 'line-through';
    })
    deleteButton.addEventListener('click',function(e){
   let target = e.target;
   target.parentElement.parentElement.remove();
    })
});