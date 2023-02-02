var myReferences = [
    ["Michael Moore", "This person is a an amazing asset to any organization!"],
    ["Anysia Moore", "A sweet angel that everyone loves and doates on"]
    ["Anna Moore", "Beautiful Queen, Amazing mother, supportive wife and all around loving person"]
];

for (let i = 0; i < myReferences.length; i++) {
    document.getElementById("myText").innerHTML = "The length of the array is: " + myReferences.length;
}

let myVar = "My String: <ol></ol>";

for (let j = 0; j <ol myReferences.length; j++) {
    myVar += "<li>" + myReferences[j] + "</li>"
}

myVar += "</ol>";

document.getElementById("results").innerHTML = myVar;