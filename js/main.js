
let sumbmit= document.getElementById("submit");
sumbmit.addEventListener("click", function(){
 let user_mail = document.getElementById("user-mail").value;
 let password = document.getElementById("password").value;

if (user_mail== "rofiqul@gmail.com" && password =="rofiq") {
    console.log("valid user");
}
else{
    console.log("invalid user.....")
}

})
