import { Container } from "./Badge.style"

export type BadgeProps = {
  name: string;
};

function Badge(props: BadgeProps) {
  return (
    <Container className={"type--" + props.name.toLowerCase()} >
      {props.name}
    </Container>
  );
}

export default Badge;
