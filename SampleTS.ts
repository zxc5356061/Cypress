describe('LoginLogout', () => {
  it('passes', () => {
    //Clean cookies and local storage
    cy.clearLocalStorage().clearCookies
    
    //Login
    cy.visit('https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/signIn')
    cy.get('form').get('input[placeholder="Username"]').type('devanliang@iii.org.tw')
    cy.get('form').get('input[placeholder="Password"]').type('Abcd1234#')
    cy.get('form').get('button[type="submit"]').click()

    //Check Account Name
    cy.get('.MuiTypography-root.jss106.jss108.MuiTypography-body1').click()
    cy.get('.MuiTypography-root.jss91').contains('devanliang@iii.org.tw')

    //Logout
    cy.get('.MuiTypography-root.jss106.jss108.MuiTypography-body1').get('div[id="user-menu"] li[role="menuitem"]').click()
    cy.url().should('include','signIn');//confirm whether logout successfully
  })
})
