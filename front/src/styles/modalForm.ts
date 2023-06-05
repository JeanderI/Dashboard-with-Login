import styled from "styled-components";

export const BackgroundModal = styled.div`
  background: rgba(18, 18, 20, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerModal = styled.div`
  background-color: var(--Grey-3);
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 30px;
  color: var(--Grey-0);
  background-color: var(--Grey-2);
  font-size: 18px;

  button {
    max-width: 25px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--Grey-1);
    border-radius: 4px;
  }
`;

export const FormContainer = styled.form`
  padding: 32px 48px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  h2 {
    text-align: center;
    color: var(--Grey-0);
  }
  p {
    text-align: center;
    color: var(--Grey-1);
    font-size: 14px;
  }
`;
export const Form = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 1rem;
    color: var(--Grey-0);
    border-radius: 4px;
  }

  input {
    border: none;
    color: var(--Grey-0);
    background-color: var(--Grey-2);
    height: 40px;
    width: 100%;
    padding-left: 10px;
    border-radius: 4px;
  }

  select {
    border: none;
    color: var(--Grey-0);
    background-color: var(--Grey-2);
    height: 40px;
    width: 100%;
    padding-left: 10px;
    border-radius: 4px;
  }
  p {
    color: red;
    text-align: center;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  button {
    font-size: 16px;
    align-self: center;
    border: none;
    background-color: var(--Color-primary);
    width: 100%;
    height: 40px;
    color: var(--Grey-0);
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--Color-primary-focus);
    }
  }

  h4 {
    font-size: 16px;
    color: var(--Grey-1);
    text-align: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    background-color: var(--Grey-1);
    width: 100%;
    height: 40px;
    color: var(--Grey-0);
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--Grey-2);
    }
  }
`;
