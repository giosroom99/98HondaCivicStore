import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Product from "./Product";
import { BrowserRouter } from "react-router-dom";

describe("Product  Component", () => {
  it("It renders product component", () => {
    render(<Product />);
    let element = screen.getByText("Product Page");
    expect(element).toBeInTheDocument();
  });

  it("Renders  product list correctly", () => {
    const products = [
      { productName: "product 1" },
      { productName: "product 2" },
      { productName: "product 3" },
    ];

    const { getByText } = render(<Product products={products} />);
    products.forEach((product) => {
      const productElement = screen.getByText(product.productName);
      expect(productElement).toBeInTheDocument();
    });
  });

  it("Renders correctly without a data", () => {
    const { getByText } = render(<Product products={[]} />);

    const noProducts = screen.getByText("No products");
    expect(noProducts).toBeInTheDocument();
  });
});
