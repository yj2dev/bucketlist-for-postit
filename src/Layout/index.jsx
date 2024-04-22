import Header from "./Header";
import { Container } from "./styled";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
