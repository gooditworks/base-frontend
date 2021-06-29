describe("Counter works correctly", () => {
  it("Increment/decrement works", () => {
    cy.visit("/")
    cy.get("[data-cy=counter_value]").invoke("text").should("equal", "0")

    cy.get("[data-cy=counter_inc]").click()
    cy.get("[data-cy=counter_value]").invoke("text").should("equal", "1")

    cy.get("[data-cy=counter_dec]").click()
    cy.get("[data-cy=counter_value]").invoke("text").should("equal", "0")
  })
})
