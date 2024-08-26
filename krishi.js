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