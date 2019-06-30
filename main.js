function onRegisterSubmit(){
    //After the user has submitted the registration form, register a new Simple User:
    PlayerIO.useSecureApiRequests = true;
    PlayerIO.useSecureConnections = true;
    let regex = /([A-Z]|[a-z]|[0-9]|-|_|\.)+/g
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(username.length < 4 || username.length > 24 || !regex.test(username))
    {
        document.getElementById("output").innerHTML = "Error: Username doesn't use alphanumeric symbols, is less than 4 characters, or is more than 24.";
        return;
    }

    if(password.length < 6 || password.length > 30)
    {
        document.getElementById("output").innerHTML = "Error: Password is less than 6 characters, or is more than 30.";
        return;
    }

    PlayerIO.authenticate(
        "the-robocraft-project-749pkx2pbeablz84ua3hkg",
        "public",                                   //A connection with the authentication type SimpleUsers
        {
            register: "true",
            username: username,
            password: password,
            email: document.getElementById("email").value
        },
        {},
        function (client) {
            document.getElementById("output").innerHTML = "<h1>Success! Welcome to The Robocraft Project!</h1>\n<p>Have fun!</p>";
        },
        function (error) {
            document.getElementById("output").innerHTML = "Failed to register! Error: " + error.message;
        }
    );
}