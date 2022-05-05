describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/')

    //verify address
    cy.url().should('include', '/signIn')

    //input account
    cy.get('[name=username]')
      .type('devanliang@iii.org.tw')
      .should('have.value', 'devanliang@iii.org.tw')

    //input password
    cy.get('[name=password]')
      .type('Abcd1234#')

    //Sign in
    cy.get('[class=jss55]')
      .click()

    //Verify if successfully login
    cy.get('h3.MuiTypography-root.MuiTypography-h3')
      .should('have.text', 'Welcome, Devan Liang')

    //Verify if successfully logout
    cy.get('[class=jss43]')
      .get('#user-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li')
      //{force: true} > To Ignore built-in error checking because the element of sign out button is not visible.
      .click({force: true})

    cy.url().should('include', '/signIn')
  })
})