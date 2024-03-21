import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome"; // Assicurati che il percorso sia corretto

it("Il componente Welcome viene montato correttamente", () => {
  // Renderizza il componente
  render(<Welcome />);

  // Verifica che il testo "Benvenuti in EpiBooks!" sia presente nel componente
  const welcomeElement = screen.getByText(/benvenuti in epibooks!/i);
  expect(welcomeElement).toBeInTheDocument();
});
