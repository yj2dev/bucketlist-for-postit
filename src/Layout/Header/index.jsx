import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="first">버</span>
        <span className="second">킷</span>
        리스트
      </h1>
    </Container>
  );
};

export default Header;
