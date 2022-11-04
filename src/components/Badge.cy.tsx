import '../../workaround-cypress-10-0-2-process-issue'
import Badge from "./Badge";

describe("Badge", () => {
    it("should mount", () => {
        cy.mount(<Badge name="Grass" />);
        cy.get("span").contains("Grass");
        cy.get("span").should("have.css", "background-color", "rgb(98, 185, 87)");
    });
});