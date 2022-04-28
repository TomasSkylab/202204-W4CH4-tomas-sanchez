const { render, screen } = require("@testing-library/react");
const { default: Key } = require("./Key");

describe("Given a key component", () => {
  describe("When it receives a text )", () => {
    test("Then it should render a button", () => {
      render(<Key />);
      const buttonResult = screen.getByRole("button");

      expect(buttonResult).toBeInTheDocument();
    });
  });
});
