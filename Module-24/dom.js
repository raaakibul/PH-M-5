console.log("Dom");
console.log(document);
// document object model
// document.getElementsByTagName("body");
// const student ={
//     name: "Student",
//     Id: 11,
//     study: function(time){
//         console.log("Study Time");
//     }
// }

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection){
    console.log(li);
}
