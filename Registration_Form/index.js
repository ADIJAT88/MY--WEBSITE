const form = document.getElementById("Logininfo")
const display = document.getElementById("display-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const occupation = document.getElementById("occupation").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value

    const output = `
    <strong>Name:</strong> ${firstname} ${lastname}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Occupation:</strong> ${occupation}<br>
    <strong>Gender:</strong> ${gender}`;

    // display.innerHTML = output;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(occupation);
    console.log(gender);
});