
function func(){
    // window.location.href="home.html"
 }

 function funsignin(){
    console.log("iam signup")
    window.location.href="Sign_in.html"
}

function terms_condition(){
    console.log("iam term")
    // there i have to add location of home page
    // window.location.href=""

}

function funsignupbtn(){
    let arr=JSON.parse(localStorage.getItem("signUp_in")) ||[ ];

    function signupdata(name,email,password){
        this.Name=name;
        this.Email=email;
        this.Password=password;
    }

    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let data = new signupdata(name,email,password)
    if(name===""||email===""||password==="")
    {
        document.getElementById("cred").innerHTML=null;
        console.log("Yes")
        let wrong=document.createElement("p")
        wrong.innerText="Please Fill The Credentials"
        wrong.style.color="red"
        document.getElementById("cred").append(wrong)
    }
    else if(password.length<8)
    {
        document.getElementById("cred").innerHTML=null;
        console.log("Weak Password")
        let wrong=document.createElement("p")
        wrong.innerText="Password Should Have Atleast 8 charecters*"
        wrong.style.color="red"
        document.getElementById("cred").append(wrong)
    }
    else{

     if(password.includes("@") || password.includes("!") ||password.includes("`") || password.includes("#")|| password.includes("$")|| password.includes("%")|| password.includes("&")|| password.includes("*")){
        document.getElementById("cred").innerHTML=null;
        arr.push(data)
        console.log(arr)
        localStorage.setItem("signUp_in",JSON.stringify(arr));
        alert("signup sucessfull")
        window.location.href="Sign_in.html"
          }
    else{
        document.getElementById("cred").innerHTML=null;
        console.log("yes its less")
        let wrong=document.createElement("p")
        wrong.innerText="Password Should Have Atleast 8 charecters and One special charecters*"
        wrong.style.color="red"
        document.getElementById("cred").append(wrong)
    }
    }
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
}
