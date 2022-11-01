import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Badge from "./Badge";

describe("teste do componente Badge", () => {
  test("snapshot", () => {
    const container = render(
      <MemoryRouter>
        <Badge name="Foo" />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("verificar renderização", () => {
    render(
      <MemoryRouter>
        <Badge name="Foo" />
      </MemoryRouter>
    );

    expect(screen.getByText("Foo")).toBeDefined();
  });
});
