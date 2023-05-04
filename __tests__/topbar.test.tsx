import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "../components/layout/TopBar";

describe("TopBar", () => {
  it("renders the top bar", () => {
    render(<TopBar />);
    const searchInput = screen.getByPlaceholderText("Search for anything");
    const docsButton = screen.getByText("Docs", { selector: "button" });
    expect(searchInput).toBeInTheDocument();
    expect(docsButton).toBeInTheDocument();
  });
});
