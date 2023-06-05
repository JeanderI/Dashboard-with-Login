import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ContainerDash, Conta, HeaderDash, Usuario } from "./style";
import { Botao } from "../../styles/button";

const DashboardPage = () => {
  const { user }: any = useContext(UserContext);

  const navigate = useNavigate();
  const logout = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/");
    localStorage.clear();
  };

  return (
    <ContainerDash>
      <Conta>
        <HeaderDash>
          <h1>Full stack</h1>
          <Botao onClick={logout}>Logout</Botao>
        </HeaderDash>

        <Usuario>
          <h2>Olá, {user?.fullName}</h2>
        </Usuario>
      </Conta>
    </ContainerDash>
  );
};

export default DashboardPage;
