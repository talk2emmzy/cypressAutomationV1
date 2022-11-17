
describe('Login Page Test', () => {
	
    it('Verify that the URL is correct', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.url().should('include', '/commands/actions')
    })

    it('Verify that the user can login with valid ID and Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('')
  })

})
