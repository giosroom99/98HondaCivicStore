import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Product from "./Product";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import NavigationBar from "./NavigationBar";
import navigation from "./NavigationBar";

vitest.mock("/NavigationItem", () =>
  vitest.fn(({ link, title }) => (
    <li>
      <a href={link}>{title}</a>
    </li>
  ))
);

describe("Navigation Bar component", () => {
  it("renders NavigationsBar with the correct navigation items", async () => {
    const { container } = render(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    );

    const navigationItems = await screen.getAllByRole("listitem");
    expect(navigationItems).toHaveLength(4);

    const expectedTitles = ["Product", "Accessories", "Gallery", "Cart"];
    expectedTitles.forEach((title, index) => {
      expect(navigationItems[index]).toHaveTextContent(title);
    });
  });

  it("renders NavigationBar with correct links passed to NavigationItem", () => {
    const { container } = render(<NavigationBar />);

    const navigationItems = screen.getAllByRole("listitem");

    const expectedLinks = ["/product", "/accessories", "/gallery", "/cart"];
    expectedLinks.forEach((link, index) => {
      expect(navigationItems[index].querySelector("a")).toHaveAttribute(
        "href",
        link
      );
    });
  });
});
