import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Product from "./Product";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NavigationItem from "./NavigationItem";

describe("NavigationItem component", () => {
  it("renders navigation item correctly", () => {
    const link = "/fakeLink";
    const title = "Fake Link Title";

    const { getByText } = render(
      <MemoryRouter>
        <NavigationItem link={link} title={title} />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(title);
    expect(linkElement).toBeInTheDocument();

    expect(linkElement.closest("a")).toHaveAttribute("href", link);
  });
});
