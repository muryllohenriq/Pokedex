import { useSelector } from "react-redux";
import { StoreState } from "../redux";
import { Nav, BtnGoBack, TotalPokemons } from "./NavBar.style";

type NavBarProps = {
  hasGoBack?: boolean;
};

function NavBar(props: NavBarProps) {
  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  return (
    <Nav>
      <BtnGoBack to="/" className="brand">
        Pokédex
      </BtnGoBack>
      <div>
        <TotalPokemons>
          Total de favoritos: {totalPokemons.length}
        </TotalPokemons>
        {props.hasGoBack && <BtnGoBack to="/">Voltar</BtnGoBack>}
      </div>
    </Nav>
  );
}

export default NavBar;
