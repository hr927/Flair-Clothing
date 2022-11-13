function func() {
  // window.location.href="home.html"
}
let google = document.querySelector("#google");
let apple = document.querySelector("#apple");
let facebook = document.querySelector("#facebook");
google.onclick = () => {
  googleauth();
};
apple.onclick = () => {
  appleauth();
};
facebook.onclick = () => {
  facebookauth();
};
const googleauth = () => {
  window.location.href =
    "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&scope=email%20profile&openid.realm&prompt=select_account&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.farfetch.com%3Fid%3Dauth783630&client_id=280941613475-9d1nlgbhfe18sgv731r2ccrsqt0r3cvj.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.farfetch.com&gsiwebsdk=2&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow";
};

const appleauth = () => {
  window.location.href =
    "https://appleid.apple.com/auth/authorize?client_id=com.farfetch.discover.ffid.service&redirect_uri=https%3A%2F%2Fwww.farfetch.com%2Fsignin-apple&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=b8317609-8367-4637-bc57-a99ef3f18c7e&m=11&v=1.5.4";
};
const facebookauth = () => {
  window.location.href =
    "https://www.facebook.com/v11.0/dialog/oauth?client_id=418944141479017&redirect_uri=https%3a%2f%2fwww.farfetch.com%2flogin-slice%2fauth%2fsocial%2fsignin-facebook&state=%7b%22key%22%3a%227e3a3c07-6aa4-4b9f-9da8-3a0209017f02%22%2c%22value%22%3a%22d21d83e8-fe4a-4351-8e50-7da6888364d6%22%2c%22moveFromBagToWishlist%22%3afalse%2c%22returnUrl%22%3a%22https%3a%2f%2fwww.farfetch.com%2fin%2fshopping%2fmen%2fitems.aspx%22%7d&response_type=code&scope=public_profile+email&display=popup";
};
function funsignin() {
  console.log("iam signup");
  window.location.href = "Sign_in.html";
}

function terms_condition() {
  console.log("iam term");
  // there i have to add location of home page
  // window.location.href=""
}

function funsignupbtn() {
  let arr = JSON.parse(localStorage.getItem("signUp_in")) || [];

  function signupdata(name, email, password) {
    this.Name = name;
    this.Email = email;
    this.Password = password;
  }

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = new signupdata(name, email, password);
  if (name === "" || email === "" || password === "") {
    document.getElementById("cred").innerHTML = null;
    console.log("Yes");
    let wrong = document.createElement("p");
    wrong.innerText = "Please Fill The Credentials";
    wrong.style.color = "red";
    document.getElementById("cred").append(wrong);
  } else if (password.length < 8) {
    document.getElementById("cred").innerHTML = null;
    console.log("Weak Password");
    let wrong = document.createElement("p");
    wrong.innerText = "Password Should Have Atleast 8 charecters*";
    wrong.style.color = "red";
    document.getElementById("cred").append(wrong);
  } else {
    if (
      password.includes("@") ||
      password.includes("!") ||
      password.includes("`") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("%") ||
      password.includes("&") ||
      password.includes("*")
    ) {
      document.getElementById("cred").innerHTML = null;
      arr.push(data);
      console.log(arr);
      localStorage.setItem("signUp_in", JSON.stringify(arr));
      alert("signup sucessfull");
      window.location.href = "Sign_in.html";
    } else {
      document.getElementById("cred").innerHTML = null;
      console.log("yes its less");
      let wrong = document.createElement("p");
      wrong.innerText =
        "Password Should Have Atleast 8 charecters and One special charecters*";
      wrong.style.color = "red";
      document.getElementById("cred").append(wrong);
    }
  }
  document.getElementById("name").value = null;
  document.getElementById("email").value = null;
  document.getElementById("password").value = null;
}
