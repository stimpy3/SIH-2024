const navBtns = document.querySelectorAll(".btn");
const home = document.querySelector("#home");
const marketplace= document.querySelector("#marketplace");
const contract = document.querySelector("#contract");
highlightColor="black";
navBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {
        if(btn.id=="home"){
            home.style.backgroundColor = highlightColor;
            home.style.color = "white";
            home.style.transition="0.1s ease";
           
            marketplace.style.backgroundColor = "white";
            marketplace.style.color = "black";
          
            contract.style.backgroundColor = "white";
            contract.style.color = "black";
           
        }
        else if(btn.id=="marketplace"){
            home.style.backgroundColor = "white";
            home.style.color = "black";
           
            marketplace.style.backgroundColor = highlightColor;
            marketplace.style.color = "white";
            marketplace.style.transition="0.1s ease";
           
            contract.style.backgroundColor = "white";
            contract.style.color = "black";
          
        }
        else if(btn.id=="contract"){
            home.style.backgroundColor = "white";
            home.style.color = "black";
         
            marketplace.style.backgroundColor = "white";
            marketplace.style.color = "black";
           
            contract.style.backgroundColor = highlightColor;
            contract.style.color = "white";
            contract.style.transition="0.1s ease";
           
        }
    });
});

