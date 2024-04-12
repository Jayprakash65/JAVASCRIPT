
var c = 200      

if (true) {
    let a = 20
    const b = 32         // bracket kai andar ko hi scope kahte hai ey locl scope hai : local mai jo bhi likha ho wo bhar acess nahi kar skate but global mai jo likha hai usko kar skate hai 
    var c = 40
}

//console.log(a);  //ey print nahi hua 
//console.log(b);  // ey bhi nahi hua 
//console.log(c);    // ey ho gaya isley hame var use nahi karma chiey samjho agr 10 log ek sath ek project mai kam kar rahe hai tab ek hi variable ko jabb declare kareney tho bahut problem hogi vasey hamne ek var c = 200  declar kiya but c ka value 300 print hi nahi hoga or ham debug karte karte tahnk jayengey so var use nahi karna hai.


//-----------------------------------------------------------------

let a = 300

if (true) {
    let a = 20
    const b = 32       
   //console.log("innner:", a);
}

 //console.log(a);   // outupt 300 aya not 20 thats good eyho scope hai ki gobal ko ha acess kar skate hai but local scope ko bhar acess nahi kar sakte hai acess akrne kai ley usey scope kai andar hi console karna hoga.



//+++++++++++++++++++++++++++++++++++++++++++ Nested Scope +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 function one(){
    const username = "jay"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website)

    two()
 }

 one()





 if (true) {

    const username = 'prakash'
    if (username === "prakash") {
        const website  = "insta"
        //console.log(username + website);
    }
    //console.log(website);                 // print nahi hoga print hame scope ke 2nd if ke andar karna hota hai 
 }

 //console.log(username);





 // ++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++


 console.log(addone(5));
 function addone(num){
    return num + 1
 }


 
 addtwo(5)          // jab ham function ko call kare declare sai pahale tho is sytax mai error dega nut previous wale synatax mai nahi dega 
 const addtwo = function(num){
    return num + 2
 }

 //output : Cannot access 'addtwo' before initialization