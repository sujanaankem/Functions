// Array to store student names
let students = [];

// Function to bind array content to UI
function bindArrayToUI() {
  let list = document.getElementById("studentList");
  list.innerHTML = ""; // clear old list

  students.forEach(function(student) {
    let li = document.createElement("li");
    li.textContent = student;
    list.appendChild(li);
  });
}

// Function to add a student
function addStudent(name) {
  students.push(name);
  bindArrayToUI(); // update UI
}

// Function to remove the last student
function removeStudent() {
  students.pop();
  bindArrayToUI(); // update UI
}

// Handler for Add button
function handleAdd() {
  let nameInput = document.getElementById("studentName");
  let name = nameInput.value.trim();

  if (name !== "") {
    addStudent(name);
    nameInput.value = "";
  } else {
    alert("Please enter a name!");
  }
}

// Handler for Remove button
function handleRemove() {
  if (students.length > 0) {
    removeStudent();
  } else {
    alert("No students to remove!");
  }
}
