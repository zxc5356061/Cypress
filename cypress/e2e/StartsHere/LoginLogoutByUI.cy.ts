describe('LoginLogout', () => {
  it('Login', () => {

    const Username = 'devanliang@iii.org.tw';
    const Password = 'Abcd1234#';
    
    //Clean cookies and local storage
    cy.clearLocalStorage().clearCookies()
    //Login
    cy.visit("https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/signIn")
    cy.get("input[placeholder='Username']").type(Username)
    cy.get("input[placeholder='Password']").type(Password)
    cy.get("button[type='submit']").click()

    //Check Account Name
    cy.get(".MuiTypography-root.jss106.jss108.MuiTypography-body1").click()
    cy.get(".MuiTypography-root.jss91")
      .contains(Username)

    //Logout
    cy.get(".MuiTypography-root.jss106.jss108.MuiTypography-body1").get("div[id='user-menu'] li[role='menuitem']").click()
    cy.url().should("include","signIn");//confirm whether logout successfully
  })
})