import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { Container, ContainerForm, HeaderContainer } from "../../styles/forms";
import { Form, Link, useNavigate } from "react-router-dom";
import { Footer, FormContainer, Input } from "../../styles/modalForm";
import { LoginData, schema } from "./validator";

export interface iLoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const mudarPag = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/register");
  };
  return (
    <Container>
      <ContainerForm>
        <HeaderContainer>
          <h1>Kenzie Hub</h1>
        </HeaderContainer>

        <FormContainer onSubmit={handleSubmit(signIn)}>
          <h2>Login</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <Form>
            <Input>
              <label htmlFor="emailLogin">Email</label>
              <input
                id="emailLogin"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </Input>
            <Input>
              <label htmlFor="senhaLogin">Senha</label>
              <input
                id="senhaLogin"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Input>
            <Footer>
              <button type="submit"></button>
              <h4>Ainda não possui uma conta?</h4>
              <Link onClick={mudarPag} to={""}>
                Cadastre-se
              </Link>
            </Footer>
          </Form>
        </FormContainer>
      </ContainerForm>
    </Container>
  );
};
