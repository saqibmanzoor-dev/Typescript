// function sum(a : number , b : number) : number{

//     return a + b
// }


function greet(name:string):string{
    
    return "Hello " + name
}

function isEven(x : number) : boolean{

    if( x % 2 == 1){ return  false}

    return true 

}

// Interfaces and types define custom object shapes.
// An optional property uses `?`, so it does not have to be provided.


interface Address{
        
        city : string;
        country : string;
        pincode : number;
    }


interface User{
    name:string;
    age : number;
    address?:Address;
    
}

interface Office{
   address: Address;
}






 let user : User = {
        name:"saqib",
    age : 20,
    address: {
        city : "kupwara",
        country : "india",
        pincode : 103333
    }

 }

 let user2: User={
    name : "saqib",
    age : 21

 }

//  function isLegal( user: User): boolean{

//     if(user.age > 18){
//         return true;
//     }
//     return false;
//  }

 interface People{
    name : string,
    age: number,
    isLegal():boolean,
    
 }

//  const people:People={
//     name:"saqib",
//     age : 21,
//     // greet:()=>{
//     //     return " hii "
//     // }
//  }

 // `implements` checks that this class provides every member of People.
 class Manager implements People{

    name :string ;
    age : number;  // surely exist 

    number : string  // optional



    constructor(name : string , age : number ){

        this.name  = name;
        this.age = age ;
        this.number ="number";
    }
    isLegal(): boolean {
        return this.age > 18
    }

 }

  let user4 = new Manager("saqib" , 20);


  console.log(user4.age)
