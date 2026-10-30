function greetUser() {
    let userName = document.getElementById("name").value;

    document.getElementById("result").innerText =
        "Welcome " + userName + "!";
}