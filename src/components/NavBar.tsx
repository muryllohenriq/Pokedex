import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      <Link to="favorite">Favoritos</Link>
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
