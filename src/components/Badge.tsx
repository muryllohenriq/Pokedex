import { Container } from "./Badge.style"

type BadgeProps = {
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
