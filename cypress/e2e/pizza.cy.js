describe('navigates to site', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.get("#order-pizza")
    .click()
  })

  it("can type in the inputs", () => {
    cy.get("#name-input")
    .type("Michael Wilcox")
    .should("have.value", "Michael Wilcox")
  })
})