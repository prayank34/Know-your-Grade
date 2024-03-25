
document.addEventListener("DOMContentLoaded", function() {
    alert("hello , Let's check out what grade you have got");

let grades = prompt("enter your score (40-100)");

if (grades >= 80 && grades <= 100){
    alert("A");
    console.log("A");
}

else if (grades >= 70 && grades <= 89){
    alert("B");
    console.log("B");
}

else if (grades >= 60 && grades <= 69 ){
    alert("C");
    console.log("C");
}

else if (grades >= 50 && grades <= 59 ){
    alert("D");
    console.log("D");
}

else if (grades >= 40 && grades <= 49 ){
    alert("E");
    console.log("E");
}

alert("Thank You");
});
