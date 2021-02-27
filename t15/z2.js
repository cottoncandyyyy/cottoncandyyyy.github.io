const user = {
    name: "Ася"
    lastName: "Ладнюк"
    age: 13,
    email: "ladnukasa@gmail.com"
    city: "Львів"
}

function showUser(){
    const usr_data = document.getElementById('user_data');


    usr_data.innerHTML =

    <tr>
        <td>${user.name}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.city}</td>
        
    </tr>
}

function changeName(new_name){
    user.name = new_name;
}
function changeLastName(new_lastName){
    user.lastName = new_lastName;
}
function changeAge(new_age){
    user.age = new_age;
}
function changeEmail(new_email){
    user.email = new_email;
}
function changeCity(new_city){
    user.city = new_city;
}
console.log("test")