import { screen, render } from "@testing-library/react";
import { MyTable } from "./MyTable";

describe("<MyTable />", () => {
  // Fails
  it("should find the row without the finders function", () => {
    render(<MyTable />);

    const sut = screen.getByRole("row", { name: "Foo1", exact: false });

    expect(sut).toBeInTheDocument();
  });

  // Passes
  it("should find the row with a finders function", () => {
    const includes = (name: string) => (s: string) => s.includes(name);
    render(<MyTable />);

    const sut = screen.getByRole("row", { name: includes("Foo1") });

    expect(sut).toBeInTheDocument();
  });
});
