import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given the component Action", () => {
  describe("When it's rendered with action 'call'", () => {
    test("Then it should render a link", () => {
      const action = "call";

      render(<Action action={action} />);
      const actionResult = screen.getByRole("link");

      expect(actionResult).toBeInTheDocument();
    });
  });

  describe("When it's rendered with action 'hang'", () => {
    test("Then it should render a link", () => {
      const action = "hang";
      const expectedAction = "Hang";

      render(<Action action={action} />);
      const actionResult = screen.getByRole("link");

      expect(actionResult.textContent).toBe(expectedAction);
    });
  });

  describe("When it's rendered with action 'hang' and isActive true", () => {
    test("Then it should render a link", () => {
      const action = "hang";
      const isActive = true;
      const expectedClass = "hang active";

      render(<Action action={action} isActive={isActive} />);
      const actionResult = screen.getByRole("link");

      expect(actionResult.className).toBe(expectedClass);
    });
  });
});
