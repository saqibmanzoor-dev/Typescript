// interface User{
//     id: string,
//     name:string,
//     age : number,
//     email: string,
//     password : string,

// } 
// READ ONLY

// type User = {
//     readonly name: string, 
//     readonly age : number
// }
// type User = {
//  name: string,  age : number
// }
// const user:Readonly<User> = {
//     name : 'saqib',
//     age : 24  

// }

// user.name ="bhalt " gives error due to readonly

// const  a = [ saq@1 , 2  , 5 , 6]

// a[0] = 4;





// // const user:User = User.findOne({where : {email : "saqib"}})  // data base call
//  type  UpdateProps = Pick<User , 'name' | 'age' | 'email' >

//  type updatedPropsOptional = Partial<UpdateProps>
  

// function updateUser(updatedProps : updatedPropsOptional){
//      // hit the database to update the user

      
// }
 





// function SumOfAge(A : User , B: User) : number{

//     return A.age + B.age
// }

// const age = SumOfAge({name:"saqib" , age : 20} ,{name:"saqib" , age : 20} )

// console.log(age);





// Record and Map: ways to store values using named keys.


// type User = {
//     id : string,
//     username : string
// }
// type Users = {
//     [key : string] : User;
// }

    
    // type Users = Record <string ,User>

//   type Users = Record<string , {
//         age : number,
//         name : string
//     }>
 

// const users = {
//     'saq@1' :{
//         id : 'saq@1' ,
//         username : "saqib"
//     },
//     'bas@1' :{
//         id : 'bas@1' ,
//         username : "saqib"
//     },
//     'bhak@123' :{
//         id : 'bhak@123' ,
//         username : "saqib"
//     }
// }



// Map: a JavaScript collection that stores a value for each key.

// A type describes the shape that every user object must follow.
type User = {
    name : string,
    age: number,
    email : string
}
const users = new Map<string , User>()

//  const users = new Map()
users.set("key" ,{
    name: "ras" ,
    age : 30 ,
    email : "rasss@"
})
users.set("key1" ,{
    name: "ras" ,
    age : 30 ,
    email : "rasss@"
})

const user = users.get("key");
const user2 = users.get("key1");


// Exclude: creates a union type after removing one or more options.

// A union type allows one value from this list of string options.
type EventType = "click" | "scroll" | "mousemove" ;


 type ExcludeEvent = Exclude<EventType,'scroll'>; // click  | mousemove


 const handleEvent = (event : ExcludeEvent)=>{
    console.log(`handling Event' : ${event}`);
    
 }
//  handleEvent('scroll')  


// Type inference: TypeScript can often work out types from the values you provide.

