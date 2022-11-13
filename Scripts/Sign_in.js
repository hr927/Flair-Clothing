function func() {
  window.location.href = "index.html";
}
let loggedin = {
  login: true,
};
function signup_func() {
  console.log(" signup");
  window.location.href = "SignUp.html";
}

function Newtofc() {
  console.log("New to flair clothing");
  window.location.href = "SignUp.html";
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
let signUpdata = JSON.parse(localStorage.getItem("signUp_in"));
console.log(signUpdata);
function signbtn() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    console.log("Empty");
    document.getElementById("wrong_credential").innerText = null;
    let wrong = document.createElement("p");
    wrong.innerText = "Incorrect email or password*";
    wrong.style.color = "red";
    document.getElementById("wrong_credential").append(wrong);
  }

  let check_input = signUpdata.find(
    (c) => c.Email == email && c.Password == password
  );
  console.log(check_input);

  if (!check_input) {
    console.log("input wrong");
    document.getElementById("wrong_credential").innerText = null;
    let wrong = document.createElement("p");
    wrong.innerText = "Incorrect email or password*";
    wrong.style.color = "red";
    document.getElementById("wrong_credential").append(wrong);
  } else if (check_input.Email == email && check_input.Password == password) {
    document.getElementById("wrong_credential").innerText = null;
    alert("Signin Successfull :)");
    //  have to add home page path

    localStorage.setItem("loggedin", JSON.stringify(loggedin));
    window.location.href = "index.html";
  }

  document.getElementById("email").value = null;
  document.getElementById("password").value = null;
}

function forPassword(event) {
  let email_confirmation = prompt("Confirm Your Email");

  let check_input = signUpdata.find((c) => c.Email == email_confirmation);
  if (check_input === undefined) {
    alert("Sorry Email Not Found!!");
  }

  if (email_confirmation === check_input.Email) {
    let confirmation = confirm("Are You Sure You Want to Change Your Password");
    funabc();
    function funabc() {
      if (confirmation) {
        let newpassword = prompt("Enter Your New Password");
        if (
          (newpassword.length >= 8 && newpassword.includes("@")) ||
          newpassword.includes("#") ||
          newpassword.includes("`") ||
          newpassword.includes("!") ||
          newpassword.includes("*") ||
          newpassword.includes("$") ||
          newpassword.includes("^")
        ) {
          alert("Password Changed Seccessfully");
          let Newdata = [];

          function Senddata(name, email, password) {
            this.Name = name;
            this.Email = email;
            this.Password = password;
          }
          let name = check_input.Name;
          let email = check_input.Email;
          let password = newpass;

          let p = new Senddata(name, email, password);
          Newdata.push(p);
          localStorage.setItem("signUp_in", JSON.stringify(Newdata));
          console.log(" reload");
          window.location.reload();
        } else {
          confirm(
            "Password Should Have Atleast 8 Charecters and One special Charecter*"
          );
          newpass = prompt("Enter Your New Password");
          funabcd();
          function funabcd() {
            if (
              (newpassword.length >= 8 && newpassword.includes("@")) ||
              newpassword.includes("#") ||
              newpassword.includes("`") ||
              newpassword.includes("!") ||
              newpassword.includes("*") ||
              newpassword.includes("$") ||
              newpassword.includes("^")
            ) {
              alert("Password Changed Seccessfully");
              let Newdata = [];

              function Senddata(name, email, password) {
                this.Name = name;
                this.Email = email;
                this.Password = password;
              }
              let name = check_input.Name;
              let email = check_input.Email;
              let password = newpass;

              let p = new Senddata(name, email, password);
              Newdata.push(p);
              localStorage.setItem("signUp_in", JSON.stringify(Newdata));
              console.log(" reload");
              window.location.reload();
            }
          }
        }
      } else {
        alert("Email Doesn't Match");
        localStorage.setItem("signUp_in", JSON.stringify(signUpdata));
      }
    }
  }
}
