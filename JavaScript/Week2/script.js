var user = {
    firstName:"Mikey",
    lastName: "Moore",
    middleName: null,
    email: 'mikey@mooreIT4u.com',
}

var element = document.getElementById("test");

element.innerHTML = 'This text has been modified using Javascript';

var color = document.getElementById('test2');
color.style.backgroundColor = 'blue';
color.innerHTML = user.firstName + ' ' + user.lastName;