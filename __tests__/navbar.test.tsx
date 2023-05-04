import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NavBar from "../components/layout/NavBar";

describe("NavBar", () => {
  it("renders the navigation bar", () => {
    render(<NavBar />);
    const dashboardLink = screen.getByText("Dashboard");
    const users = screen.getByText("Users");
    expect(dashboardLink).toBeInTheDocument();
    expect(users).toBeInTheDocument();
  });
});
