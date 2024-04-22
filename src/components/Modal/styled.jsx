import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    z-index: 100;
    font-family: "Noto Sans KR", sans-serif;
    background-color: #fff;
    border-radius: 4px;
    min-width: 300px;
    max-width: 500px;
    padding: 18px;
  }
`;
