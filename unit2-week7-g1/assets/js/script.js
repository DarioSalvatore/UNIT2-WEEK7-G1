//ESERCIZIO 1:

class User {
    constructor(firstName, lastName, age, location){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.location = location;
    }
    ageCalc(utente2){
        if(this.age > utente2.age){
            return console.log(utente1.firstName + " è più vecchio di " + utente2.firstName);
        }else if (this.age < utente2.age){
            return console.log(utente2.firstName + " è più vecchio di " + utente1.firstName);
        }else{
            return console.log(utente1.firstName + "e" + utente2.firstName + "hanno la stessa età");
        }
    }
}


const utente1 = new User("Luigi", "Trupia", 20, "Favara");
console.log(utente1);


const utente2 = new User("Maria", "DiGiulio", 25, "Novara");
console.log(utente2);

utente1.ageCalc(utente2)

//ESERCIOZIO 2:

class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    sameOwner(pet2){
        if(pet2.ownerName == this.ownerName){
            return console.log(true);
        }else{
            return console.log(false);
        }
    }
}

const Pet1 = new Pet("Cicci", "Anna", "Gatto", "Siberiano");
console.log(Pet1);

const Pet2 = new Pet("Lucas", "Anna", "Cane", "Alano");
console.log(Pet2);

Pet1.sameOwner(Pet2);



