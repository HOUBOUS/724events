import {fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      // Change findByText in the queryByText to wait when text is written
      await screen.queryByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // to implement
    render (<Home/>);
    const eventListCard = screen.findByTestId("eventListCard-test");
    expect(eventListCard).toBeDefined();

  })
  it("a list a people is displayed", async() => {
    // to implement
    render (<Home/>);
    await screen.findByTestId("listTeamCard-test");

  })
  it("a footer is displayed", async() => {
    // to implement
    render (<Home/>);
    await screen.findByTestId("footer-test");
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
    render (<Home/>);
    const lastEventCard = screen.findByTestId("lastEventCard-test");
    expect(lastEventCard).toBeDefined();

  })
});
