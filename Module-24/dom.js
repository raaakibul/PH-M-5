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
// li
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection){
    console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings){
    console.log(h1.innerText);
}


