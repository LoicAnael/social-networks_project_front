import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [values, setValues] = useState({
    pseudo: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
              className="input"
              type="text"
              name="pseudo"
              onChange={handleChange}
              id="pseudo"
              placeholder="Pseudo ou mail"
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="form-input">
            <input
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              placeholder="Mot de passe"
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <div className="forgot-password">
            <Link to="./forgot-password">Mot de passe oublié ?</Link>
          </div>
          <button className="form-button signin">CONNECTION</button>
          <Link to="./signUp" className="form-button signup">
            INSCRIPTION
          </Link>
        </form>
      </section>
    </main>
  );
}
export default SignIn;
