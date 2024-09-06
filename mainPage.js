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

//----------------------------frequently-asked-questions--------------------
let ingredientanswer=document.querySelector("#ingredientanswer");
let openinganswer=document.querySelector("#openinganswer");
let nutfreeanswer=document.querySelector("#nutfreeanswer");
let expirydateanswer=document.querySelector("#expirydateanswer");
let show=document.querySelectorAll(".show");
let ing=document.querySelector("#ing");
let open=document.querySelector("#open");
let nutf=document.querySelector("#nutf");
let expd=document.querySelector("#expd");
let check={
  ingC:0,
  opC:0,
  nuC:0,
  exC:0
};
function ingredient(){
 if(check["ingC"]==0){
 show.forEach(sign =>{
  sign.innerText="+";
 })
 ing.innerText="-";
 ingredientanswer.style.display="block";
 openinganswer.style.display="none";
 nutfreeanswer.style.display="none";
 expirydateanswer.style.display="none";
 check={
  ingC:0,
  opC:0,
  nuC:0,
  exC:0
};
 check["ingC"]=1;
 }
 else if(check["ingC"]==1){
  ing.innerText="+";
 ingredientanswer.style.display="none";
 check["ingC"]=0;
 }
}

function opening(){
  if(check["opC"]==0){
    show.forEach(sign =>{
      sign.innerText="+";
     })
    open.innerText="-";
    openinganswer.style.display="block";
    ingredientanswer.style.display="none";
    openinganswer.style.display="block";
    nutfreeanswer.style.display="none";
    expirydateanswer.style.display="none";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["opC"]=1;
    }
    else if(check["opC"]==1){
     open.innerText="+";
    openinganswer.style.display="none";
    check["opC"]=0;
    }
}

function nutfree(){
  show.forEach(sign =>{
    sign.innerText="+";
   })
  if(check["nuC"]==0){
    nutf.innerText="-";
    ingredientanswer.style.display="none";
    openinganswer.style.display="none";
    nutfreeanswer.style.display="block";
    expirydateanswer.style.display="none";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["nuC"]=1;
    }
    else if(check["nuC"]==1){
     nutf.innerText="+";
    nutfreeanswer.style.display="none";
    check["nuC"]=0;
    }
}

function expirydate(){
  show.forEach(sign =>{
    sign.innerText="+";
   })
  if(check["exC"]==0){
    expd.innerText="-";
    ingredientanswer.style.display="none";
    openinganswer.style.display="none";
    nutfreeanswer.style.display="none";
    expirydateanswer.style.display="block";
    check={
      ingC:0,
      opC:0,
      nuC:0,
      exC:0
    };
    check["exC"]=1;
    }
    else if(check["exC"]==1){
     expd.innerText="+";
     expirydateanswer.style.display="none";
    check["exC"]=0;
    }
}
//---------------------------profileName-----------------------------------------------
// mainPage.js

// Define the function to initialize the profile
function initializeProfile() {
    document.addEventListener('DOMContentLoaded', () => {
        const storedEmail = localStorage.getItem('userEmail');
        const nameProfile = document.getElementById('nameProfile');

        if (storedEmail) {
            const username = storedEmail.split('@')[0];
            nameProfile.textContent = ` ${username}`;
        } else {
            nameProfile.textContent = ' Profile';
        }
    });
}

// Call the function to initialize the profile on this page
initializeProfile();

// Export the function for use in other modules
export { initializeProfile };
