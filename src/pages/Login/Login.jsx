import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Login.scss";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import emailIcon from "../../assets/icons/mail_outline_24px_outlined.png";
import senhaIcon from "../../assets/icons/vpn_key_24px_outlined.svg";
import { login } from "../../services/auth";
import { useState } from "react";


export function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const response = await login(email, password);
    if (response.success) {
      history.push("/home");
    }
    else {
      alert('deu merda amigo');
    }
  }

  return (
    <div className="login">
      <div className="logo"></div>
      <ContainerCard className="login-content">
        <div className="container">
          <div className="input-container">
            <img src={emailIcon} alt="email"></img>
            <InputText
              type='text'
              label="Email"
              isRequired={true}
              marginBottom="40px"
              width="251px"
              className="input-login"
              colorInput="#CCCCCC"
              value={email}
              setValue={setEmail}
            ></InputText>
          </div>

          <div className="input-container">
            <img src={senhaIcon} alt="senha"></img>
            <InputText
              type="password"
              label="Senha"
              isRequired={true}
              marginBottom="40px"
              width="251px"
              className="input-login"
              colorInput="#CCCCCC"
              value={password}
              setValue={setPassword}
            ></InputText>
          </div>
        </div>

        <div className="btn-container">
          <Button
            width="134px"
            background="#2767BC"
            height="32px"
            borderRadius="10px"
            className="btn btn-font1 btn-text"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </div>
      </ContainerCard>
    </div>
  );
}
