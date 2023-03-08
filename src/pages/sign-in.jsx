import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="sign-background">
      <section className="signin-content">
        <img src={logo} alt="logo"></img>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
              placeholder="Pseudo ou mail"
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="form-input">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              placeholder="Mot de passe"
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <div className="forgot-password">
            <Link to="./forgot-password">Mot de passe oublié ?</Link>
          </div>
          <button className="form-button signin">CONNECTION</button>
          <button className="form-button signup">INSCRIPTION</button>
        </form>
      </section>
    </main>
  );
}
export default SignIn;
