const navBtns = document.querySelectorAll(".btn");
const home = document.querySelector("#home");
const marketplace= document.querySelector("#marketplace");
const contract = document.querySelector("#contract");

navBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {
        if(btn.id=="home"){
            home.style.backgroundColor = "black";
            home.style.color = "white";
            marketplace.style.backgroundColor = "white";
            marketplace.style.color = "black";
            contract.style.backgroundColor = "white";
            contract.style.color = "black";
        }
        else if(btn.id=="marketplace"){
            home.style.backgroundColor = "white";
            home.style.color = "black";
            marketplace.style.backgroundColor = "black";
            marketplace.style.color = "white";
            contract.style.backgroundColor = "white";
            contract.style.color = "black";
        }
        else if(btn.id=="contract"){
            home.style.backgroundColor = "white";
            home.style.color = "black";
            marketplace.style.backgroundColor = "white";
            marketplace.style.color = "black";
            contract.style.backgroundColor = "black";
            contract.style.color = "white";
        }
    });
});
