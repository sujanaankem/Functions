 // Function with default parameter
    function greet(name = "Guest") {
      alert("Hello, " + name + "!");
    }

    function showMessage() {
      // Calling without passing a value → uses default "Guest"
      greet();

      // Calling with a value → uses given value
      greet("Sujana");
    }