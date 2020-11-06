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

    createPetRequest(petInfo: PetInfo) {
        this.request.push(petInfo);
    }

    getPetRequest() {
        return this.request;
    }

    petRequestStatus(petObj) {
        let checkAvail = new PetAvailable();
        let len = 5;
        if (this.request.length < len) {
            len = this.request.length;
        }
        let petsData = petObj.petsDetail();
        for (let i = 0; i < len; i++) {
            petsData.forEach(ele => {
                if (ele.petType.toLowerCase() == this.request[i].petType.toLowerCase()) {
                    if (ele.quantity > this.request[i].quantity) {
                        console.log(`Request for ${this.request[i].quantity} ${ele.petType} is fulfilled`);
                        let petAvailCount = ele.quantity - this.request[i].quantity;
                        petObj.changePetCount(ele.petType, petAvailCount);
                    } else {
                        console.log(`Request for ${this.request[i].quantity} ${ele.petType} is not fulfilled because ${ele.quantity} ${ele.petType} are left in the shop`);
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
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 5
});
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 3
});
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 1
});
requestPet.createPetRequest({
    petType: 'Dogs',
    quantity: 25
});
console.log(requestPet.getPetRequest());
requestPet.petRequestStatus(petAvailable);

console.log(petAvailable.petsDetail());