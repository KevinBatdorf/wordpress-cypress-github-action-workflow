it('should be able to login automatically and redirect to dashboard', () => {
    cy.visit('http://localhost:8080/cypress')
    cy.url().should('contain', 'wp-admin')
})
