import styled from "styled-components";

export const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const Item = styled.div`
  font-weight: 400;
  font-style: normal;
  width: 180px;
  height: 180px;
  padding: 12px;
  box-shadow: 8px 8px 10px #636363;
  transition: 0.2s;
  margin: 2px;
  border-radius: 4px;

  color: #41424b;
  background: ${(props) => props?.backgroundColor};
  transform: ${(props) => props?.degree};

  &.completed {
    user-select: none;
    opacity: 0.4;
    background: transparent;
    transform: rotate(0deg);
    box-shadow: none;
  }

  .content {
    cursor: pointer;
  }

  .h3-wrapper {
    display: flex;
    justify-content: center;

    h3 {
      font-weight: 400;
      font-family: "Nanum Pen Script", cursive;
      font-size: 2em;
      margin: 0;
      padding: 10px 0;
      text-align: center;
      position: relative;
      display: inline-block;

      &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 4px;
        top: 50%;
        background-color: red;
        transition: 0.4s;
      }

      &.completed {
        &::before {
          width: 100%;
        }
      }
    }
  }

  hr {
    background: #4d5c69;
    width: 72px;
    align-items: center;
    height: 1px;
    border: none;
    margin: 0 auto;
  }

  h4 {
    color: #000;
    font-weight: 400;
    white-space: pre-wrap;
    font-family: "Noto Sans KR", sans-serif;
    height: 90px;
    margin: 10px 0 0 0;
    overflow: scroll;
    overflow-x: hidden;

    text-align: center;

    &.completed {
      text-decoration: line-through;
    }
  }

  &:not(.completed):hover {
    z-index: 10;
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: 0 0 0 transparent;
    transform: rotate(0deg);
  }
`;

export const ItemAdd = styled.div`
  font-weight: 400;
  font-style: normal;
  width: 180px;
  height: 180px;
  padding: 12px;
  transition: 0.2s;
  margin: 2px;

  border: 2px dashed #969696;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button.form-toggle-btn {
    color: #bb2d3b;
    background-color: transparent;

    font-size: 4em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #fff;
      background-color: #bb2d3b;
    }

    &.active {
      color: #fff;
      background-color: #bb2d3b;
      transform: rotate(45deg);
    }
  }

  .input-form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-direction: column;
    overflow: hidden;
    height: 0;
    transition: 0.2s;

    width: 150px;

    &.active {
      height: 120px;
    }

    input[type="text"] {
      width: 95%;
      outline: none;
      font-family: "Noto Sans KR", sans-serif;
      border: none;
      border-bottom: 1px solid #969696;
    }

    button.save-btn {
      //height: 25px;
      padding: 4px;
      width: 100%;
      transition: 0.2s;
      color: #1f883d;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      border-radius: 4px;
      font-weight: 800;

      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #1f883d;
      }
    }
  }
`;

export const ItemButtonSet = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: transparent;
    padding: 6px 0;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }

    &.toggle-completed-btn {
      border-radius: 0 0 0 4px;

      transition: 0.2s;
      color: #fff;
      //background: #1f883d;
      background: rgba(0, 0, 0, 0.1);

      &:hover {
        background: #096c25;
      }
    }

    &.delete-btn {
      color: rgba(187, 45, 59, 0.68);

      &:hover {
        color: #bb2d3b;
      }
    }
  }
`;

export const DeleteModalStyle = styled.div`
  //border: 1px solid red;

  p {
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 400;
      font-family: "Nanum Pen Script", cursive;
      font-size: 2em;
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: transparent;
    padding: 6px 0;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }

    &.cancel-delete-btn {
      transition: 0.2s;
      color: #fff;
      background: rgba(9, 108, 37, 0.4);

      &:hover {
        color: #fff;
        background: #096c25;
      }
    }

    &.confirm-delete-btn {
      color: rgba(187, 45, 59, 0.68);

      &:hover {
        color: #bb2d3b;
      }
    }
  }
`;
