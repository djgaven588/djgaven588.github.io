function onRegisterSubmit(){
    //After the user has submitted the registration form, register a new Simple User:
    PlayerIO.useSecureApiRequests = true;
    PlayerIO.useSecureConnections = true;
    PlayerIO.authenticate(
        "the-robocraft-project-749pkx2pbeablz84ua3hkg",
        "public",                                   //A connection with the authentication type SimpleUsers
        {
            register: "true",
            username: document.getElementById("user").value,
            password: document.getElementById("pass").value,
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