  // A union type lets this variable hold either a number or a string.
  let x : number | string = 10;

  // number ,any ,string 
   
   

   // Function parameters can be given a clear type.
   function greet(name : string){
    console.log("hello " + name);
    
   }
   greet("saqib")
  // console.log(x);
  
   // TypeScript infers that this function returns a number.
   function sum(x : number , y : number) {
    return x  + y ;    // return type is inferred
    
  }


interface userType {
    name : string , 
    age : number ,
    // address : {
    //   country : string,
    //   state : string

    }
 
  


  // let fn = ()=>{
  //   console.log("saqib");
    
  // }

  // function anotherFxn(funn:() => void){
  //    setTimeout(funn,1000)
  // }

  //  anotherFxn(fn);
  

  function greetObject(user: userType}){
       console.log("hello " + user.name);
       
   }

  //  greetObject({
  //   name:"saqib",
  //   age : 21 ,
  //   address : {
  //     country : "india ",
  //     state : "jk"
  //   }
  //  })

   let user : userType={
      name:"saqib",
    age : 21
   }

   interface Manager{
        name : string , 
    age : number ,
   }

   interface Employee {
     name : string , 
    age : number , 
    department:string
   }


   type TeamLead = Manager & Employee // joins


   let t:TeamLead= {
    name:"saqib",
    age:21,
    department:'djkjddj'

   }
