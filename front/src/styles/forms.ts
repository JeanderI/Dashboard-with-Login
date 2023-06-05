import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  background-color: var(--Grey-3);
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  box-sizing: border-box;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  h4 {
    color: var(--Grey-1);
    font-size: 16px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
  color: var(--Color-primary);
  background-color: var(--background);
  font-size: 18px;
  justify-content: center;
`;

export const HeaderContainers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  color: var(--Color-primary);
  background-color: var(--background);
  font-size: 18px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    background-color: var(--Grey-3);
    padding: 20px;
    height: 40px;
    border-radius: 4px;
    color: var(--Grey-0);
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background-color: var(--Grey-2);
    }
  }
`;
