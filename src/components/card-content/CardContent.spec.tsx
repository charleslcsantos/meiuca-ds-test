import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardContent from "./CardContent";

describe("CardContent Component", () => {
  const props = {
    ariaLabel: "Test Card Content",
    heading: "Test Heading",
    subtitle: "Test Subtitle",
    paragraph: "Test Paragraph",
    buttonLabel: "Read More",
    redirectTo: "https://example.com",
  };

  it("should render CardContent component with correct content", () => {
    render(<CardContent {...props} />);

    expect(screen.getByLabelText("Test Card Content")).toBeInTheDocument();
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Paragraph")).toBeInTheDocument();
    expect(screen.getByText("Read More")).toBeInTheDocument();
  });

  it("should render button with correct href and target", () => {
    render(<CardContent {...props} />);

    const button = screen.getByText("Read More");
    expect(button).toHaveAttribute("href", "https://example.com");
    expect(button).toHaveAttribute("target", "_blank");
  });
});
