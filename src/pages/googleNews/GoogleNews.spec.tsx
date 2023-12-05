import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GoogleNews from "./GoogleNews";

jest.mock("../../shared/hooks/useNews", () => ({
  useNews: jest.fn(() => ({
    articles: [
      {
        author: "Autor 1",
        publishedAt: "2023-04-01",
        title: "Título do Artigo 1",
      },
      {
        author: "Autor 2",
        publishedAt: "2023-04-02",
        title: "Título do Artigo 2",
      },
    ],
    isLoading: false,
  })),
}));

describe("GoogleNews Component", () => {
  test("renders component with articles", () => {
    render(<GoogleNews />);

    expect(screen.getByText("Google News (Brazil)")).toBeInTheDocument();
    expect(screen.getByText(/Cobertura jornalística/i)).toBeInTheDocument();
    expect(screen.getByText(/Título do Artigo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Título do Artigo 2/i)).toBeInTheDocument();
    expect(
      screen.queryByText("Nenhum artigo foi encontrado.")
    ).not.toBeInTheDocument();
  });
});
