import styled from "styled-components";

export const Container = styled.div`
  h1 {
    cursor: pointer;
    color: #4f5c67;
    text-align: center;
    letter-spacing: 8px;
    margin: 0;
    padding: 2em 0 1.5em 0;

    span {
      display: inline-block;
      text-align: center;
      color: #fff;
      &.first {
        transform: rotate(13deg);
        background: linear-gradient(155deg, #fbce29 50%, #fff 100%);
      }

      &.second {
        transform: rotate(-13deg);
        background: linear-gradient(155deg, #43ba7a 50%, #fff 100%);
      }
    }
  }

  button {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
