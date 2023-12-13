let x=10;
let y=x;
x=20;
console.log(y);

let user= {
    name: "hafsa",
    email: "hafsa@gmail.com"
};

let anotherUser=user; //this will create a shallow copy
let User2=Object.assign({}, user); //this will create a deep copy
user.name="khadija";
console.log(anotherUser);
console.log(User2);

