function SetUsername (username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){

    SetUsername.call(this, username)   // username ko bahr se outsource karo ......  and referce ko hold karne kai ley ham call ka use karte hai 
    
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@gm.com', '1234')
console.log(chai);