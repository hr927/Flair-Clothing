const bottom = () => {
  return `<div id="botform">
    <p>GET 10% OFF YOUR FIRST ORDER</p>
    <p>
      Sign up for promotions, tailored new arrivals, stock updates and
      more – straight to your inbox
    </p>
    <form action="">
      <div id="gender">
        <div>
          <input
            type="radio"
            id="womensWear"
            value="womensWear"
            checked="checked"
          />
          <label for="womesWear">Womenswear</label>
        </div>
        <div>
          <input type="radio" id="mensWear" value="mensWear" />
          <label for="mensWear">Menswear</label>
        </div>
      </div>
      <p>GET UPDATES BY</p>
      <div>
        <input type="checkbox" checked="checked" id="botEmailcheck" />
        <label for="botEmailcheck">Email</label>
      </div>
      <input type="email" id="botEmail" placeholder="Your email address" />
      <div>
        <input type="checkbox" id="botSmscheck" />
        <label for="botSmscheck">SMS</label>
      </div>
      <div id="phnNum" class="hide">
        <select name="+91" id="country">
          <option value="+91">+91</option>
          <option value="+93">+93</option>
          <option value="+355">+355</option>
          <option value="+213">+213</option>
          <option value="+376">+376</option>
          <option value="+244">+244</option>
        </select>
        <input
          type="text"
          id="botPhone"
          placeholder="Your phone number"
        />
      </div>
      <button id="botSignUp">Sign Up</button>
    </form>
    <p>
      By signing up, you agree to our <a href="">Privacy Policy</a>.
      Unsubscribe anytime at the bottom of our emails.
    </p>
  </div>`;
};

export default bottom;
