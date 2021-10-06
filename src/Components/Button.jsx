import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-family: Poppins, "sans-serif";
  font-weight: bold;
  padding: 4px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  .buton-column {
    flex-direction: column;
    background: transparent;
    color: white;
    border: none;
    outline: none;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    .my-list {
      display: none;
    }
  }
`;
