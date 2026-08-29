 // `number[]` means an array whose items are numbers.
 function getMax(nums : number[]){

    let maxVal = nums[0];

    for(let i = 0 ; i < nums.length ; i++){
        
        if(nums[i] > maxVal){
            maxVal = nums[i]
        }
    }
    return maxVal
 }

 console.log(getMax([1 , 2 , 4]))


 // An interface can include an array of another interface type.
 interface User{
    name : string,
     age : number,
     addresses : Address[];
 }
 interface Address{
    city : string,
    pincode : number,
 }

  
 interface Users{
    firstName : string,
    lastName: string,
     age : number,
     
 }


 // This function receives an array of Users and returns the adults in it.
 function filterUsers(users:Users[]){
    return users.filter((user)=>{
        return user.age  >18
    })
 }
 
