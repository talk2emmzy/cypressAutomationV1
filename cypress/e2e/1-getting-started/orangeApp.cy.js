

describe('Login Page Test', function () {

    it ('verify app url is lunched - Implicit Assertions', function (){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.url().should('not.contain','fhghgsghsgshf') // Negative Test
        .and('contain','opensource-demo.orangehrmlive.com') //Positive Test
        .and('contain','/web/index.php/auth/login') //Positive Test
        

        cy.get("input[name='username']").type('Admin')
        .should('have.value','Admin') 
        cy.get("input[type='password']").type('admin123')
        .and('have.value','admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-userdropdown-name').should('contain','Paul Collings')

    }) 


    it ('verify app url is lunched - Implicit Assertions', function (){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        

    }) 



})