import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../LoginForm";

describe("LoginForm", () => {
  it("should render the login form", () => {
    render(<LoginForm />);

    const emailField = screen.getByLabelText("Email");
    const passwordField = screen.getByText("Password");
    const loginButton = screen.getByRole("button", { name: "Log in" });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should show an welcome message if login success", async () => {
    render(<LoginForm />);

    const emailField = screen.getByLabelText("Email");
    const passwordField = screen.getByText("Password");
    const loginButton = screen.getByRole("button", { name: "Log in" });

    const userInput = { email: "diego@test.com", password: "123456" };

    await userEvent.type(emailField, userInput.email);
    await userEvent.type(passwordField, userInput.password);
    await userEvent.click(loginButton);

    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.queryByText("Invalid email or password")).toBeNull();
  });

  it("should show an error message if login failed", async () => {
    render(<LoginForm />);

    const emailField = screen.getByLabelText("Email");
    const passwordField = screen.getByText("Password");
    const loginButton = screen.getByRole("button", { name: "Log in" });

    const userInput = { email: "diego@test.com", password: "worngPassword" };

    await userEvent.type(emailField, userInput.email);
    await userEvent.type(passwordField, userInput.password);
    await userEvent.click(loginButton);

    expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
    expect(screen.queryByText("Welcome!")).toBeNull();
  });
});
