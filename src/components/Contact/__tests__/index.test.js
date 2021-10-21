import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
import ContactForm from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(
      <Contact
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Contact
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// test contactForm
describe("contactForm is rendering properly", () => {
  it("shows contactForm rendered properly", () => {
    const { getByTestId } = render(
      <ContactForm
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // Assert
    expect(getByTestId("contact")).toHaveTextContent("Contact me");
  });
});
