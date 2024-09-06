const navBtns = document.querySelectorAll(".btn");
const home = document.querySelector("#home");
const marketplace= document.querySelector("#marketplace");
const contract = document.querySelector("#contract");
highlightColor="black";
navBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {
        if(btn.id=="home"){
            home.style.textDecoration= "underline";
            home.style.textDecorationThickness="3px"; 
            home.style.textUnderlineOffset= "5px"; 
            home.style.transition="0.1s ease";
           
            marketplace.style.textDecoration= "none";
          
            contract.style.textDecoration= "none";
           
        }
        else if(btn.id=="marketplace"){
          home.style.textDecoration= "none";
         
          marketplace.style.textDecoration= "underline";
          marketplace.style.textDecorationThickness="3px";  
          marketplace.style.textUnderlineOffset= "5px"; 
          marketplace.style.transition="0.1s ease";
        
          contract.style.textDecoration= "none";
          
        }
        else if(btn.id=="contract"){
          home.style.textDecoration= "none";
         
          marketplace.style.textDecoration= "none";

          contract.style.textDecoration= "underline";
          contract.style.textDecorationThickness="3px";
          contract.style.textUnderlineOffset= "5px";   
          contract.style.transition="0.1s ease";
           
        }
    });
});
/*navbar RESTRUCTURE-----------------------------------------------------------------
const width = window.innerWidth;
if (width <= 650) {
  document.querySelector(".links").style.innerHTML=`
  <figure id="logo"></figure>
         
  <div class="searchProfile">  
     <div class="searchContainer">
           <div style="width: fit-content"><input type="search" placeholder="Search..." class="searchInput"></div>
           <button class="searchBtn"><i class="bi bi-search"></i></button>
     </div>
     <div class="profile">
           <p>Profile&nbsp;</p>
           <div class="fa-solid fa-user" id="profileBtn"></div>
     </div>
  </div>

   `}
else{
  document.querySelector(".navbar").innerHTML=`
            <figure id="logo"></figure>
                   
            <div class="searchProfile">  
               <div class="searchContainer">
                     <div style="width: fit-content"><input type="search" placeholder="Search..." class="searchInput"></div>
                     <button class="searchBtn"><i class="bi bi-search"></i></button>
               </div>
               <div class="profile">
                     <p>Profile&nbsp;</p>
                     <div class="fa-solid fa-user" id="profileBtn"></div>
               </div>
              </div>
  
              <div class="links">
                 <button href="#" class="btn" id="home">Home</button>
                 <button href="" class="btn" id="marketplace">Marketplace</button>
                 <button href="" class="btn" id="contract">Contract</button>
               </div>`
    }  
*/
//navbar buttons-----------------------------------------------------------------
//Manual + automatic slideshow-----------------------------------------------------------------

//setInterval(changeImage, 5000); doesnt show img for first 5 sec, so didn't use


const images=["images/topDecor1.png", "images/topDecor2.png", "images/topDecor3.png"]; // Array of image URLs
const screensize=window.innerWidth;
topDecor=document.querySelector(".topDecor");
let currentImageIndex = 0;
changeImage();
function changeImage() {
  topDecor.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(changeImage, 7000); // Change image every 5 seconds (5000 milliseconds) 
}

//--------profileName---------------------------
import { username } from './mainPage.js';
document.addEventListener('DOMContentLoaded', () => {
    // Get the stored email from localStorage
    const storedEmail = localStorage.getItem('userEmail');

    // Find the profile name element
    const nameProfile = document.getElementById('nameProfile');

    if (storedEmail) {
        // Extract the part before the '@' symbol
        const username = storedEmail.split('@')[0];
        nameProfile.textContent = `${username}`;
    } else {
        nameProfile.textContent = 'Profile';
    }
});

