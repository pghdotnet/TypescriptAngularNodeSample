
// Reused business logic and data structure from the server
var DefaultLogger = (function () {
    function DefaultLogger() {
    }
    DefaultLogger.prototype.log = function (text) {
        console.log(text);
    };
    return DefaultLogger;
})();

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


// The controller class. Note that it uses Angular's dependency injection to
// get the $http service (for http requests) and the logger (see above).
//
var RegistrationsViewModel = (function () {
    function RegistrationsViewModel($scope, $http, logger) {
        this.logger = logger;
        $scope.registrations = new Array();
        $scope.refresh = function () {
            logger.log("Requesting...");
            $http.get("/api/registrations").success(function (registrations) {
                registrations.forEach(function (r) {
                    return $scope.registrations.push(r);
                });
            });
        };
    }
    return RegistrationsViewModel;
})();
//# sourceMappingURL=registrations.js.map
