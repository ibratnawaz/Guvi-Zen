interface petInfo{
    petType:string;
    quantity:number;
}

class PetAvailable{
    pets:Array<petInfo>;
    
    constructor(){
        // this.pets.push(petInfo);
    }

    insertPet(petInfo:petInfo){
        this.pets.push(petInfo);
    }

    petsDetail(){
        return this.pets;
    }
}

let petAvailable=new PetAvailable();
petAvailable.insertPet({petType:'Cats',quantity:20});
console.log(petAvailable.petsDetail());