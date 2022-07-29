describe('Auto-create Andon Parameters', () => {

  const userName = "devanliang@iii.org.tw"
  const password = "Abcd1234#"
  
  it('Access Andon PParameter', () => {
    
    //Clean cookies and local storage
    cy.clearLocalStorage().clearCookies()
    //Login
    cy.visit("https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/signIn")
    cy.get("input[placeholder='Username']").type(userName)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']")
      .click()
      .url()
      .should("include", "organizer")

    //enter Andon
    cy.visit("https://ifps-andon-ifpsdemo-eks005.sa.wise-paas.com/PParameter")
      .url()
      .should("include", "andon")

  })

  // it('Create new manual parameters', () => {
  //   cy.get(".portal-default-layout-breadcrumbs-wrapper > :nth-child(3) > .text").should("have.value", "Manual Parameter")
  //   // cy.get(':nth-child(1) > .portal-default-layout-tabs-block > .icon').click()
  })
