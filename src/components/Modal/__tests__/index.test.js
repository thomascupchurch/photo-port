import React from "react";
import "@testing-library/React";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";
import { render, cleanup, fireEvent } from "@testing-library/react";

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: "Grocery booth",
  category: "commercial",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    // baseline render component test
  });
  // snapshot test
  it("matches snapshot DOM node structure", () => {
    // Arrange the snapshot = declare variables
    // Assert the match
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange: Render Modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    // Act: simulate click event
    fireEvent.click(getByText("Close this modal"));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
