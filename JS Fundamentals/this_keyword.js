//In javascript this keyword refers to an abject

// this in object
const userDetails = {
    username : "sourav78",
    userId : "11728",
    email: "soysv@gmai.in",
    printDetails: function(price){
        console.log(`${this.username} just loged in and ID is ${this.userId}`);
        console.log(`${this.username} has ${price}`)
    }
}

userDetails.printDetails(11202)

const drinkChai = {
    subject: "Do you drink chai",
    sourav : true,
    samit: false,
    dhiren: true,
    manmath: false,
    printAll: function(){
        console.log(this); // in this context this keyword referes all the objects
    }
}

drinkChai.printAll()


// this is function

function fastfood(name){
    console.log(this.name); // --> it returns undefined object
    console.log(name);
    console.log(this); // --> it returns the global objects
}

fastfood("sourav")

// this in global scope

console.log(this); // --> in node environment it returns empty but in browser it returns all global window objects