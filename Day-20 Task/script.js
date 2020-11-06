var PetAvailable = /** @class */ (function () {
    function PetAvailable() {
        this.pets = [];
    }
    PetAvailable.prototype.insertPet = function (petInfo) {
        this.pets.push(petInfo);
    };
    PetAvailable.prototype.petsDetail = function () {
        return this.pets;
    };
    PetAvailable.prototype.changePetCount = function (petType, count) {
        this.pets.forEach(function (ele) {
            if (ele.petType == petType) {
                ele.quantity = count;
            }
        });
    };
    return PetAvailable;
}());
var PetRequest = /** @class */ (function () {
    function PetRequest() {
        this.request = [];
    }
    PetRequest.prototype.createRequest = function (petInfo) {
        this.request.push(petInfo);
    };
    PetRequest.prototype.getRequest = function () {
        return this.request;
    };
    PetRequest.prototype.requestStatus = function () {
        var _this = this;
        var checkAvail = new PetAvailable();
        var petObj = checkAvail.petsDetail();
        var len = 5;
        if (this.request.length < len) {
            len = this.request.length;
        }
        var _loop_1 = function (i) {
            petObj.forEach(function (ele) {
                console.log(ele.petType.toLowerCase(), _this.request[i].petType.toLowerCase());
                if (ele.petType.toLowerCase() == _this.request[i].petType.toLowerCase()) {
                    if (ele.quantity > _this.request[i].quantity) {
                        console.log("Request of " + ele.petType + " of quantity " + _this.request[i].quantity + " is fulfilled");
                        var petAvailCount = ele.quantity - _this.request[i].quantity;
                        checkAvail.changePetCount(ele.petType, petAvailCount);
                    }
                    else {
                        console.log("Request of " + ele.petType + " of quantity " + _this.request[i].quantity + "\n                         is not fulfilled because " + ele.quantity + " " + ele.petType + " are left in the shop");
                    }
                }
            });
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    };
    return PetRequest;
}());
var petAvailable = new PetAvailable();
petAvailable.insertPet({
    petType: 'Cats',
    quantity: 20
});
petAvailable.insertPet({
    petType: 'Dogs',
    quantity: 10
});
console.log(petAvailable.petsDetail());
var requestPet = new PetRequest();
requestPet.createRequest({
    petType: 'Cats',
    quantity: 5
});
requestPet.createRequest({
    petType: 'Cats',
    quantity: 3
});
requestPet.createRequest({
    petType: 'Cats',
    quantity: 1
});
requestPet.getRequest();
requestPet.requestStatus();
console.log(petAvailable.petsDetail());
