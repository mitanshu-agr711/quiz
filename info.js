let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (event) => {
    
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
    event.preventDefault(); 
});
let displayData=()=>
{
    let data=JSON.parse(localStorage.getItem("userDetails")) ?? [];
   let finaldata= '';
   data.forEach((element,i)=>
   {

   })
}
//for each give us element and index value of element
 displayData();
