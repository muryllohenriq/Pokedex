import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type CustomLinkProps = {
  fontSize?: number;
  lineheight?: number;
  color?: string;
}

export const CustomLink = styled(Link)<CustomLinkProps>`
  font-weight: 400;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};
`;

export const TotalPokemons = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #747476;
  margin-right: 2rem;
`;
