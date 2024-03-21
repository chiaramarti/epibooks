import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json"; // Importa i dati dei libri dal file JSON

describe("control booklistelement and commentarea", () => {
  it("Vengono renderizzate tante bootstrap cards quanti sono i libri", async () => {
    // Renderizza il componente BookList utilizzando i libri dal file JSON
    render(<BookList books={fantasy} />);

    // Attendi che vengano trovati tutti gli elementi con il test ID 'bootstrap-card'
    const cards = await screen.findAllByTestId("bootstrap-card");

    // Verifica che vengano renderizzate 150 bootstrap cards
    expect(cards).toHaveLength(150);
  });

  it("mount of commentArea at first launch", async () => {
    render(<BookList books={fantasy} />);
    const commentarea = await screen.findAllByTestId("comment-area");
    expect(commentarea).toHaveLength(1);
  });

  it("mount of form at first launch", async () => {
    render(<BookList books={fantasy} />);
    const form = await screen.findAllByTestId("form");
    expect(form).toHaveLength(1);
  });

  it("mount of commentList at first launch", async () => {
    render(<BookList books={fantasy} />);
    const commentList = await screen.findAllByTestId("comment-list");
    expect(commentList).toHaveLength(1);
  });

  // it("Filtra correttamente i libri quando viene eseguita una ricerca", async () => {
  //   render(<BookList books={fantasy} />);

  //   // Simuliamo l'input dell'utente nella casella di ricerca
  //   const searchInput = screen.getByPlaceholderText("Cerca un libro");
  //   fireEvent.change(searchInput, { target: { value: "Il Signore degli Anelli" } });

  //   // Verifica che solo il libro "Il Signore degli Anelli" sia visualizzato dopo la ricerca
  //   const bookElements = await screen.findAllByTestId("bootstrap-card");
  //   expect(bookElements).toHaveLength(1);
  // });
});
