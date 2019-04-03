// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

function removeDuplicates() {
    'use strict'
    var i = 0;
    var j = 1;
    console.log("remove duplicates");
    for(i=0; i < tasks.length; i++) {
        for(j=1; j < tasks.length; j++) {
            console.log(tasks[j] + tasks[j])
        if (tasks[i] == tasks[j]) {
            tasks.splice(i, 1);
        }
        }
    }
    // Update the page:
    var message = '';
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
}

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    //document.getElementById('removeduplicates').onclick = removeDuplicates();
} // End of init() function.
window.onload = init;