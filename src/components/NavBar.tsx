import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StoreState } from "../redux";
import { Nav, CustomLink, TotalPokemons } from "./NavBar.style";

type NavBarProps = {
  hasGoBack?: boolean;
};

function NavBar(props: NavBarProps) {
  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  return (
    <Nav>
      <CustomLink to="/" fontSize={24} lineheight={31} color="#17171b">
        Pokédex
      </CustomLink>
      <div>
      <CustomLink to="/favorite">
        <TotalPokemons>
          Total de favoritos: {totalPokemons.length}
        </TotalPokemons>
      </CustomLink>
        {props.hasGoBack && (
          <CustomLink to="/" fontSize={16} lineheight={21} color="#747476">
            Voltar
          </CustomLink>
        )}
      </div>
    </Nav>
  );
}

export default NavBar;
