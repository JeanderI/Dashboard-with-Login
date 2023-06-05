import styled from "styled-components";

export const ContainerDash = styled.div`
  background-color: var(--background);
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const HeaderDash = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 72px;
  align-items: center;

  h1 {
    color: var(--Color-primary);
  }
`;

export const Conta = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  h3 {
    margin-top: 40px;
    color: var(--Grey-0);
  }
`;

export const Usuario = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--Grey-0);
    justify-content: center;
  }
  p {
    color: var(--Grey-0);
  }
`;

export const ListaTech = styled.ul`
  margin-top: 40px;
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  background-color: var(--Grey-2);
`;
