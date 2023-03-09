import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal";
import Cgu from "../features/CGU";
function SignUp() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [openCGU, setOpenCGU] = useState(null);
  const closeModal = () => {
    setOpenCGU(!openCGU);
  };
  const openModal = () => {
    setOpenCGU(true);
  };
  const [values, setValues] = useState({
    pseudo: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== values.password) {
      setPasswordError(true);
    } else {
      navigate("/home");
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
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
              placeholder="Pseudo"
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="form-input">
            <input
              className="input"
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
              placeholder="Mail"
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faEnvelope} />
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
          <div className="form-input">
            <input
              className="input"
              type="password"
              name="confirm-password"
              onChange={handleConfirmPassword}
              id="confirm-password"
              placeholder="Confirmer le mot de passe"
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <div className="cgu-container">
            <input type="checkbox" required />
            <span>Accepter les</span>
            <span onClick={openModal} className="cgu-btn">
              CGU
            </span>
          </div>
          <button className="form-button signup">INSCRIPTION</button>
          <div className="flex-center">
            <span>Vous possedez deja un compte ?</span>
            <Link to="/">Connection</Link>
          </div>
          {passwordError && (
            <div className="error">Password doesn't match !</div>
          )}
        </form>
      </section>
      {openCGU && (
        <section>
          <Modal text={<Cgu />} closeModal={() => closeModal()} />
        </section>
      )}
    </main>
  );
}
export default SignUp;
