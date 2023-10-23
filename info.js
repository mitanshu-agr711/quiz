let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (event) => {

    let name = event.target.username.value;
    let email = event.target.email.value;
    let section = event.target.section.value;
    let roll = event.target.roll.value;
    var userDetails = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    var checkStatus = 0;
    for (let v of userDetails) {
        if (v.email == email || v.roll == roll) {
            checkStatus = 1;
            break;
        }
    }
    if (checkStatus == 1) {
        alert("email or roll no. already exists")
    }


    // var userDetails = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    if (checkStatus == 0) {
        let userData = {
            'name': name,
            'email': email,
            'section': section,
            'roll no.': roll
        };
        userDetails.push(userData);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
    event.target.reset();
    event.preventDefault();
});
form.location.href = "/feedback.html";
// let displayData = () => {
//     let data = JSON.parse(localStorage.getItem("userDetails")) ?? [];
//     let finaldata = '';

// }
//``it is used where we want access the id or class by using $ sign
//for each give us element and index value of element
// displayData();
//  localStorage.clear();