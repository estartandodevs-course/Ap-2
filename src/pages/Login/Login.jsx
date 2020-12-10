import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Login.scss";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import email from "../../assets/icons/mail_outline_24px_outlined.png";
import senha from "../../assets/icons/vpn_key_24px_outlined.svg";

export function Login() {
  const history = useHistory();

  function onClick() {
    history.push("/home");
  }

  return (
    <div className="login">
      <div className="logo"></div>
      <ContainerCard className="login-content">
        <div className="container">
          <div className="input-container">
            <img src={email} alt="email"></img>
            <InputText
              label="Email"
              isRequired={true}
              marginBottom="40px"
              width="251px"
              className="input-login"
              colorInput="#CCCCCC"
            ></InputText>
          </div>

          <div className="input-container">
            <img src={senha} alt="senha"></img>
            <InputText
              label="Senha"
              isRequired={true}
              marginBottom="40px"
              width="251px"
              className="input-login"
              colorInput="#CCCCCC"
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
            onClick={onClick}
          >
            Entrar
          </Button>
        </div>
      </ContainerCard>
    </div>
  );
}
