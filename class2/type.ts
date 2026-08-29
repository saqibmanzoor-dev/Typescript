// A type alias gives a reusable name to an object shape.
type User ={
    name : string ,
    age : number
}


type Student={
    name : string,
    age : number,
    grade : string
}

// `&` creates a type that must include both User and Student properties.
type lead = User & Student;


let x:lead={
   name : "saqib",
   age : 21,
   grade : "A"

}

type GoodUser = {
    name : string,
    gifts : string
}

type BadUser = {
    name: string,
    ip:string
      
}

// `|` allows a value to match either of these object types.
type User1 = GoodUser | BadUser;

const user: User1 = {

    name: "saqib",
    gifts: "123",
    ip:"12333"

}
