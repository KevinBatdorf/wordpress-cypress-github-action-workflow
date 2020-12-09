it('should be able to login automatically and redirect to dashboard', () => {
    cy.visit('/cypress')
    cy.url().should('contain', 'wp-admin')
})
