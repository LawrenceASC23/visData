const num_users = data.info.results;
const counter = document.querySelector("#counter");
const previous_button = document.querySelector("#previous");
const next_button = document.querySelector("#next");


previous_button.addEventListener("click", previous);
next_button.addEventListener("click", next);


let i = 0;
updatePage();

function updatePage() {
    user = data.results[i];

    // update counter (top right)
    counter.innerHTML = `(${i+1}/${num_users})`;

    // section 1 (left)
    document.querySelector("#name").innerHTML = `${user.name.first} ${user.name.last}`;
    document.querySelector("img").src = user.picture.large;
    document.querySelector("#street").innerHTML = `${user.location.street.number} ${user.location.street.name} St`;
    document.querySelector("#city").innerHTML = `City: ${user.location.city}`;
    document.querySelector("#state").innerHTML = `State: ${user.location.state}`;

    // section 2 (right)
    document.querySelector("#gender").innerHTML = `Gender: ${user.gender}`;
    document.querySelector("#dob").innerHTML = `DOB: ${user.dob.date.slice(0, 10)}`;
    document.querySelector("#email").innerHTML = `Email: ${user.email}`;
    document.querySelector("#phone").innerHTML = `Phone: ${user.phone.replaceAll(" ", "-")}`;
    document.querySelector("#cell").innerHTML = `Cell: ${user.cell.replaceAll(" ", "-")}`;
    console.log(i);
}


function next() {
    if (i < num_users - 1) {
        i++;
    }
    updatePage();
}


function previous() {
    if (i > 0) {
        i--;
    }
    updatePage();
}






