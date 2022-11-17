

describe('Assertions in Cypress', () => {
  
  it('Common Implicit Assertions', () => {
  
    //visit url
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //verify the Page Title
    cy.title().should('eq','OrangeHRM')
    //verify the page title contain
    .and('contain','HRM')
    
    //verify url contains specific character/characters
    cy.url().should('include','demo.orangehrmlive.com')
    .should('contain','orangehrm')
    .and('contain','com/web')
    .and('contain','https://opensource-demo.')
    .and('contain','https://opensource-demo')
    
    //verify url does not contain specific character/characters
    cy.url().should('not.contain','orangehhm')
    .and('not.contain','orangehhm')
    .and('not.contain','miloS')
    
    //verify if image is visible 
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')

    cy.get("input[placeholder='Username']").type('Admin')
    //verify that the input character
    cy.get("input[placeholder='Username']").should('have.value','Admin')

  })


  it('Explicit Assertions - Expect or BDD and TDD Assertion', () => {
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get('.oxd-button').click

    let expectedName="john CollingsBoyle"; //store the name in a string
    
    cy.get(".oxd-userdropdown-name").then( (x)=>{

          let actualName=x.text() //here we capture the title of the element
          //BDD ASSERTION
          expected(actualName).to.equal(expectedName) //here we compare the actual name against the expected name(Positive Assertion)
          expected(actualName).to.not.equal(expectedName) //here if actual name is not equal to expected test should pass, cetris paribus (Negative Assertion)
          
          //TDD ASSERTION
          assert.equal(actualName,expectedName) //here we compare the actual name against the expected name(Positive Assertion)
          assert.notEqual(actualName,expectedName) //here if actual name is not equal to expected test should pass, cetris paribus (Negative Assertion)
          

    })


  })

})