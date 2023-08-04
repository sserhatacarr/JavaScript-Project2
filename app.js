// Function to add a new task to the list
function newElement() {
    var inputValue = document.getElementById("task").value;
    if (inputValue === '') {
      showErrorToast("Listeye boş ekleme yapamazsınız!");
    } else {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(inputValue));
      document.getElementById("list").appendChild(li);
      document.getElementById("task").value = "";
      showSuccessToast("Listeye eklendi.");
      updateLocalStorage();
    }
  }
  
  // Function to show a success toast
  function showSuccessToast(message) {
    var successToast = document.querySelector(".success.toast");
    successToast.querySelector(".toast-body").textContent = message;
    var bsToast = new bootstrap.Toast(successToast);
    bsToast.show();
  }
  
  // Function to show an error toast
  function showErrorToast(message) {
    var errorToast = document.querySelector(".error.toast");
    errorToast.querySelector(".toast-body").textContent = message;
    var bsToast = new bootstrap.Toast(errorToast);
    bsToast.show();
  }
  
  // Function to mark a task as done
  function taskDone(task) {
    task.classList.toggle("checked");
    updateLocalStorage();
  }
  
  // Function to remove a task from the list
  function removeTask(task) {
    task.parentNode.removeChild(task);
    updateLocalStorage();
  }
  
  // Function to update Local Storage with task list
  function updateLocalStorage() {
    var tasks = document.querySelectorAll("#list li");
    var taskList = [];
    tasks.forEach(function(task) {
      taskList.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }
  
  // Load tasks from Local Storage on page load
  window.onload = function() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      var ul = document.getElementById("list");
      storedTasks.forEach(function(task) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
      });
    }
  };
  