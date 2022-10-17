import { Nav, BtnGoBack } from "./NavBar.style";

type NavBarProps = {
  hasGoBack?: boolean;
};

function NavBar(props: NavBarProps) {
  return (
    <Nav>
      <BtnGoBack to="/" className="brand">
        Pokédex
      </BtnGoBack>
      {props.hasGoBack && (
        <BtnGoBack to="/" >
          Voltar
        </BtnGoBack>
      )}
    </Nav>
  );
}

export default NavBar;
