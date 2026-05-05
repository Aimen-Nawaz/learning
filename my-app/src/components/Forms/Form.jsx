import {  FaFacebookF } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import "../../styles/form.css";

const SocialLoginForm = () => {
  return (
    <div>

      <div className="divider">
        <span>OR</span>
      </div>

      <div className="social-login">

        <button type="button" className="facebook-btn">
          <FaFacebookF style={{ marginRight: "20px" }} />
          Login with Facebook
        </button>

        <button type="button" className="google-btn">
          <FcGoogle style={{ marginRight: "20px" }} />
          Login with Google
        </button>

      </div>

    </div>
  );
};

export default SocialLoginForm;