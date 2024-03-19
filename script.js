let singupBtn = document.getElementById("singupBtn");
let singinBtn = document.getElementById("singinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


singinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    nameField2.style.maxHeight = "0";

    title.innerHTML = "Sign In";
    singupBtn.classList.add("disable");
    singinBtn.classList.remove("disable");

}

singupBtn.onclick = function(){
    nameField.style.maxHeight = "";
    nameField2.style.maxHeight = "";
    title.innerHTML = "Sign Up";
    singupBtn.classList.remove("disable");
    singinBtn.classList.add("disable");

}


