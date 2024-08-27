const passwordInput = document.getElementById('password');
document.getElementById('showPassword').addEventListener('click', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

signup=document.querySelector("#signup");
switchTxt=document.querySelector("#switchTxt");
switcher=document.querySelector("#loginTxt");
signupBtn=document.querySelector("#signupBtn");
buySellContainer=document.querySelector("#buySellContainer");
passwordLabel=document.querySelector("#passwordLabel");
passwordForm=document.querySelector("#password");
flag="onSignup";

document.querySelector("#loginTxt").addEventListener('click',function(){
if(flag==="onSignup"){
buySellContainer.style.display="none";
signup.innerText="Login";
passwordLabel.innerText="Enter Password"
password.placeholder="Enter your password";
switchTxt.innerText="Don't have an account?";
switcher.innerText="Sign Up";
signupBtn.innerText="Login";
flag="onLogin";
}
else if(flag==="onLogin"){
buySellContainer.style.display="block";
signup.innerText="Sign Up";
passwordLabel.innerText="Set Password"
password.placeholder="Create your password";
switchTxt.innerText="Already have an account?"
switcher.innerText="Login";
signupBtn.innerText="Sign Up";
flag="onSignup";
}
});


/*Signup loging button click*/
const numMailForm=document.querySelector("#email");
buyRadio=document.querySelector("#buyRadio");
sellRadio=document.querySelector("#sellRadio");

signupBtn=document.querySelector("#signupBtn");
signupBtn.addEventListener("click", function() {
    const numMailValue=numMailForm.value.trim();
    const passwordValue=passwordForm.value.trim();
    /*
^ : Asserts the start of the string.
[0-9] : Matches any digit from 0 to 9.
+ : Ensures that one or more digits are present.
$ : Asserts the end of the string.
So, /^[0-9]+$/ will match a string that consists entirely of one 
or more digits from start to end.
The .test() method is used to test whether the string matches
the regular expression. It returns true if the string matches the
pattern and false otherwise. 
*/
    const isNumber=numMailValue.length === 10 && /^[0-9]+$/.test(numMailValue);/*SEE*/
    // Check if the value contains "@" and "."
    const isEmail=numMailValue.includes("@") && numMailValue.includes(".");
    const isPassword=passwordValue.length > 0 && !passwordValue.includes(" ");
    const purpose= buyRadio.checked || sellRadio.checked; //atleast 1 checked

    if ((isNumber || isEmail)&&isPassword&&purpose) {
        window.location.href = "mainPage.html"; // Redirect if the input is valid
    } else {
        if((isNumber || isEmail)===false){
            alert("Please enter a valid email address or a 10-digit mobile number.");}
        else if(isPassword===false){
            alert("Please set a valid password");}
        else if(purpose===false){
            alert("Please select purpose of using this website");} 
    }
});
