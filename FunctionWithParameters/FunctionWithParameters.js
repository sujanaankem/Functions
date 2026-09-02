// Function with parameters
function greetUser(name, age) {
  return "Hello " + name + "! You are " + age + " years old.";
}

// Function triggered by button click
function showMessage() {
  let nameValue = document.getElementById("nameInput").value;
  let ageValue = document.getElementById("ageInput").value;
  
  // Call function with parameters
  let message = greetUser(nameValue, ageValue);
  
  // Display result
  document.getElementById("output").textContent = message;
}
