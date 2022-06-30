// let firstName = "Michal";
// let lastName = "Peter";

// let sayHi = {
//     firstName : 'zoe',
//     lastname : 'lisa',
//     greet:function(){
//         return `say hi To ${firstName} ${lastNAme}`;
//     }
// }
// console.log(sayHi.greet());
// say hi to Michal Peter

let firstName = "Michal";
let lastName = "Peter";

let sayHi = {
  firstName: "Zoe",
  lastName: "Lisa",
  greet: function () {
    return `Say Hi To ${this.firstName} ${this.lastName}`;
  },
};

console.log(sayHi.greet());
// Say hi Zoe Lisa
