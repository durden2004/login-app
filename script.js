function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Login Successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Invalid Credentials!";
    }

    return false;
}