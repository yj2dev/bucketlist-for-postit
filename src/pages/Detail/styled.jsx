import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  background: ${(props) => props?.backgroundColor};
  padding: 24px;
  border-radius: 4px;
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .edit-title {
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    padding: 6px 0;
    margin: 20px 0 0 0;
    font-family: "Nanum Pen Script", cursive;
    font-size: 3em;
    font-weight: 400;
    width: 360px;
  }

  .edit-desc {
    background: transparent;
    outline: none;
    border: none;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1em;
    margin-top: 18px;
    width: 100%;
    resize: none;
    height: 200px;
  }

  h3 {
    padding: 0;
    margin: 32px 0 0 0;
    font-family: "Nanum Pen Script", cursive;
    font-size: 3em;
    font-weight: 400;
  }

  hr {
    background: #4d5c69;
    width: 94px;
    align-items: center;
    height: 1px;
    border: none;
    margin: 0 auto;
  }

  h4 {
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
    white-space: pre-wrap;
  }

  .edit-btn {
    font-family: "Noto Sans KR", sans-serif;
    position: absolute;
    bottom: 0;
    width: 100%;
    border: none;
    padding: 8px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 0 0 4px 4px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .back-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 2em;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:hover {
      right: 18px;
      transform: scale(1.2);
    }
  }
`;
