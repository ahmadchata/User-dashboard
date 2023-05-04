import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../pages/index";

type LoginProps = {
  onSubmit: (data: { email: string; password: string }) => void;
};

describe("Login", () => {
  it("renders the login form", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("LOG IN") as HTMLButtonElement;
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("submits the form when valid input is provided", () => {
    const mockSubmit = jest.fn();
    const props: LoginProps = { onSubmit: mockSubmit };
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("LOG IN") as HTMLButtonElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);
    waitFor(() =>
      expect(mockSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password",
      })
    );
  });
});
