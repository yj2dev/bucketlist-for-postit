import { Container } from "./styled";

const Modal = ({ children, show }) => {
  if (!show) return;

  return (
    <Container>
      <div className="modal">{children}</div>
    </Container>
  );
};

export default Modal;
