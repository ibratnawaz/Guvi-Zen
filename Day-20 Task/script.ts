interface PetInfo {
    petType: string;
    quantity: number;
}

class PetAvailable {
    pets: Array < PetInfo > ;

    constructor() {
        this.pets = [];
    }

    insertPet(petInfo: PetInfo) {
        this.pets.push(petInfo);
    }

    petsDetail(): Array < PetInfo > {
        return this.pets;
    }

    changePetCount(petType: string, count: number) {
        this.pets.forEach(ele => {
            if (ele.petType == petType) {
                ele.quantity = count;
            }
        });
    }
}

class PetRequest {
    request: Array < PetInfo > ;

    constructor() {
        this.request = [];
    }

    createRequest(petInfo: PetInfo) {
        this.request.push(petInfo);
    }

    getRequest(){
        return this.request;
    }

    requestStatus() {
        let checkAvail = new PetAvailable();
        let petObj = checkAvail.petsDetail();
        let len = 5;
        if (this.request.length < len) {
            len = this.request.length;
        }
        for (let i = 0; i < len; i++) {
            petObj.forEach(ele => {
                console.log(ele.petType.toLowerCase(),this.request[i].petType.toLowerCase());
                if (ele.petType.toLowerCase() == this.request[i].petType.toLowerCase()) {
                    if (ele.quantity > this.request[i].quantity) {
                        console.log(`Request of ${ele.petType} of quantity ${this.request[i].quantity} is fulfilled`);
                        let petAvailCount = ele.quantity - this.request[i].quantity;
                        checkAvail.changePetCount(ele.petType, petAvailCount);
                    } else {
                        console.log(`Request of ${ele.petType} of quantity ${this.request[i].quantity}
                         is not fulfilled because ${ele.quantity} ${ele.petType} are left in the shop`);
                    }
                }
            });
        }
    }
}

let petAvailable = new PetAvailable();
petAvailable.insertPet({
    petType: 'Cats',
    quantity: 20
});
petAvailable.insertPet({
    petType: 'Dogs',
    quantity: 10
});
console.log(petAvailable.petsDetail());

let requestPet = new PetRequest();
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