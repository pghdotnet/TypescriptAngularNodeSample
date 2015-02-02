// Import express with body parsers (for handling JSON)
var express = require('express');
var bodyParser = require('body-parser');


var Registration = (function () {
    function Registration(registration) {
        this.salutation = registration.salutation;
        this.name = registration.name;
        this.age = registration.age;
    }
    Registration.prototype.isValid = function () {
        return this.age >= 18;
    };
    return Registration;
})();

// Sample repository of registrations (for demo purposes just in memory
var registrations = new Array();
registrations.push({ salutation: "Mr.", name: "Tom Tailor", age: 20 }, { salutation: "Mr.", name: "Max Muster", age: 19 });

// Setup express
var app = express();
app.use(bodyParser());
app.use(express.static("../Client"));

// Uncommend this line to demo basic auth
// app.use(express.basicAuth((user, password) => user == "user2" && password == "password"));
// Implement web API
app.get("/api/registrations", function (req, res) {
    // Get all registrations
    res.send(registrations);
});

// Register
app.post("/api/register", function (req, res) {
    var registration = new Registration(req.body);
    if (registration.isValid()) {
        registrations.push(registration);
        res.send(201);
    } else {
        res.send(400);
    }
});

// Listen for HTTP traffic
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=app.js.map
