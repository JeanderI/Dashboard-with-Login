import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import { Container, ContainerForm, HeaderContainers } from "../../styles/forms";
import { Footer, FormContainer, Input } from "../../styles/modalForm";

interface iRegisterForm {
  email: string;
  password: string;
  fullName: string;
  telephone: number;
  registrationDate: string;
}

const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({});

  const navigate = useNavigate();

  const submit = async (data: iRegisterForm) => {
    userRegister(data, setLoading);
  };

  const mudarPag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Container>
      <ContainerForm>
        <HeaderContainers>
          <h1>Kenzie Hub</h1>

          <Link onClick={mudarPag} to={""}>
            Voltar
          </Link>
        </HeaderContainers>
        <FormContainer onSubmit={handleSubmit(submit)}>
          <Form>
            <Input>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Input>
            <Input>
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Input>
            <Input>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                {...register("fullName")}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </Input>
            <Input>
              <label htmlFor="telephone">Telephone</label>
              <input
                id="telephone"
                type="text"
                placeholder="Telephone..."
                {...register("telephone")}
              />
              {errors.telephone && <p>{errors.telephone.message}</p>}
            </Input>
            <Input>
              <label htmlFor="registrationDate">registrationDate</label>
              <input
                id="registrationDate"
                type="text"
                placeholder="registrationDate"
                {...register("registrationDate")}
              />
              {errors.registrationDate && (
                <p>{errors.registrationDate.message}</p>
              )}
            </Input>

            <Footer>
              <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastre-se"}
              </button>
            </Footer>
          </Form>
        </FormContainer>
      </ContainerForm>
    </Container>
  );
};

export default RegisterPage;
