let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let name = event.target.username.value;
    let email = event.target.email.value;
    let section = event.target.section.value;
    let roll = event.target.roll.value;

    var userDetails = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let userData = {
        'name': name,
        'email': email,
        'section': section,
        'roll no.': roll 
    };
    userDetails.push(userData);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log(userDetails);
});
