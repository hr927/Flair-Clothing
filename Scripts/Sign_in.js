function func(){
    window.location.href="index.html"
 }
 
 function signup_func(){
     console.log(" signup")
     window.location.href="SignUp.html"
 }
 
 function Newtofc(){
     console.log("New to flair clothing")
     window.location.href="SignUp.html"
 }
 
 let signUpdata = JSON.parse(localStorage.getItem("signUp_in"));
 console.log(signUpdata);
 function signbtn()
 {
     let email=document.getElementById("email").value;
     let password= document.getElementById("password").value;
 
     if(email==="" || password===""){
         console.log("Empty")
         document.getElementById("wrong_credential").innerText=null;
         let wrong=document.createElement("p")
         wrong.innerText="Incorrect email or password*"
         wrong.style.color="red"
         document.getElementById("wrong_credential").append(wrong)
     }
 
     let check_input = signUpdata.find(c=>c.Email==email && c.Password==password)
     console.log(check_input);
 
     if(!check_input)
     {
         console.log("input wrong")
         document.getElementById("wrong_credential").innerText=null;
         let wrong=document.createElement("p")
         wrong.innerText="Incorrect email or password*"
         wrong.style.color="red"
         document.getElementById("wrong_credential").append(wrong)
     }
     else if(check_input.Email==email && check_input.Password==password)
    {
     document.getElementById("wrong_credential").innerText=null;
         alert("Signin Successfull :)")
        //  have to add home page path
     window.location.href="index.html"
    }
 
     document.getElementById("email").value=null;
     document.getElementById("password").value=null;
 
 }
 
 function forPassword(event){
      let email_confirmation = prompt("Confirm Your Email")
      
     let check_input=signUpdata.find(c=>c.Email==email_confirmation )
     if(check_input===undefined)
     {
         alert("Sorry Email Not Found!!")
     }
 
     if(email_confirmation===check_input.Email){
         let confirmation =confirm("Are You Sure You Want to Change Your Password");
         funabc();
       function funabc(){
         if(confirmation){
             let newpassword = prompt("Enter Your New Password");
             if(newpassword.length>=8 && newpassword.includes("@")|| newpassword.includes("#")|| newpassword.includes("`")|| newpassword.includes("!")|| newpassword.includes("*")|| newpassword.includes("$")|| newpassword.includes("^"))
             {
                 alert("Password Changed Seccessfully");
                 let Newdata=[];
 
                function Senddata(name,email,password){
                       this.Name=name;
                        this.Email=email;
                        this.Password=password;
                 }
                 let name= check_input.Name;
                 let email= check_input.Email
                 let password=newpass;
 
                 let p= new Senddata(name,email,password)
                 Newdata.push(p)
                 localStorage.setItem("signUp_in",JSON.stringify(Newdata)) 
                 console.log(" reload")
                 window.location.reload();
             }
             else{
                 confirm("Password Should Have Atleast 8 Charecters and One special Charecter*");
                 newpass = prompt("Enter Your New Password");
                 funabcd();
                 function funabcd(){
                    if(newpassword.length>=8 && newpassword.includes("@")|| newpassword.includes("#")|| newpassword.includes("`")|| newpassword.includes("!")|| newpassword.includes("*")|| newpassword.includes("$")|| newpassword.includes("^"))
                     {
                         alert("Password Changed Seccessfully");
                         let Newdata=[];
 
                function Senddata(name,email,password){
                       this.Name=name;
                        this.Email=email;
                        this.Password=password;
                 }
                 let name= check_input.Name;
                 let email= check_input.Email
                 let password=newpass;
 
                 let p= new Senddata(name,email,password)
                 Newdata.push(p)
                 localStorage.setItem("signUp_in",JSON.stringify(Newdata)) 
                 console.log(" reload")
                 window.location.reload();
                     }
                 }
             }    
         }
 
         else {
             alert("Email Doesn't Match")
             localStorage.setItem("signUp_in",JSON.stringify(signUpdata))
              }
     }   
       }     
 
 
 }