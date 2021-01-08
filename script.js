window.onload = function() {
    document.querySelector('#button1').addEventListener("click", Button1);
    document.querySelector('#button2').addEventListener("click", Button2);
    document.querySelector('#hover').addEventListener('mouseover', onHover);
};
// Question 1
function Button1() {
    let clickedButton1 = document.getElementById("container");
    let button1response = document.createElement("section");
    button1response.innerText = "I'm right";
    clickedButton1.appendChild(button1response);
}

function Button2() {
    let clickedButton2 = document.getElementById("container");
    let button2response = document.createElement("section");
    button2response.innerHTML = "No, I'm right!";
    clickedButton2.appendChild(button2response);
}

// Question 2
function onHover() {
    let yellingAtUser = document.createElement("section");
    yellingAtUser.innerHTML = alert("Hey, I told you not to hover over me!");
}


// Question 3 and 4
function submitButton(event) {
    event.preventDefault();
    let belowTheSubmitButton = document.getElementById("q3n4");
    let username = document.getElementById("input1").value;
    let password = document.getElementById("input2").value;
    let addingAH1 = document.createElement("h1");
    belowTheSubmitButton.appendChild(addingAH1);

    for (var i = 0; i <= username.length; i++) {
            //need parse bc originally takes everything as a string, converts to float for comparison
            if (parseFloat(username.length) && parseInt(password) === 12345678){
            addingAH1.innerHTML = "You have sucessfully logged-in.";
        } else if(username.length == ""){
            addingAH1.innerHTML = "You have not entered a username.";

        }else {
            addingAH1.innerHTML = "The combination of username/password is incorrect.";
        }
        
    }
}