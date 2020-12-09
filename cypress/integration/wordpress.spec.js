it('should be able to login automatically and redirect to dashboard', () => {
    cy.visit('http://localhost:8080/wp-login.php')
    // user login
    cy.get('#user_login').type('wordpress', { delay: 0 });

    // user pass
    cy.get('#user_pass').type('wordpress', { delay: 0 });

    // wp submit
    cy.get('#wp-submit').click();

    cy.url().should('include', 'wp-admin')
    cy.get('h1').should('contain.text', 'Dashboard')
})
