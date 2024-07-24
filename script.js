function lgncheck(){
    const userId = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    var correctUsername = "Aptech";
    var correctPassword = "Aptech1111";
    if (userId === "" , password === "") {
        alert("Fields cannot be empty");
    } 
    else if (userId == correctUsername , password == correctPassword) {
        alert("Login successful");
        window.location.replace("dashboard.html");
    } 
    else {
        alert("Wrong username or password");
    };
}
